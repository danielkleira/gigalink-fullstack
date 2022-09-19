import { ProdutosContext } from "../../Providers/Produtos";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

import { FornecedoresContext } from "../../Providers/Fornecedores";
import FormularioProduto from "../../Components/Formularios/CriarProduto";
import FormularioAttProduto from "../../Components/Formularios/AttProduto";

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

const Produtos = () => {
  const { fornecedores, listaTodosFornecedores } =
    useContext(FornecedoresContext);

  /* useEffect(() => {listaTodosFornecedores()},[]) */

  const {
    produtos,
    setProdutos,
    adicionarProduto,
    listaTodosProdutos,
    atualizaProduto,
    deletaProduto,
  } = useContext(ProdutosContext);
  console.log(produtos);

  const [fornecedorListado, setFornecedorListado] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setAnchorEl(null);
    setFornecedorListado(event.target.id);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [att, setAtt] = useState(false);
  const attOpen = () => setAtt(true);
  const attClose = () => setAtt(false);

  const [deleteProd, setDeleteProd] = useState(false);
  const handleOpenDelete = () => setDeleteProd(true);
  const handleCloseDelete = () => setDeleteProd(false);

  const [idProd, setIdProd] = useState();

  useEffect(() => {
    listaTodosProdutos(fornecedorListado);
  }, [fornecedorListado]);

  useEffect(() => {
    listaTodosProdutos(fornecedorListado);
  }, [openMenu]);

  useEffect(() => {
    listaTodosProdutos(fornecedorListado);
  }, [open]);

  useEffect(() => {
    listaTodosProdutos(fornecedorListado);
  }, [att]);

  useEffect(() => {
    listaTodosProdutos(fornecedorListado);
  }, [deleteProd]);

  const attFunction = (idProd) => {
    attOpen();
    setIdProd(idProd);
    listaTodosProdutos(fornecedorListado);
    console.log(idProd);
  };

  const deleteFunction = (idProd) => {
    handleOpenDelete();
    setIdProd(idProd);
    listaTodosProdutos(fornecedorListado);
  };

  const delecao = (id) => {
    deletaProduto(id);
    handleCloseDelete();
    listaTodosProdutos(fornecedorListado);
  };

  return (
    <>
      <Container>
        <div className="header">
          Lista de produtos
          <Button className="botaoModal" onClick={handleOpen}>
            Cadastrar novo produto
          </Button>
        </div>
        <div className="fornecedoresSelect">
          <Button
            id="fade-button"
            aria-controls={openMenu ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              color: "var(--text-color)",
              backgroundColor: "var(--header-background)",
            }}
          >
            Fornecedores
          </Button>
          {fornecedores.length > 0 ? (
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              TransitionComponent={Fade}
            >
              {fornecedores.map((fornecedor) => (
                <MenuItem
                  id={fornecedor.id}
                  onClick={handleCloseMenu}
                  key={fornecedor.id}
                >
                  {fornecedor.nome}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleCloseMenu}>
                Sem fornecedores cadastrados
              </MenuItem>
            </Menu>
          )}
        </div>
        {produtos.length > 0 ? (
          <TableContainer component={Paper} sx={{ width: "80vw" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell>Descrição</StyledTableCell>
                  <StyledTableCell>Atualização e deleção</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {produtos.map((produto) => (
                  <StyledTableRow key={produto.id}>
                    <StyledTableCell>{produto.nome}</StyledTableCell>
                    <StyledTableCell>{produto.descricao}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        sx={{ color: "var(--button-background)" }}
                        onClick={() => attFunction(produto.id)}
                      >
                        <GrUpdate />
                      </Button>
                      <Button
                        sx={{ color: "var(--button-background)" }}
                        onClick={() => deleteFunction(produto.id)}
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
          <div>Nenhum produto cadastrado</div>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormularioProduto idFornecedor={fornecedorListado} />
          </Box>
        </Modal>
        <Modal
          open={att}
          onClose={attClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleEdit}>
            <FormularioAttProduto id={idProd} attClose={attClose} />
          </Box>
        </Modal>
        <Modal
          open={deleteProd}
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
                onClick={() => delecao(idProd)}
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
    </>
  );
};

export default Produtos;
