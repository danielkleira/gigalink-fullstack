import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProdutosContext } from "../../../Providers/Produtos";
import { useContext } from "react";

const FormularioAttProduto = (idFornecedor, { attClose }) => {
  const { atualizaProduto } = useContext(ProdutosContext);

  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
    descricao: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    const infos = {
      nome: data.nome,
      descricao: data.descricao,
    };
    atualizaProduto(idFornecedor.id, infos);
    attClose();
  };
  return (
    <Container>
      <header> Atualização de produtos</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input
          label={"Nome"}
          name={"nome"}
          {...register("nome")}
          placeholder="Digite o nome do produto"
        />
        <p>{errors.nome?.message}</p>
        <input
          label={"Descrição"}
          name={"descricao"}
          {...register("descricao")}
          placeholder="Descrição"
        />
        <p>{errors.descricao?.message}</p>
        <button type="submit">Atualizar produto</button>
      </form>
    </Container>
  );
};
export default FormularioAttProduto;
