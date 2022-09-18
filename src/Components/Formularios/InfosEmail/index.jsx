import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FornecedoresContext } from "../../../Providers/Fornecedores";
import { useContext, useEffect, useState } from "react";
import { EmailsContext } from "../../../Providers/Emails";

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

const InfosEmail = ({ idFornecedor }) => {
  const { emails, adicionarEmail, listaEmails, deletaEmail } =
    useContext(EmailsContext);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    referencia: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (data) => {
    const infos = {
      email: data.email,
      referencia: data.referencia,
    };
    adicionarEmail(idFornecedor, infos);
    setAttHelp(!attHelp);
  };

  const [attHelp, setAttHelp] = useState(false);
  const telefoneFunctions = (email_id) => {
    deletaEmail(idFornecedor, email_id);
    listaEmails(idFornecedor);
    setAttHelp(!attHelp);
  };
  useEffect(() => {
    listaEmails(idFornecedor);
  }, []);

  useEffect(() => {
    listaEmails(idFornecedor);
  }, [attHelp]);

  return (
    <Container>
      <header> Telefones</header>
      <TableContainer component={Paper} sx={{ width: "80vw" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Referencia</StyledTableCell>
              <StyledTableCell>Deletar</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {emails.map((email) => (
              <StyledTableRow key={email.id}>
                <StyledTableCell>{email.email}</StyledTableCell>
                <StyledTableCell>{email.referencia}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{ color: "var(--button-background)" }}
                    onClick={() => telefoneFunctions(email.id)}
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
          label={"email"}
          name={"email"}
          {...register("email")}
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>
        <input
          label={"referencia"}
          name={"referencia"}
          {...register("referencia")}
          placeholder="Referencia"
        />
        <p>{errors.referencia?.message}</p>

        <button type="submit">Adicionar Email</button>
      </form>
    </Container>
  );
};
export default InfosEmail;
