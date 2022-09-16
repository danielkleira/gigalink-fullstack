import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useEffect } from "react";

export const FornecedoresContext = createContext({});

export const FornecedoresProvider = ({ children }) => {
  const [fornecedores, setFornecedores] = useState([]);

  const adicionarFornecedor = (data) => {
    api
      .post(`fornecedor/`, data)
      .then((response) => {
        toast.success("Fornecedor criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const listaTodosFornecedores = () => {
    api
      .get(`fornecedor/`)
      .then((response) => {
        setFornecedores(response.data);
        toast.success("Fornecedor listado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const atualizaFornecedor = (id) => {
    api
      .post(`fornecedor/${id}/`)
      .then((response) => {
        toast.success("Fornecedor atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaFornecedor = (id) => {
    api
      .post(`fornecedor/${id}/`)
      .then((response) => {
        toast.success("Fornecedor deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <FornecedoresContext.Provider
      value={{
        fornecedores,
        setFornecedores,
        adicionarFornecedor,
        listaTodosFornecedores,
        atualizaFornecedor,
        deletaFornecedor,
      }}
    >
      {children}
    </FornecedoresContext.Provider>
  );
};
