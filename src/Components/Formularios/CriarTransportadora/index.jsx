import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TransportadorasContext } from "../../../Providers/Transportadoras";
import { useContext } from "react";

const FormularioTransportadora = (handleClose, listar) => {
  const { adicionarTransportadora, listaTodasTransportadoras } = useContext(
    TransportadorasContext
  );

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
    console.log(infos);
    adicionarTransportadora(infos);
    handleClose();
    listaTodasTransportadoras();
  };

  return (
    <Container>
      <header> Cadastro de Transportadoras</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input
          label={"Nome"}
          name={"nome"}
          {...register("nome")}
          placeholder="Digite o nome da transportadora"
        />
        <p>{errors.nome?.message}</p>

        <button type="submit">Cadastrar Transportadora</button>
      </form>
    </Container>
  );
};
export default FormularioTransportadora;
