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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "20px",
            fontSize: "19px",
            color: "#000",
          }}
        >
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/uslugi">Наши услуги</NavLink>
          <NavLink to="/dostavka">Оплата и доставка</NavLink>
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <img
          style={{ objectFit: "cover" }}
          width={170}
          src="https://freelance.ru/img/portfolio/pics/00/40/1E/4202078.jpg"
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
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <MenuIcon sx={{ fontSize: "50px", margin: "30px 0 0 5px" }} />
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
