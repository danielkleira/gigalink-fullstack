import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ItensContext } from "../../../Providers/Itens";
import { useContext, useEffect } from "react";
import { ProdutosContext } from "../../../Providers/Produtos";
import { FornecedoresContext } from "../../../Providers/Fornecedores";

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const FormularioItem = (handleClose) => {
  const { adicionarItem } = useContext(ItensContext);
  const { listaTodosFornecedores, fornecedores } = useContext(FornecedoresContext);
  const { listaTodosProdutos, produtos } = useContext(ProdutosContext);

  useEffect(() => {
    listaTodosFornecedores();
  }, []);

  const schema = yup.object().shape({
    quantidade: yup.string().required("Campo Obrigatório!"),
    valor: yup.number().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const [fornecedor, setFornecedor] = React.useState()
  const [ produto, setProduto] = React.useState()

  useEffect(()=>{
    listaTodosProdutos(fornecedor)
  },[fornecedor])

  const handleChangeFornecedor = (event) => {
    setFornecedor(event.target.value);
  };

  

  useEffect(()=>{
    listaTodosProdutos(fornecedor)
  },[produto])

  const handleChangeProduto = (event) => {
    setProduto(event.target.value);
  };



  const submitFunction = ( data) => {
    const infos = {
      quantidade: data.quantidade,
      valor: data.valor,
    };
    adicionarItem(produto, infos);
    handleClose()
  };



  return (
    <Container>
      <header> Cadastro de itens</header>
      <form onSubmit={handleSubmit(submitFunction)}>
     
        
        {fornecedores.length>0 ?(
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fornecedor}
          label="Fornecedor"
          onChange={handleChangeFornecedor}
        >
          {fornecedores.map((fornecedor)=>(
            
          <MenuItem value={fornecedor.id}>{fornecedor.nome}</MenuItem>
          
          ))}
        </Select>
        ):(<div>cadastre um fornecedor</div>)}
     

      {produtos.length > 0 ?(
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={produto}
          label="Produto"
          onChange={handleChangeProduto}
        >
          {produtos.map((produto)=>(
            
          <MenuItem value={produto.id}>{produto.nome}</MenuItem>
          
          ))}
        </Select>
        ):(<div>cadastre um produto</div>)}
      
      
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

        <button type="submit">Cadastrar item</button>
      </form>
    </Container>
  );
};
export default FormularioItem;
