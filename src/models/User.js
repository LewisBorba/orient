import { post } from "axios";
import { Notify } from "quasar";

export class User {
  async login(credentials) {
    let success = false;
    await post("/user/login", credentials)
      .then((response) => {
        Notify.create({ type: "positive", message: "Bem-vindo" });
        success = response.data;
      })
      .catch((error) => {
        console.log(error);

        Notify.create({
          type: "warning",
          message: "E-mail ou Senha incorreta, tente novamente.",
        });
      });
    return success;
  }

  async cadastro(type, data, acc) {
    let success = false;
    let route = "/patient";
    if (type === "medic") route = "/medic";
    if (!acc) {
      Notify.create({
        type: "warning",
        message: "Você precisa aceitar os termos e condições de privacidade.",
      });
    } else {
      await post(route, data)
        .then((response) => {
          Notify.create({
            type: "positive",
            progress: true,
            timeout: 4000,
            message: "Seja Bem-Vindo(a)",
          });
          success = response.data;
        })
        .catch((error) => {
          console.log(error);
          Notify.create({
            type: "negative",
            message: "Oops! algo deu errado :( tente novamente mais tarde",
          });
        });
    }
    return success;
  }
}
