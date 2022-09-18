import { Container } from "./style";
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import caminhao from "../../Assets/pngwing.com.png";
import { MdLocalShipping, MdOutlineBusiness } from "react-icons/md";
import { BsBox, BsFillBagFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { BodyContext } from "../../Providers/Body";
import { useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { tab, chooseTab } = useContext(BodyContext);
  const history = useHistory();
  function sair() {
    history.push("/");
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    chooseTab(event.target.id);
    if (tab === "sair") {
      sair();
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Container>
        <div>
          <img src={caminhao} alt='caminhao'></img>
        </div>
        <Stack direction="row" spacing={2}>
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              Menu
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              sx={{zIndex:9999}}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper className="paper" >
                    <ClickAwayListener onClickAway={handleClose} >
                      <MenuList 
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        className="menu"
                      >
                        <MenuItem
                          className="menuItem"
                          id="fornecedores"
                          onClick={handleClose}
                        >
                          <MdOutlineBusiness />
                          Fornecedores
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="itens"
                          onClick={handleClose}
                        >
                          <BsBox />
                          Itens
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="pedidos"
                          onClick={handleClose}
                        >
                          <FaShoppingCart /> Pedidos
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="produtos"
                          onClick={handleClose}
                        >
                          <BsFillBagFill /> Produtos
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="transportadoras"
                          onClick={handleClose}
                        >
                          <MdLocalShipping /> Transportadoras
                        </MenuItem>
                        <MenuItem
                          className="menuItem"
                          id="sair"
                          onClick={handleClose}
                        >
                          <AiOutlineLogout /> Sair
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      </Container>
    </>
  );
};
export default Header;
