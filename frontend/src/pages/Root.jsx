import { Box } from "@mui/material";
import ResponsiveDrawer from "components/Drawer";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";

const drawerWidth = 240;


const Root = () => {
  const [mymode, setmymode] = useState(localStorage.getItem("currentMode") || "dark");
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: mymode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
      <ResponsiveDrawer 
// @ts-ignore
      setmymode={setmymode}/>

      <Box
        component="main"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          display: " flex",
          justifyContent: "center",
          mt: "66px",
        }}
      >
        <Outlet />
      </Box>
    </div>
    </ThemeProvider>
    
  );
};

export default Root;
