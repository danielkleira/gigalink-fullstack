import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const PedidosContext = createContext([]);

export const PedidosProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);

  const adicionarPedido = (transportadora_id, data) => {
    api
      .post(`transportadora/pedidos/${transportadora_id}/`, data)
      .then((response) => {
        toast.success("item criado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  function listaTodosPedidos() {
    api
      .get(`transportadora/pedidos/`)
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  }

  const atualizaPedido = (pedido_id, data) => {
    api
      .patch(`pedidos/${pedido_id}/`, data)
      .then((response) => {
        toast.success("Pedido atualizado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  const deletaPedido = (pedido_id) => {
    api
      .delete(`pedidos/${pedido_id}/`)
      .then((response) => {
        toast.success("Pedido deletado");
      })
      .catch((err) => {
        toast.error("Algo deu errado");
      });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedidos,
        setPedidos,
        adicionarPedido,
        listaTodosPedidos,
        atualizaPedido,
        deletaPedido,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};
