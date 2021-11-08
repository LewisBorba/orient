<template>
  <q-dialog v-model="propModel">
    <q-card>
      <q-card-section>
        <div class="text-h6">O que você deseja:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div>
          <q-btn
            no-caps
            class="full-width q-mb-sm"
            label="Ser um(a) paciente"
            type="a"
            href="#/Cadastro/User"
          />
          <q-btn
            no-caps
            class="full-width q-mb-sm"
            label="Atender como um(a) psicólogo(a)"
            type="a"
            href="#/Cadastro/Psicologo"
          />
          <q-btn
            no-caps
            class="full-width q-mb-sm"
            label="Cadastrar sua universidade"
            type="a"
            href="#/Cadastro/Universidade"
          />
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          icon="chevron_left"
          label="Voltar"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "DialogCadastro",
  props: {
    value: Boolean,
  },
  computed: {
    propModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
