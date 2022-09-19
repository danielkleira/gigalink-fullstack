import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProdutosContext } from "../../../Providers/Produtos";
import { useContext } from "react";

const FormularioProduto = (idFornecedor) => {
  const { adicionarProduto } = useContext(ProdutosContext);

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
    console.log(idFornecedor)
    const infos = {
      nome: data.nome,
      descricao: data.descricao,
    };
    adicionarProduto(idFornecedor.idFornecedor,infos);
  };
  return (
    <Container>
      <header> Cadastro de produtos</header>
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
        <button type="submit">Cadastrar produto</button>
      </form>
    </Container>
  );
};
export default FormularioProduto;