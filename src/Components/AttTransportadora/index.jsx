import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TransportadorasContext } from "../../Providers/Transportadoras";
import { useContext } from "react";

const FormularioAttTransportadora = ({ id, handleclose}) => {
  const { atualizaTransportadora } = useContext(TransportadorasContext);

  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    const infos = {
      nome: data.nome,
      
    };
    atualizaTransportadora(id, infos);
    handleclose();
  };
  return (
    <Container>
      <header> Atualização de transportadora</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input
          label={"Nome"}
          name={"nome"}
          {...register("nome")}
          placeholder="Digite o nome da transportadora"
        />
        <p>{errors.nome?.message}</p>


        <button type="submit">Atualizar transportadora</button>
      </form>
    </Container>
  );
};
export default FormularioAttTransportadora;
