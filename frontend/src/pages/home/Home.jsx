import { Grid } from "@mui/material";
import "./Home.css";
import Card from "components/Card";
import { useGetproductsByNameQuery } from "services/productsApi";

const productsApi = [{}];

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
        <>Loading...</>
      ) : data ? (
        <>
          {productsApi.map((item, data) => {
            return (
              <Grid item>
                <Card 
                // تقريبا محتاج انقل الكارد كله هنا
                data={data} />
              </Grid>
            );
          })}
        </>
      ) : null}
    </Grid>
  );
};

export default Home;
