import { useEffect, useState, useContext } from "react";
import { ItensContext } from "../../Providers/Itens";
import { Container } from "./style";

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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";

import FormularioItem from "../../Components/Formularios/CriarItem";
import FormularioAttItem from "../../Components/Formularios/AttItem";
import FormularioPedido from "../../Components/Formularios/CriarPedido";

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


const Itens = () => {
  const { itens, listaTodosItens, deletaItem } = useContext(ItensContext);

  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    listaTodosItens();
  }, []);

  const addCarrinho = (item) => {
    if (carrinho.length > 0) {
      const existe = carrinho.filter((cart) => cart.id === item.id);
      if (existe.length === 0) {
        setCarrinho([...carrinho, item]);
        console.log(carrinho);
      }
    } else {
      setCarrinho([...carrinho, item]);
    }
  };

  const removeCarrinho = (item) => {
    const existe = carrinho.filter((cart) => cart.id !== item.id);
    setCarrinho(existe);
  };

  const [addOpen, setAddOpen] = useState(false);
  const addHandleOpen = () => setAddOpen(true);
  const addHandleClose = () => setAddOpen(false);

  useEffect(() => {
    listaTodosItens();
  }, [addOpen]);

  const [attOpen, setAttOpen] = useState(false);
  const attHandleOpen = () => setAttOpen(true);
  const attHandleClose = () => setAttOpen(false);

  useEffect(() => {
    listaTodosItens();
  }, [attOpen]);

  const [itemId, setItemId] = useState();
  const attFunction = (idItem) => {
    setItemId(idItem);
    attHandleOpen();
  };

  const [delOpen, setDelOpen] = useState(false);
  const delHandleOpen = () => setDelOpen(true);
  const delHandleClose = () => setDelOpen(false);

  useEffect(() => {
    listaTodosItens();
  }, [delOpen]);

  const deleteFunction = (idItem) => {
    setItemId(idItem);
    delHandleOpen();
  };

  const [saveCartOpen, setSaveCartOpen] = useState(false);
  const handleCartOpen = () => setSaveCartOpen(true);
  const handleCartClose = () => setSaveCartOpen(false);

  return (
    <>
      <Container>
        <div className="header">
          Lista de Itens
          <Button className="botaoModal" onClick={addHandleOpen}>
            Cadastrar novo Item
          </Button>
        </div>
        <div className="body">
          <div className="itens">
            {itens.length > 0 ? (
              <TableContainer component={Paper} sx={{ width: "80vw" }}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Item</StyledTableCell>
                      <StyledTableCell>Quantidade</StyledTableCell>
                      <StyledTableCell>Valor</StyledTableCell>
                      <StyledTableCell>Atualização e deleção</StyledTableCell>
                      <StyledTableCell>Adicionar ao pedido</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {itens.map((item) => (
                      <StyledTableRow key={item.id}>
                        <StyledTableCell>{item.produtos.nome}</StyledTableCell>
                        <StyledTableCell>{item.quantidade}</StyledTableCell>
                        <StyledTableCell>{item.valor}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            sx={{ color: "var(--button-background)" }}
                            onClick={() => attFunction(item.id)}
                          >
                            <GrUpdate />
                          </Button>

                          <Button
                            sx={{ color: "var(--button-background)" }}
                            onClick={() => deleteFunction(item.id)}
                          >
                            <AiFillDelete />
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Button
                            sx={{ color: "#89C541" }}
                            onClick={() => addCarrinho(item)}
                          >
                            <IoIosAddCircle />
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <div>Sem itens cadastrados</div>
            )}
          </div>

          <div className="pedidoSave">
            <div>Carrinho</div>
            {carrinho.length > 0 ? (
              <TableContainer component={Paper} sx={{ width: "80vw" }}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Item</StyledTableCell>
                      <StyledTableCell>Quantidade</StyledTableCell>
                      <StyledTableCell>Valor</StyledTableCell>
                      <StyledTableCell>Remover</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {carrinho.map((item, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell>{item.produtos.nome}</StyledTableCell>
                        <StyledTableCell>{item.quantidade}</StyledTableCell>
                        <StyledTableCell>{item.valor}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            sx={{ color: "var(--button-background)" }}
                            onClick={() => removeCarrinho(item)}
                          >
                            <AiFillDelete />
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="total">
                  <span>Total:</span>
                  <span>
                    {carrinho
                      .reduce(
                        (acc, item) => parseFloat(acc) + parseFloat(item.valor),
                        0
                      )
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </span>

                  <button onClick={handleCartOpen}>Salvar pedido</button>
                </div>
              </TableContainer>
            ) : (
              <div>Adicione itens ao carrinho</div>
            )}
          </div>
        </div>
        <Modal
          open={saveCartOpen}
          onClose={handleCartClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormularioPedido carrinho={carrinho} />
          </Box>
        </Modal>

        <Modal
          open={addOpen}
          onClose={addHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormularioItem handleClose={addHandleClose} />
          </Box>
        </Modal>

        <Modal
          open={attOpen}
          onClose={attHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormularioAttItem item={itemId} />
          </Box>
        </Modal>

        <Modal
        open={delOpen}
        onClose={delHandleClose}
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
              onClick={()=>deletaItem(itemId)}
            >
              Sim
            </Button>
            <Button
              sx={{ border: "1px solid black", margin: "3px" }}
              onClick={delHandleClose}
            >
              Não
            </Button>
          </Typography>
        </Box>
      </Modal>
      </Container>
    </>
  );
};
export default Itens;
