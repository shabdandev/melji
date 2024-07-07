import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import lego from "../../components/image/headerlogo.jpg";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List sx={{ marginTop: "50px" }}>
        <ListItem
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "start",
            flexDirection: "column",
            gap: "20px",
            fontSize: "19px",
            color: "black",
          }}
        >
          <NavLink to="/">Главная</NavLink>
          <hr style={{ width: "200px" }} />
          <NavLink to="/catalog">Каталог</NavLink>
          <hr style={{ width: "200px" }} />
          <NavLink to="/uslugi">Наши услуги</NavLink>
          <hr style={{ width: "200px" }} />
          <NavLink to="/dostavka">Оплата и доставка</NavLink>
          <hr style={{ width: "200px" }} />
          <NavLink to="/contact">Контакты</NavLink>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-20px",
          fontSize: "35px",
          fontWeight: 200,
        }}
      >
        <img
          style={{ objectFit: "cover", background: "none" }}
          width={270}
          // height={100}
          src={lego}
          alt="img"
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{
            background: "none",
            color: "#000",
            boxShadow: "none",
            paddingTop: "20px",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                background: "gray",
                color: "#fff",
                width: "50px",
                height: "50px",
                marginLeft: "310px",
              }}
            >
              <MenuIcon sx={{ fontSize: "32px" }} />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: "50px",
              }}
            >
              <Button sx={{ color: "#000" }}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/catalog">Каталог</NavLink>
                <NavLink to="/uslugi">Наши услуги</NavLink>
                <NavLink to="/dostavka">Оплата и доставка</NavLink>
                <NavLink to="/contact">Контакты</NavLink>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
