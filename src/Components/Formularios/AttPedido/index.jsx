import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PedidosContext } from "../../../Providers/Pedidos";
import { useContext } from "react";

const FormularioAttPedido = (item) => {
  const { atualizaPedido } = useContext(PedidosContext);

  const schema = yup.object().shape({
    nota: yup.string().required("Campo Obrigatório!"),
    frete: yup.number().required("Campo Obrigatório!"),
    desconto: yup.number().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    console.log(item);
    const infos = {
      nota: data.nota,
      valor_frete: data.frete,
      desconto: data.desconto,
    };
    atualizaPedido(item.idPedido, infos);
  };

  return (
    <Container>
      <header> Atualização de item</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input
          label={"Nota"}
          name={"nota"}
          {...register("nota")}
          placeholder="Nota fiscal"
        />
        <p>{errors.nota?.message}</p>

        <input
          label={"Frete"}
          name={"frete"}
          {...register("frete")}
          placeholder="Valor do frete"
        />
        <p>{errors.frete?.message}</p>

        <input
          label={"Desconto"}
          name={"desconto"}
          {...register("desconto")}
          placeholder="Desconto"
        />
        <p>{errors.desconto?.message}</p>

        <button type="submit">Atualizar item</button>
      </form>
    </Container>
  );
};
export default FormularioAttPedido;
