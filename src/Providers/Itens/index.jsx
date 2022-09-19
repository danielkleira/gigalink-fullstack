import { createContext, useState, } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const ItensContext = createContext({});

export const ItensProvider = ({ children }) => {
  const [itens, setItens] = useState([]);

  const adicionarItem = (produtoId, data) => {
    api
      .post(`produto/${produtoId}/item/`, data)
      .then((response) => {
        toast.success("item criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listaTodosItens = ()=> {
    api
      .get(`item/`)
      .then((response) => {
        setItens(response.data);        
      })
  }

  const atualizaItem = (itemId, data) => {
    api
      .patch(`item/${itemId}/`, data)
      .then((response) => {
        toast.success("Item atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaItem = (itemId) => {
    api
      .delete(`item/${itemId}/`)
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
