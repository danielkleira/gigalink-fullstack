import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
export const TransportadorasContext = createContext({});

export const TransportadorasProvider = ({ children }) => {
  const [transportadoras, setTransportadoras] = useState([]);

  const adicionarTransportadora = (data) => {
    api
      .post(`transportadoras/`, data)
      .then((response) => {
        toast.success("Transportadora criada");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
    listaTodasTransportadoras();
  };

  function listaTodasTransportadoras() {
    api
      .get(`transportadoras/`)
      .then((response) => {
        setTransportadoras(response);
        toast.success("Transportadora listada");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  }

  const atualizaTransportadora = (transportadora_id) => {
    api
      .post(`transportadoras/${transportadora_id}/`)
      .then((response) => {
        toast.success("Transportadora atualizada");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaTransportadora = (transportadora_id) => {
    api
      .post(`transportadoras/${transportadora_id}/`)
      .then((response) => {
        toast.success("Transportadora deletada");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <TransportadorasContext.Provider
      value={{
        transportadoras,
        setTransportadoras,
        adicionarTransportadora,
        listaTodasTransportadoras,
        atualizaTransportadora,
        deletaTransportadora,
      }}
    >
      {children}
    </TransportadorasContext.Provider>
  );
};

export const Transportadoras = () => useContext(TransportadorasContext);
