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

import { TransportadorasContext } from "../../Providers/Transportadoras";
import FormularioTransportadora from "../../Components/Formularios/CriarTransportadora";
import FormularioAttTransportadora from "../../Components/AttTransportadora";
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
  color: "var(--text-color)",
  bgcolor: "var(--header-background)",
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

const Transportadoras = () => {
  const {
    transportadoras,
    adicionarTransportadora,
    listaTodasTransportadoras,
    atualizaTransportadora,
    deletaTransportadora,
  } = useContext(TransportadorasContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteTrans, setDeleteTrans] = useState(false);
  const handleOpenDelete = () => setDeleteTrans(true);
  const handleCloseDelete = () => setDeleteTrans(false);

  const [att, setAtt] = useState(false);
  const attOpen = () => setAtt(true);
  const attClose = () => setAtt(false);

  const [idTrans, setIdTrans] = useState();

  useEffect(() => {
    listaTodasTransportadoras();
  }, []);

  useEffect(() => {
    listaTodasTransportadoras();
  }, [open]);

  useEffect(() => {
    listaTodasTransportadoras();
  }, [att]);

  useEffect(() => {
    listaTodasTransportadoras();
  }, [deleteTrans]);

  const attFunction = (id) => {
    attOpen();
    setIdTrans(id);
  };

  const transFunction = (id) => {
    handleOpenDelete();
    setIdTrans(id);
  };

  return (
    <Container>
      <div className="header">
        Lista de transportadoras
        <Button className="botaoModal" onClick={handleOpen}>
          Cadastrar nova transportadora
        </Button>
      </div>
      {transportadoras.length > 0 ? (
        <TableContainer component={Paper} sx={{ width: "80vw" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell>Atualização e deleção</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {transportadoras.map((transportadora) => (
                <StyledTableRow key={transportadora.id}>
                  <StyledTableCell>{transportadora.nome}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => attFunction(transportadora.id)}
                    >
                      <GrUpdate />
                    </Button>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => transFunction(transportadora.id)}
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
        <div>Nenhuma transportadora cadastrada</div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormularioTransportadora
            handleclose={handleClose}
            listar={listaTodasTransportadoras}
          />
        </Box>
      </Modal>

      <Modal
        open={deleteTrans}
        onClose={handleCloseDelete}
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
              onClick={() => deletaTransportadora(idTrans)}
            >
              Sim
            </Button>
            <Button
              sx={{ border: "1px solid black", margin: "3px" }}
              onClick={handleCloseDelete}
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
          <FormularioAttTransportadora id={idTrans} handleclose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};
export default Transportadoras;
