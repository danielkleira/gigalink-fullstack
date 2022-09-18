import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useEffect } from "react";

export const TelefoneContext = createContext({});

export const TelefonesProvider = ({ children }) => {
  const [telefones, setTelefones] = useState([]);

  const adicionarTelefone = (id, data) => {
    api
      .post(`telefone/${id}/list/`, data)
      .then((response) => {
        toast.success("Telefone criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listaTelefones =async (id) => {
    await api.get(`telefone/${id}/list/`).then((response) => {
      setTelefones(response.data);
    });
  };

  const atualizaTelefone = (id, data) => {
    api
      .patch(`telefone/${id}`, data)
      .then((response) => {
        toast.success("Telefone atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaTelefone = (id) => {
    api
      .delete(`telefone/${id}`)
      .then((response) => {
        toast.success("Telefone deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
      listaTelefones(id)
  };

  return (
    <TelefoneContext.Provider
      value={{
        telefones,
        adicionarTelefone,
        listaTelefones,
        atualizaTelefone,
        deletaTelefone,
      }}
    >
      {children}
    </TelefoneContext.Provider>
  );
};
