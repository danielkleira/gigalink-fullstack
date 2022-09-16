import { Container } from "./style";
import { FornecedoresContext } from "../../Providers/Fornecedores";
import { useContext } from "react";

const Fornecedores = () => {
  const {
    fornecedores,
    adicionarFornecedor,
    listaTodosFornecedores,
    atualizaFornecedor,
    deletaFornecedor,
    setFornecedores,
  } = useContext(FornecedoresContext);


  const datas = {
    nome: "Fornecedor 4",
    descricao: "Fornecedor de papel",
    cidade: "Rio de Janeiro",
    endereco: "Rua da cidade",
    bairro: "São Clemente",
    numero: "14",
    telefone: [
      {
        ddd: 33,
        numero: 40028922,
        referencia: "telefone movel",
      },
    ],
  };
  const eventoAdicionar =()=>{
    adicionarFornecedor(datas)
  }

  return (
    <>
      {/* <button onClick={listaTodosFornecedores}></button>
      <ul>
        {fornecedores.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
      <button onClick={eventoAdicionar}></button> */}
    </>
  );
};
export default Fornecedores;
