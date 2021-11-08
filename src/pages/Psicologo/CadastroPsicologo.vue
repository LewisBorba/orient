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
          v-model="form.name"
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
          :rules="[rules.crp]"
          lazy-rules
          v-model="form.crp"
          mask="CRP - ##/######"
          label="CRP"
          class="q-mb-sm"
        />

        <InputPsw
          v-model="form.password"
          label="Senha"
          class="q-mb-sm"
          :regra="[rules.senha]"
        />

        <InputPsw
          v-model="form.confirmSenha"
          label="Confirme sua Senha"
          class="q-mb-sm"
          :regra="[
            (val) => (val && val === form.password) || 'Senhas diferentes.',
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
          :loading="loading"
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
import { User } from "src/models/User";
export default {
  name: "CadastroPsicologo",
  components: { DialogTermos, InputPsw },
  data() {
    return {
      termos: false,
      form: { type: "perguntar pro gabriel" },
      isPwd: true,
      accTermos: false,
      loading: false,
    };
  },
  computed: {
    rules() {
      return {
        email: (val) => Validation.isEmailValido(val),
        senha: (val) => Validation.isTamanhoValido(val, 5),
        confirm: (val) => Validation.isTamanhoValido(val, 5),
        nome: (val) => Validation.isTamanhoValido(val, 4),
        crp: (val) => Validation.isTamanhoValido(val, 15),
      };
    },
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      const success = await new User().cadastro(
        "medic",
        this.form,
        this.accTermos
      );
      success
        ? this.$router.push({ name: "LobbyPsicologo", params: { id: success.id } })
        : (this.form.password = "");
      this.loading = false;
    },
  },
};
</script>
