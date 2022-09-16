import { useContext } from "react";
import { TransportadorasContext } from "../../Providers/Transportadoras";
import { Container } from "./style";

const Transportadoras = () => {
  const {
    transportadoras,
    setTransportadoras,
    adicionarTransportadora,
    listaTodasTransportadoras,
    atualizaTransportadora,
    deletaTransportadora,
  } = useContext(TransportadorasContext);

  return (
    <>
      <Container></Container>
    </>
  );
};
export default Transportadoras;
