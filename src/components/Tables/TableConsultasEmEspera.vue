<template>
  <q-table
    title="Consultas em espera"
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
            v-if="col.name == 'delete'"
            color="primary"
            round
            icon="close"
            @click="$emit('deletar', props.row.id)"
          />
        </q-td>
      </q-tr>
    </template>

    <template v-slot:item="props">
      <q-card class="q-my-xs q-pb-xs full-width">
        <q-card-section>
          <q-btn
            color="primary"
            icon="close"
            label="excluir"
            @click="$emit('deletar', props.row.id)"
          />
        </q-card-section>

        <q-separator />

        <q-list dense>
          <q-item
            v-for="col in props.cols.filter((col) => col.name != 'delete')"
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
</template>

<script>
export default {
  name: "TableConsultasEmEspera",
  props: {
    data: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
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
          name: "delete",
          field: "delete",
          label: "Excluir",
          align: "center",
          style: "width:10px",
        },
      ],
    };
  },
};
</script>
