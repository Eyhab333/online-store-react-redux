import { CircularProgress, Grid } from "@mui/material";
import "./Home.css";
import Card from "components/Card";
import { useGetproductsByNameQuery } from "services/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetproductsByNameQuery();

  return (
    <Grid
      sx={{ padding: "50px", paddingTop: "0" }}
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          <CircularProgress />
        </>
      ) : data ? (
        <>
          {data.map((item) => {
            return (
              <Grid item key={item.id}>
                <Card item={item} key={item.id} />
              </Grid>
            );
          })}
        </>
      ) : null}
    </Grid>
  );
};

export default Home;
