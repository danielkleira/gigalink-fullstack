import { Container } from "./style";
import { PedidosContext } from "../../../Providers/Pedidos";
import { TransportadorasContext } from "../../../Providers/Transportadoras";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

const FormularioPedido = ({carrinho}) => {
  const { adicionarPedido } = useContext(PedidosContext);
  const { transportadoras, listaTodasTransportadoras } = useContext(
    TransportadorasContext
  );

  useEffect(() => {
    listaTodasTransportadoras();
  }, []);

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

  const [transportadora, setTransportadora] = useState();
  const handleChangeTransportadora = (event) => {
    setTransportadora(event.target.value);
  };

  const submitFunction = (data) => {
    let arr=[]
    for (let i = 0; i < carrinho.length; i++) {
        arr.push({'id':carrinho[i].id})
    }
    console.log(arr)

    const infos = {
      nota_fiscal: data.nota,
      valor_frete: data.frete,
      desconto: data.desconto,
      itens:carrinho
    };

    adicionarPedido(transportadora, infos)
  };
  return (
    <Container>
      <header> Criação de pedido</header>
      <form onSubmit={handleSubmit(submitFunction)}>
        {transportadoras.length > 0 ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={transportadora}
            label="Produto"
            onChange={handleChangeTransportadora}
          >
            {transportadoras.map((produto) => (
              <MenuItem value={produto.id}>{produto.nome}</MenuItem>
            ))}
          </Select>
        ) : (
          <div>cadastre uma transportadora</div>
        )}
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
        <button type="submit">Criar pedido</button>
      </form>
    </Container>
  );
};
export default FormularioPedido;
