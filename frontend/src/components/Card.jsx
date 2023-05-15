import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

import Stack from "@mui/material/Stack";
import { useGetproductsByNameQuery } from "services/productsApi";

export default function MultiActionAreaCard() {
  const { data } = useGetproductsByNameQuery();
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 2, md: 4 }}
    >
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={data.imageLink} alt="watch" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aperiam quas dolorem quaerat deserunt alias
            </Typography>
          </CardContent>
        </CardActionArea>

        <Stack
          direction={{ xs: "row", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", lineHeight: "1" }}
          >
            add to cart
          </Button>
          <Typography sx={{ pr: "20px" }}>{data.price}</Typography>

        </Stack>
      </Card>
    </Stack>
  );
}
