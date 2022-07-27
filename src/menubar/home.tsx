import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./styles";
import "./index.css";
import logo from "../assets/yaqeen-logo.png";
import ConfirmLogoutDlg from "./ConfirmLogoutDlg";

type AppbarProps = {
  handleLogout: () => void;
};

const HomeAppbar = (props: AppbarProps) => {
  const { handleLogout } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [openConfDlg, setOpenConfDlg] = React.useState<boolean>(false);

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu((previousVal) => !previousVal);
  };

  const toggleMenuItem = (pathName: string) => {
    setOpenMenu((previousVal) => !previousVal);
  };

  const onLogout = () => {
    setOpenMenu((previousVal) => !previousVal);
    setOpenConfDlg(true);
  };

  return (
    <>
      <ConfirmLogoutDlg
        open={openConfDlg}
        handleConfirm={() => {
          handleLogout();
        }}
        handleClose={() => setOpenConfDlg(false)}
      />
      <AppBar position="static" className="menu">
        <Toolbar style={styles.toolbarContainer}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={styles.logoContainer}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <img src={logo} alt="flag" style={styles.logo} />
              </Link>
            </div>
          </div>
          <div style={styles.settings}>
            <IconButton
              aria-label="verification-menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
              color="inherit"
            >
              <MoreVertIcon style={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu"
              MenuListProps={{
                "aria-labelledby": "menu",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={toggleMenu}
            >
              <Divider />
              <MenuItem onClick={() => onLogout()}>Sign out...</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HomeAppbar;
