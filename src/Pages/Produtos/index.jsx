import { useContext } from "react";
import { ProdutosContext } from "../../Providers/Produtos";
import { Container } from "./style";

const Produtos = () => {
  const {
    produtos,
    setProdutos,
    adicionarProduto,
    listaTodosProdutos,
    atualizaProduto,
    deletaProduto,
  } = useContext(ProdutosContext);

  return (
    <>
      <Container></Container>
    </>
  );
};
export default Produtos;
