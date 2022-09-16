import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const ItensContext = createContext({});

export const ItensProvider = ({ children }) => {
  const [itens, setItens] = useState([]);

  const adicionarItem = (produto_id, data) => {
    api
      .post(`produto/${produto_id}/item/`, data)
      .then((response) => {
        toast.success("item criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
    listaTodosItens();
  };

  function listaTodosItens(produto_id) {
    api
      .get(`produto/${produto_id}/`)
      .then((response) => {
        console.log(response);
        setItens(response);
        toast.success("Item listado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  }

  const atualizaItem = (item_id, data) => {
    api
      .post(`item/${item_id}/`, data)
      .then((response) => {
        toast.success("Item atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaItem = (item_id) => {
    api
      .post(`item/${item_id}/`)
      .then((response) => {
        toast.success("Item deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <ItensContext.Provider
      value={{
        itens,
        setItens,
        adicionarItem,
        listaTodosItens,
        atualizaItem,
        deletaItem,
      }}
    >
      {children}
    </ItensContext.Provider>
  );
};
