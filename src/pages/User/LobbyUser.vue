<template>
  <q-page>
    <q-tabs
      v-model="tab"
      dense
      align="justify"
      class="bg-primary text-white shadow-2"
      :breakpoint="0"
    >
      <q-tab name="marcar_consulta" icon="alarm" label="Marcar Consulta" />
      <q-tab name="minhas_consultas" icon="list" label="Minhas Consultas" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated swipeable>
      <q-tab-panel name="marcar_consulta">
        <div class="width-50-desktop">
          <p class="text-h6">Informações para marcar uma consulta:</p>
          <q-form @submit="onSubmit">
            <p class="q-mb-sm">
              Quais os melhores dias e horários para o seu atendimento?
            </p>
            <q-input
              class="q-mb-md"
              v-model="form.availableHours"
              outlined
              label="Dias e horários"
              type="textarea"
              :rules="[rules.horarios]"
              hint="Obrigatório"
            />

            <q-separator class="q-mb-md" />
            <p>
              <span class="text-bold"> Psicoterapia: </span> Serviço destinado
              ao tratamento de questões emocionais como ansiedade, depressão, a
              perda de alguém querido, um desconforto emocional no trabalho ou
              problemas de relacionamento. Orientação
            </p>
            <q-separator class="q-mb-md" />
            <p>
              <span class="text-bold"> Orientação Profissional: </span> Processo
              de aconselhamento para ajudar a resolver dúvidas sobre as áreas de
              trabalho e fortalecer o seu conhecimento sobre si mesmo, através
              da identificação de suas habilidades e interesses.
            </p>
            <q-separator class="q-mb-md" />
            <p class="q-mb-sm">
              Informe o tipo de Consulta que deseja receber:
            </p>
            <q-select
              class="q-mb-md"
              v-model="form.appointmentType"
              label="Tipo de atendimento"
              outlined
              :options="options"
              hint="Obrigatório"
            />
            <q-btn
              class="full-width q-mb-md q-py-sm"
              color="primary"
              unelevated
              label="Solicitar aceite"
              type="submit"
            />
          </q-form>
        </div>
      </q-tab-panel>

      <q-tab-panel name="minhas_consultas">
        <TableConsultasEmEspera
          :loading="loadingConsultasEmEspera"
          @deletar="(v) => deletar(v)"
          :data="dataConsultasEmEspera"
        />
        <TableConsultasConfirmadas
          :loading="loadingConsultasConfirmadas"
          :data="dataConsultasConfirmadas"
          :columns="columns"
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import Validation from "src/services/Validation";
import TableConsultasConfirmadas from "src/components/Tables/TableConsultasConfirmadas.vue";
import TableConsultasEmEspera from "src/components/Tables/TableConsultasEmEspera.vue";
import { Consulta } from "src/models/Consulta";
export default {
  name: "LobbyUser",
  components: { TableConsultasConfirmadas, TableConsultasEmEspera },
  data() {
    return {
      tab: "marcar_consulta",
      form: { idPatient: null },
      options: ["Psicoterapia", "Orientação Profissional"],
      dataConsultasEmEspera: [],
      loadingConsultasEmEspera: false,
      dataConsultasConfirmadas: [],
      loadingConsultasConfirmadas: false,
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
    if (this.$route.params.id) this.form.idPatient = this.$route.params.id;
    await this.getUsersConsultas();
    await this.getUsersAcceptedConsultas();
  },
  computed: {
    rules() {
      return {
        horarios: (val) => Validation.isTamanhoValido(val, 5),
      };
    },
  },
  methods: {
    async deletar(v) {
      const success = await new Consulta().deletarConsulta(v);
      if (success) await this.getUsersConsultas();
    },
    async onSubmit() {
      if (this.form.appointmentType == "Psicoterapia") {
        this.form.appointmentType = "PSICOTERAPIA";
      } else {
        this.form.appointmentType = "ORIENTACAO_PROFISSIONAL";
      }
      const success = await new Consulta().criar(this.form);
      if (success) await this.getUsersConsultas();
      this.tab = "minhas_consultas";
    },
    async getUsersConsultas() {
      this.loadingConsultasEmEspera = true;
      const success = await new Consulta().getUsersConsultas(
        this.form.idPatient
      );
      this.dataConsultasEmEspera = success.map((v) => ({
        ...v,
        appointmentType:
          v.appointmentType == "PSICOTERAPIA"
            ? "Psicoterapia"
            : "Orientação Profissional",
      }));
      this.loadingConsultasEmEspera = false;
    },
    async getUsersAcceptedConsultas() {
      this.loadingConsultasConfirmadas = true;
      this.dataConsultasConfirmadas = await new Consulta().getUsersAcceptedConsultas(
        this.form.idPatient
      );
      this.loadingConsultasConfirmadas = false;
    },
  },
};
</script>
