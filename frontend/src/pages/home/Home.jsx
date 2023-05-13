import { Box, IconButton, Paper, Typography } from "@mui/material";
import "./Home.css";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mydata")
      .then((res) => res.json())
      .then((data) => setMydata(data));
  }, []);

  return (
    <Box sx={{ height: "100px", width: "310px" }}>
      {mydata.map((item) => {
        
        return (
          <Paper
          key={item.id}
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "13px",
              position: "relative",
              mt: "20px",
              pt: "23px",
              transition: "all 0.5s ease",
            }}
          >
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="h6" sx={{ color: "green", pr: "20px" }}>
              ${item.cost}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3000/mydata/${item.id}`, {
                  method: "DELETE",
                });
                const newArray = mydata.filter((myobject) => myobject.id !== item.id);
                setMydata(newArray)
              }}
              sx={{ position: "absolute", right: "0", top: "0" }}
            >
              <Close />
            </IconButton>
          </Paper>
        );
      })}
      <Typography variant="body1" color="green" mt="20px" textAlign="center">
        You spent ${mydata.reduce((acc, item) => acc + item.cost, 0)} 
      </Typography>
    </Box>
  );
};

export default Home;
