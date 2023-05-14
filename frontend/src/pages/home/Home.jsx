import { Grid } from "@mui/material";
import "./Home.css";
import Card from "components/Card";

const dataFromApi = [{}, {}, {}, {}, {}];

const Home = () => {
  return (
    <Grid
      
      sx={{ padding: "50px", paddingTop: '0' }}
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {dataFromApi.map((item) => {
        return (
          <Grid item>
            <Card />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
