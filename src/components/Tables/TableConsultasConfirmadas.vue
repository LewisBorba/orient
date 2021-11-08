<template>
  <q-table
    title="Consultas confirmadas"
    :grid="$q.screen.xs"
    :data="data"
    :columns="columns"
    row-key="name"
    class="q-mb-lg"
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
          <q-btn
            v-if="col.name == 'link'"
            color="primary"
            round
            dense
            icon="content_copy"
          />

          <span v-if="col.name == 'link'">&nbsp;</span>

          <a v-if="col.name == 'link'" :href="col.value"> {{ col.value }}</a>

          <span v-if="col.name != 'link'">
            {{ col.value }}
          </span>
        </q-td>
      </q-tr>
    </template>

    <template v-slot:item="props">
      <q-card class="q-my-xs q-pb-xs full-width">
        <q-card-section>
          <div class="q-mb-sm">
          <q-btn color="primary" round dense icon="content_copy" />
          &nbsp;
          Link: <br />
          </div>
          <a :href="props.row.link">{{ props.row.link }}</a>
        </q-card-section>

        <q-separator />

        <q-list dense>
          <q-item
            v-for="col in props.cols.filter((col) => col.name != 'link')"
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
  name: "TableConsultasConfirmadas",
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
  },
};
</script>
