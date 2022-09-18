import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FornecedoresContext } from "../../../Providers/Fornecedores";
import { useContext } from "react";

const FormularioFornecedor = ({ handleclose, listar }) => {
  const { adicionarFornecedor } = useContext(FornecedoresContext);

  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório!"),
    descricao: yup.string().required("Campo obrigatório!"),
    cidade: yup.string().required("Campo Obrigatório!"),
    endereco: yup.string().required("Campo Obrigatório!"),
    bairro: yup.string().required("Campo Obrigatório!"),
    numero: yup.string().required("Campo Obrigatório!"),
    ddd: yup
      .number()
      .typeError("ddd deve ser um número")
      .required("Campo Obrigatório!"),
    telNum: yup
      .number()
      .typeError("Telefone deve ser um número")
      .min(9, "Telefone deve ter ao menos 9 números")
      .required("Campo Obrigatório!"),
    referencia: yup.string().required("Campo Obrigatório!"),
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
      numero: data.numero,
      telefone: [
        {
          ddd: data.ddd,
          numero: data.telNum,
          referencia: data.referencia,
        },
      ],
    };
    adicionarFornecedor(infos);
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

        <section className="telefone">
          Telefone
          <input
            label={"ddd"}
            name={"ddd"}
            {...register("ddd")}
            placeholder="DDD"
          />
          <p>{errors.ddd?.message}</p>
          <input
            label={"numero"}
            name={"telNum"}
            {...register("telNum")}
            placeholder="Numero de telefone"
          />
          <p>{errors.telNum?.message}</p>
          <input
            label={"referencia"}
            name={"referencia"}
            {...register("referencia")}
            placeholder="Referencia"
          />
          <p>{errors.referencia?.message}</p>
        </section>
        <button type="submit">Cadastrar fornecedor</button>
      </form>
    </Container>
  );
};
export default FormularioFornecedor;
