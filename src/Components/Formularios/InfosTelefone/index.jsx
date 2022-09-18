import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FornecedoresContext } from "../../../Providers/Fornecedores";
import { useContext, useEffect, useState } from "react";
import { TelefoneContext } from "../../../Providers/Telefones";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { AiFillDelete } from "react-icons/ai";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  border: "none",
  boxShadow: 5,
  p: 4,
};

const InfosTelefone = ({ idFornecedor}) => {
  const { telefones, listaTelefones, adicionarTelefone, deletaTelefone } =
    useContext(TelefoneContext);
    

  const schema = yup.object().shape({
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
      ddd: data.ddd,
      numero: data.telNum,
      referencia: data.referencia,
    };
    adicionarTelefone(idFornecedor, infos);
    listaTelefones(idFornecedor);
  };

  const [telDelet,setTelDelete] = useState(false)
  const telefoneFunctions = (telefoneId) => {
    deletaTelefone(telefoneId);
    listaTelefones(idFornecedor);
    setTelDelete(!telDelet);
  };
  console.log(telDelet)
  useEffect(() => {
    listaTelefones(idFornecedor);
  }, []);

  useEffect(() => {
    listaTelefones(idFornecedor);
  }, [telDelet]);

  return (
    <Container>
      <header> Telefones</header>
      <TableContainer component={Paper} sx={{ width: "80vw" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>DDD</StyledTableCell>
              <StyledTableCell>Número</StyledTableCell>
              <StyledTableCell>Referencia</StyledTableCell>
              <StyledTableCell>Deletar</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {telefones.map((telefone) => (
              <StyledTableRow key={telefone.id}>
                <StyledTableCell>{telefone.ddd}</StyledTableCell>
                <StyledTableCell>{telefone.numero}</StyledTableCell>
                <StyledTableCell>{telefone.referencia}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "var(--button-background)" }}
                    onClick={() => telefoneFunctions(telefone.id)}
                  >
                    <AiFillDelete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <form onSubmit={handleSubmit(submitFunction)}>
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

        <button type="submit">Adicionar telefone</button>
      </form>
    </Container>
  );
};
export default InfosTelefone;
