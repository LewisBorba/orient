<template>
  <q-page padding class="flex flex-center">
    <div class="full-width mw300">
      <div class="text-center q-mb-md">
        <img
          style="object-fit: cover"
          src="../assets/orient_logo.png"
          alt="feed"
        />
      </div>
      <q-form @submit="onSubmit">
        <q-input
          outlined
          :rules="[rules.email]"
          lazy-rules
          v-model="form.email"
          label="E-mail"
          class="q-mb-sm"
        />

        <q-input
          :rules="[rules.senha]"
          lazy-rules
          v-model="form.password"
          outlined
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          class="q-mb-sm"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn
          class="full-width q-mb-md q-py-sm"
          color="primary"
          unelevated
          label="Entrar"
          type="submit"
          :loading="loading"
        />
      </q-form>

      <p class="full-width q-my-md text-center text-grey-8">
        Ainda não tem cadastro?
        <span
          @click="cadastro = !cadastro"
          class="text-primary text-bold cursor-pointer"
          >Clique aqui</span
        >
      </p>
    </div>
    <DialogCadastro v-model="cadastro" />
  </q-page>
</template>

<script>
import DialogCadastro from "src/components/Dialogs/DialogCadastro.vue";
import Validation from "src/services/Validation";
import { User } from "src/models/User";
export default {
  name: "Menu",
  components: { DialogCadastro },
  data() {
    return {
      cadastro: false,
      form: {},
      isPwd: true,
      loading: false,
    };
  },
  computed: {
    rules() {
      return {
        email: (val) => Validation.isEmailValido(val),
        senha: (val) => Validation.isTamanhoValido(val, 5),
      };
    },
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      const success = await new User().login(this.form);
      success
        ? this.$router.push({ name: "LobbyUser", params: { id: success.id } })
        : (this.form.password = "");
      this.loading = false;
    },
  },
};
</script>
