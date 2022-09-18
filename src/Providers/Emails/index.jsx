import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const EmailsContext = createContext({});

export const EmailsProvider = ({ children }) => {
  const [emails, setemails] = useState([]);

  const adicionarEmail = (id, data) => {
    api
      .post(`email/${id}/`, data)
      .then((response) => {
        toast.success("Email criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listaEmails = (id) => {
    api.get(`email/${id}/`).then((response) => {
      setemails(response.data);
    });
  };

  const atualizaEmail = (fornecedor_id, email_id, data) => {
    api
      .patch(`email/${fornecedor_id}/${email_id}/`, data)
      .then((response) => {
        toast.success("Email atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaEmail = (fornecedor_id, email_id) => {
    api
      .delete(`email/${fornecedor_id}/${email_id}/`)
      .then((response) => {
        toast.success("Email deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <EmailsContext.Provider
      value={{
        emails,
        adicionarEmail,
        listaEmails,
        atualizaEmail,
        deletaEmail,
      }}
    >
      {children}
    </EmailsContext.Provider>
  );
};
