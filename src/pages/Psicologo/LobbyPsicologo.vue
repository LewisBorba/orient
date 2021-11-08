<template>
  <q-page padding>
    <p class="text-h6 text-grey-8 q-mt-md text-center">Gestão de Consultas</p>
    <TablePacientes
      :loading="loadingPacientes"
      :data="dataPacientesPsico"
      title="Pacientes Psicoterapia"
      @aceitarConsulta="(id, data) => aceitarConsulta(id, data)"
    />
    <TablePacientes
      :loading="loadingPacientes"
      :data="dataPacientesOrient"
      title="Pacientes Orientação Psicológica"
      @aceitarConsulta="(id, data) => aceitarConsulta(id, data)"
    />
    <TableConsultasConfirmadas
      :loading="loadingConsultasConfirmadas"
      :data="dataConsultasConfirmadas"
      :columns="columns"
    />
  </q-page>
</template>

<script>
import TableConsultasConfirmadas from "src/components/Tables/TableConsultasConfirmadas.vue";
import TablePacientes from "src/components/Tables/TablePacientes.vue";
import { Consulta } from "src/models/Consulta";
export default {
  name: "LobbyPsicologo",
  components: { TableConsultasConfirmadas, TablePacientes },
  data() {
    return {
      id: null,
      dataConsultasConfirmadas: [],
      loadingConsultasConfirmadas: false,
      dataPacientesPsico: [],
      dataPacientesOrient: [],
      loadingPacientes: false,
      columns: [
        {
          name: "acceptedHour",
          label: "Horário confirmado",
          align: "left",
          field: "acceptedHour",
        },
        {
          name: "link",
          align: "left",
          label: "Link para o atendimento",
          field: "link",
        },
        {
          name: "appointmentType",
          align: "left",
          label: "Tipo de atendimento",
          field: "appointmentType",
        },
      ],
    };
  },
  async mounted() {
    if (this.$route.params.id) this.id = this.$route.params.id;
    await this.getConsultas();
    await this.getPacientesOrient();
    await this.getPacientesPsico();
  },
  methods: {
    async getPacientesPsico() {
      this.loadingPacientes = true;
      const success = await new Consulta().getPacientes("PSICOTERAPIA");
      success
        ? (this.dataPacientesPsico = success)
        : (this.dataPacientesPsico = []);
      this.loadingPacientes = false;
    },
    async getPacientesOrient() {
      this.loadingPacientes = true;
      const success = await new Consulta().getPacientes(
        "ORIENTACAO_PROFISSIONAL"
      );
      success
        ? (this.dataPacientesOrient = success)
        : (this.dataPacientesOrient = []);
      this.loadingPacientes = false;
    },
    async getConsultas() {
      this.loadingConsultasConfirmadas = true;
      const success = await new Consulta().getConsultasMarcadas(this.id);
      success
        ? (this.dataConsultasConfirmadas = success)
        : (this.dataConsultasConfirmadas = []);
      this.loadingConsultasConfirmadas = false;
    },
    async aceitarConsulta(id, data) {
      await new Consulta().aceitarConsulta(id, data);
      await this.getConsultas();
      await this.getPacientesOrient();
      await this.getPacientesPsico();
    },
  },
};
</script>
