<template>
  <q-page padding class="flex flex-center">
    <div class="full-width mw300">
      <div class="text-center q-mb-md">
        <img
          style="object-fit: cover"
          src="../../assets/orient_logo.png"
          alt="feed"
        />
      </div>
      <q-form @submit="onSubmit">
        <q-input
          outlined
          :rules="[rules.nome]"
          lazy-rules
          v-model="form.nome"
          label="Nome"
          class="q-mb-sm"
        />

        <q-input
          outlined
          :rules="[rules.email]"
          lazy-rules
          v-model="form.email"
          label="E-mail"
          class="q-mb-sm"
        />

        <q-input
          outlined
          :rules="[rules.cnpj]"
          lazy-rules
          v-model="form.cnpj"
          mask="##.###.###/####-##"
          label="CNPJ"
          class="q-mb-sm"
        />

        <InputPsw
          v-model="form.senha"
          label="Senha"
          class="q-mb-sm"
          :regra="[rules.senha]"
        />

        <InputPsw
          v-model="form.confirmSenha"
          label="Confirme sua Senha"
          class="q-mb-sm"
          :regra="[
            (val) => (val && val === form.senha) || 'Senhas diferentes.',
          ]"
        />

        <div class="text-left row">
          <q-checkbox v-model="accTermos" class="col-2" />
          <div class="col text-caption">
            Ao avançar concordo com os
            <a
              class="text-primary text-bold cursor-pointer"
              @click="termos = true"
              >Termos e Condições</a
            >
            deste serviço.
          </div>
        </div>

        <q-btn
          class="full-width q-my-md q-py-sm"
          color="primary"
          unelevated
          label="Cadastrar"
          type="submit"
        />
      </q-form>

      <p class="full-width q-my-md text-center text-grey-8">
        Já tem cadastro?
        <a href="#/" class="text-primary text-bold cursor-pointer"
          >Clique aqui</a
        >
      </p>
    </div>
    <DialogTermos v-model="termos" @click="(v) => (accTermos = v)" />
  </q-page>
</template>

<script>
import DialogTermos from "src/components/Dialogs/DialogTermos.vue";
import InputPsw from "src/components/Inputs/InputPsw.vue";
import Validation from "src/services/Validation";
export default {
  name: "CadastroUniversidade",
  components: { DialogTermos, InputPsw },
  data() {
    return {
      termos: false,
      form: {},
      isPwd: true,
      accTermos: false,
    };
  },
  computed: {
    rules() {
      return {
        email: (val) => Validation.isEmailValido(val),
        senha: (val) => Validation.isTamanhoValido(val, 5),
        nome: (val) => Validation.isTamanhoValido(val, 4),
        cnpj: (val) => Validation.isTamanhoValido(val, 18),
      };
    },
  },
  methods: {
    onSubmit() {
      console.log(`${this.form.email} - ${$this.form.senha}`);
    },
  },
};
</script>
