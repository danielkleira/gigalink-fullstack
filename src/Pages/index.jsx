import { useContext } from "react";
import Header from "../Components/Header";
import { BodyContext } from "../Providers/Body";
import Fornecedores from "./Fornecedores";
import Itens from "./Itens";
import Pedidos from "./Pedidos";
import Transportadoras from "./Transportadoras";

const Body = () => {
  const { tab } = useContext(BodyContext);

  return (
    <>
    
      <Header />
      {tab === "fornecedores" ? (
        <Fornecedores />
      ) : tab === "itens" ? (
        <Itens />
      ) : tab === "pedidos" ? (
        <Pedidos />
      ) : tab === "transportadoras" ? (
        <Transportadoras />
      ) : (
        <Fornecedores />
      )}
    </>
  );
};

export default Body;
