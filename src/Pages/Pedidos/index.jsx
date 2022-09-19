import { useEffect, useState, useContext } from "react";
import * as React from "react";
import { PedidosContext } from "../../Providers/Pedidos";
import { Container } from "./style";
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
import FormularioAttPedido from "../../Components/Formularios/AttPedido";

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

const Pedidos = () => {
  const {
    pedidos,
    setPedidos,
    adicionarPedido,
    listaTodosPedidos,
    atualizaPedido,
    deletaPedido,
  } = useContext(PedidosContext);

  useEffect(() => {
    listaTodosPedidos();
    console.log(pedidos)
  }, []);

  const [idPedido, setIdPedido] = useState();

  const [deletePedido, setDeletePedido] = useState(false);
  const handleOpenDelete = () => setDeletePedido(true);
  const handleCloseDelete = () => setDeletePedido(false);


  const deletePedidoFunction = (id) => {
    setIdPedido(id);
    handleOpenDelete();
  };

  const deletarPedido = (idPedido) => {
    deletaPedido(idPedido);
    handleCloseDelete();
  }


  useEffect(() => {
    listaTodosPedidos();
  }, [deletePedido]);

  return (
    <Container>
      <div className="header">Lista de pedidos</div>
      {pedidos.length > 0 ? (
        <TableContainer component={Paper} sx={{ width: "80vw" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Nota Fiscal</StyledTableCell>
                <StyledTableCell>Transportadora</StyledTableCell>
                <StyledTableCell>Valor do frete</StyledTableCell>
                <StyledTableCell>Desconto</StyledTableCell>
                <StyledTableCell>Valor Total</StyledTableCell>
                <StyledTableCell>Deletar</StyledTableCell>

              </StyledTableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <StyledTableRow key={pedido.id}>
                  <StyledTableCell>{pedido.nota_fiscal}</StyledTableCell>
                  <StyledTableCell>
                    {pedido.transportadora.nome}
                  </StyledTableCell>
                  <StyledTableCell>R$ {pedido.valor_frete}</StyledTableCell>
                  <StyledTableCell>R$ {pedido.desconto}</StyledTableCell>
                  <StyledTableCell>R$ {pedido.valor_total}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      sx={{ color: "var(--button-background)" }}
                      onClick={() => deletePedidoFunction(pedido.id)}
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
        <div>Nenhum pedido cadastrado</div>
      )}
      <Modal
        open={deletePedido}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            Deseja mesmo deletar?
            <Button
              sx={{ border: "1px solid black", margin: "3px" }}
              onClick={() => deletarPedido(idPedido)}
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

      
    </Container>
  );
};
export default Pedidos;
