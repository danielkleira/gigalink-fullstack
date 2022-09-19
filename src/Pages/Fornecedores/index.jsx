import { Container } from "./style";
import { useEffect, useState, useContext } from "react";
import * as React from "react";

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

import { AiFillDelete, AiOutlineMail } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FornecedoresContext } from "../../Providers/Fornecedores";
import FormularioAttFornecedor from "../../Components/Formularios/AttFornecedor";
import FormularioFornecedor from "../../Components/Formularios/CriarFornecedor";
import InfosTelefone from "../../Components/Formularios/InfosTelefone";
import InfosEmail from "../../Components/Formularios/InfosEmail";

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

const styleEdit = {
  position: "absolute",
  display: "flex",
  flexdirection: "column",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  boxShadow: 24,
  color: "var(--text-color)",
  p: 4,
};

const Fornecedores = () => {
  const { fornecedores, listaTodosFornecedores, deletaFornecedor } =
    useContext(FornecedoresContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [telefoneOpen, setTelefoneOpen] = useState(false);
  const handleTelefoneOpen = () => setTelefoneOpen(true);
  const handleTelefoneClose = () => setTelefoneOpen(false);

  const [emailOpen, setEmailOpen] = useState(false);
  const handleEmailOpen = () => setEmailOpen(true);
  const handleEmailClose = () => setEmailOpen(false);

  const [deletar, setDeletar] = useState(false);
  const deleteOpen = () => setDeletar(true);
  const deleteClose = () => setDeletar(false);

  const [att, setAtt] = useState(false);
  const attOpen = () => setAtt(true);
  const attClose = () => setAtt(false);

  useEffect(() => {
    listaTodosFornecedores();
  }, []);

  useEffect(() => {
    listaTodosFornecedores();
  }, [open]);

  useEffect(() => {
    listaTodosFornecedores();
  }, [att]);

  useEffect(() => {
    listaTodosFornecedores();
  }, [deletar]);

  useEffect(() => {
    listaTodosFornecedores();
  }, [telefoneOpen]);

  useEffect(() => {
    listaTodosFornecedores();
  }, [emailOpen]);

  const [idFornecedor, setIdFornecedor] = useState();

  const [idDelete, setIdDelete] = useState();
  const [idAtt, setIdAtt] = useState();
  const telFunction = (id) => {
    setIdFornecedor(id);
    handleTelefoneOpen();
  };

  const emailFunction = (id) => {
    setIdFornecedor(id);
    handleEmailOpen();
  };

  const attFuncion = (id) => {
    setIdAtt(id);
    attOpen();
  };

  const deleteFunctions = (id) => {
    setIdDelete(id);
    deleteOpen();
  };
  const deleteFornecedores = () => {
    deletaFornecedor(idDelete);
    deleteClose();
    listaTodosFornecedores();
  };

  return (
    <Container>
      <div className="header">
        Lista de fornecedores
        <Button className="botaoModal" onClick={handleOpen}>
          Cadastrar novo Fornecedor
        </Button>
      </div>
      {fornecedores.length > 0 ? (
        <TableContainer component={Paper} sx={{ width: "80vw" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell>Endereço</StyledTableCell>
                <StyledTableCell>Cidade</StyledTableCell>
                <StyledTableCell>Descrição</StyledTableCell>
                <StyledTableCell>Contatos</StyledTableCell>
                <StyledTableCell>Atualização e deleção</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {fornecedores.map((fornecedor) => (
                <StyledTableRow key={fornecedor.id}>
                  <StyledTableCell>{fornecedor.nome}</StyledTableCell>
                  <StyledTableCell>{fornecedor.endereco}</StyledTableCell>
                  <StyledTableCell>{fornecedor.cidade}</StyledTableCell>
                  <StyledTableCell>{fornecedor.descricao}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => telFunction(fornecedor.id)}
                    >
                      <BsFillTelephoneFill />
                    </Button>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => emailFunction(fornecedor.id)}
                    >
                      <AiOutlineMail />
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => attFuncion(fornecedor.id)}
                    >
                      <GrUpdate />
                    </Button>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => deleteFunctions(fornecedor.id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>Nehnum fornecedor cadastrado</div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormularioFornecedor
            listar={listaTodosFornecedores}
            handleclose={handleClose}
          />
        </Box>
      </Modal>
      <Modal
        open={deletar}
        onClose={deleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEdit}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            Deseja mesmo deletar?
            <Button
              sx={{ border: "1px solid black", margin: "3px" }}
              onClick={deleteFornecedores}
            >
              Sim
            </Button>
            <Button
              sx={{ border: "1px solid black", margin: "3px" }}
              onClick={deleteClose}
            >
              Não
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={att}
        onClose={attClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEdit}>
          <FormularioAttFornecedor
            id={idAtt}
            listar={listaTodosFornecedores}
            handleclose={handleClose}
          />
        </Box>
      </Modal>
      <Modal
        open={telefoneOpen}
        onClose={handleTelefoneClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEdit}>
          <InfosTelefone idFornecedor={idFornecedor} />
        </Box>
      </Modal>
      <Modal
        open={emailOpen}
        onClose={handleEmailClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEdit}>
          <InfosEmail idFornecedor={idFornecedor} />
        </Box>
      </Modal>
    </Container>
  );
};
export default Fornecedores;
