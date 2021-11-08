<template>
  <div>
    <q-table
      :title="title"
      :data="data"
      :columns="columns"
      row-key="name"
      class="q-mb-md"
      :grid="$q.screen.xs"
      :loading="loading"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}

            <q-btn
              v-if="col.name == 'accept'"
              color="primary"
              round
              icon="check"
              @click="updateId(props.row.id)"
            />
          </q-td>
        </q-tr>
      </template>

      <template v-slot:item="props">
        <q-card class="q-my-xs q-pb-xs full-width">
          <q-card-section>
            <q-btn
              color="primary"
              icon="check"
              label="Aceitar"
              @click="updateId(props.row.id)"
            />
          </q-card-section>

          <q-separator />

          <q-list dense>
            <q-item
              v-for="col in props.cols.filter((col) => col.name != 'accept')"
              :key="col.name"
              :props="props"
            >
              <q-item-section>
                <q-item-label>{{ col.name }}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label caption>{{ col.value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </template>
    </q-table>

    <q-dialog v-model="dialog">
      <q-card style="width: 100%; max-width: 400px">
        <q-form @submit="onSubmit">
          <q-card-section>
            <div class="text-h6">Informe abaixo</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              class="q-mb-md"
              v-model="form.acceptedHour"
              outlined
              label="Dia e horário"
              :rules="[rules.horarios]"
              hint="Obrigatório"
            />

            <q-input
              class="q-mb-md"
              v-model="form.link"
              outlined
              label="Link"
              :rules="[rules.link]"
              hint="Obrigatório"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancelar" color="negative" v-close-popup />
            <q-btn flat :loading="loadingBtn" label="Enviar" color="primary" type="submit" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Validation from "src/services/Validation";
export default {
  name: "TablePacientes",
  props: {
    data: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      idToUpdate: null,
      form: { medicId: null },
      loadingBtn: false,
      columns: [
        {
          name: "availableHours",
          label: "Horários disponíveis",
          align: "left",
          field: "availableHours",
        },
        {
          name: "appointmentType",
          align: "left",
          label: "Tipo de atendimento",
          field: "appointmentType",
        },
        {
          name: "accept",
          field: "accept",
          label: "Aceitar",
          align: "center",
          style: "width:10px",
        },
      ],
    };
  },
  computed: {
    rules() {
      return {
        horarios: (val) => Validation.isTamanhoValido(val, 5),
        link: (val) => Validation.isTamanhoValido(val, 10),
      };
    },
  },
  mounted() {
    if (this.$route.params.id) this.form.medicId = this.$route.params.id;
  },
  methods: {
    updateId(id) {
      this.dialog = true;
      this.idToUpdate = id;
    },
    async onSubmit() {
      this.loadingBtn = true;
      this.$emit("aceitarConsulta", this.idToUpdate, this.form);
      this.dialog = false;
      this.loadingBtn = false;
    },
  },
};
</script>
