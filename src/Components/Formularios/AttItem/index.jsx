import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ItensContext } from "../../../Providers/Itens";
import { useContext, useEffect } from "react";
import { ProdutosContext } from "../../../Providers/Produtos";
import { FornecedoresContext } from "../../../Providers/Fornecedores";

const FormularioAttItem = (item) => {
  const { atualizaItem } = useContext(ItensContext);
  const { listaTodosFornecedores, fornecedores } =
    useContext(FornecedoresContext);
  const { listaTodosProdutos, produtos } = useContext(ProdutosContext);

  useEffect(() => {
    listaTodosFornecedores();
  }, []);

  const schema = yup.object().shape({
    quantidade: yup.number().required("Campo Obrigatório!"),
    valor: yup.number().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    const infos = {
      quantidade: data.quantidade,
      valor: data.valor,
    };
    atualizaItem(item.item, infos);
  };

  return (
    <Container>
      <header> Atualização de item</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input
          label={"Quantidade"}
          name={"quantidade"}
          {...register("quantidade")}
          placeholder="Digite uma quantidade"
        />
        <p>{errors.quantidade?.message}</p>

        <input
          label={"Valor"}
          name={"valor"}
          {...register("valor")}
          placeholder="Digite um valor"
        />
        <p>{errors.valor?.message}</p>

        <button type="submit">Atualizar item</button>
      </form>
    </Container>
  );
};
export default FormularioAttItem;
