import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
export const ProdutosContext = createContext({});

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (fornecedor_id, data) => {
    api
      .post(`fornecedor/${fornecedor_id}/produto/`, data)
      .then((response) => {
        toast.success("Produto criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
    listaTodosProdutos();
  };

  function listaTodosProdutos(fornecedor_id) {
    api
      .get(`fornecedor/${fornecedor_id}/produto/`)
      .then((response) => {
        console.log(response);
        setProdutos(response);
        toast.success("Produto listado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  }

  const atualizaProduto = (produto_id, data) => {
    api
      .post(`produto/${produto_id}/`, data)
      .then((response) => {
        toast.success("Produto atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaProduto = (produto_id) => {
    api
      .post(`/fornecedor/${produto_id}/`)
      .then((response) => {
        toast.success("Produto deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <ProdutosContext.Provider
      value={{
        produtos,
        setProdutos,
        adicionarProduto,
        listaTodosProdutos,
        atualizaProduto,
        deletaProduto,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
