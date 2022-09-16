import { useContext } from "react";
import { PedidosContext } from "../../Providers/Pedidos";
import { Container } from "./style";

const Pedidos = () => {
  const {
    pedidos,
    setPedidos,
    adicionarPedido,
    listaTodosPedidos,
    atualizaPedido,
    deletaPedido,
  } = useContext(PedidosContext);

  return (
    <>
      <Container></Container>
    </>
  );
};
export default Pedidos;
