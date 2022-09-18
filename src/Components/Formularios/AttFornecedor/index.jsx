import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FornecedoresContext } from "../../../Providers/Fornecedores";
import { useContext } from "react";

const FormularioAttFornecedor = ({id, handleclose, listar }) => {
  const { atualizaFornecedor } = useContext(FornecedoresContext);
  
  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
    descricao: yup.string().required("Campo obrigatório!"),
    cidade: yup.string().required("Campo Obrigatório!"),
    endereco: yup.string().required("Campo Obrigatório!"),
    bairro: yup.string().required("Campo Obrigatório!"),
    numero: yup.string().required("Campo Obrigatório!"),
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
      cidade: data.cidade,
      endereco: data.endereco,
      bairro: data.bairro,
      numero: data.numero
    };
    atualizaFornecedor(id,infos);
    handleclose();
    listar();
  };
  return (
    <Container>
      <header> Cadastro de fornecedores</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input
          label={"Nome"}
          name={"nome"}
          {...register("nome")}
          placeholder="Digite o nome do forncedor"
        />
        <p>{errors.nome?.message}</p>

        <input
          label={"Descrição"}
          name={"descricao"}
          {...register("descricao")}
          placeholder="Descrição"
        />
        <p>{errors.descricao?.message}</p>

        <input
          label={"Cidade"}
          name={"cidade"}
          {...register("cidade")}
          placeholder="Cidade"
        />
        <p>{errors.cidade?.message}</p>

        <input
          label={"Endereco"}
          name={"endereco"}
          {...register("endereco")}
          placeholder="Endereço"
        />
        <p>{errors.endereco?.message}</p>

        <input
          label={"Bairro"}
          name={"bairro"}
          {...register("bairro")}
          placeholder="Bairro"
        />
        <p>{errors.bairro?.message}</p>

        <input
          label={"Numero"}
          name={"numero"}
          {...register("numero")}
          placeholder="Numero"
        />
        <p>{errors.numero?.message}</p>

        
        <button type="submit">Atualizar fornecedor</button>
      </form>
    </Container>
  );
};
export default FormularioAttFornecedor;
