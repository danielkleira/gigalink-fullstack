import { useContext } from "react";
import { ItensContext } from "../../Providers/Itens";
import { Container } from "./style";

const Itens = () => {
  const {
    itens,
    setItens,
    adicionarItem,
    listaTodosItens,
    atualizaItem,
    deletaItem
  } = useContext(ItensContext);

  return (
    <>
      <Container></Container>
    </>
  );
};
export default Itens;
