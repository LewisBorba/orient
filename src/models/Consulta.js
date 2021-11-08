import axios, { post, get, put } from "axios";
import { Notify } from "quasar";

export class Consulta {
  async criar(data) {
    let success = false;
    await post("/appointment", data)
      .then((response) => {
        Notify.create({
          type: "positive",
          progress: true,
          timeout: 4000,
          message: "Solicitação Cadastrada",
        });
        success = true;
      })
      .catch((error) => {
        console.log(error);
        Notify.create({
          type: "negative",
          message: "Oops! algo deu errado :( tente novamente mais tarde",
        });
      });

    return success;
  }

  async getUsersConsultas(id) {
    let success = false;
    await get(`/appointment/requested-appointments/${id}`)
      .then((response) => {
        success = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return success;
  }

  async getUsersAcceptedConsultas(id) {
    let success = false;
    await get(`/appointment/accepted-appointments/${id}`)
      .then((response) => {
        success = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return success;
  }

  async getPacientes(args) {
    let success = false;
    await get(`/appointment/available-appointments/${args}`)
      .then((response) => {
        success = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return success;
  }

  async getConsultasMarcadas(id) {
    let success = false;
    await get(`/appointment/scheduled-appointments/${id}`)
      .then((response) => {
        success = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return success;
  }

  async deletarConsulta(id) {
    let success = false;
    await axios
      .delete(`/appointment/cancel-appointment/${id}`)
      .then((response) => {
        Notify.create({
          type: "positive",
          icon: "remove_circle_outline",
          message: "Consulta Removida",
        });
        success = true;
      })
      .catch((error) => {
        console.log(error);
        Notify.create({ type: "negative", message: "Oops! algo deu errado" });
      });
    return success;
  }

  async aceitarConsulta(id, data) {
    let success = false;
    await put(`/appointment/${id}`, data)
      .then((res) => {
        success = true;
      })
      .catch((e) => {
        console.log(e);
      });
    return success;
  }
}
