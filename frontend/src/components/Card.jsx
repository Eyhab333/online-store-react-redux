import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { addToCart } from "cart/cartSlice";

export default function MultiActionAreaCard({ item }) {
  const dispatch = useDispatch()
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 2, md: 4 }}
      key={item.id}
    >
      <Card key={item.id} sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia component="img" height="240" image={item.imageLink} alt="watch" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.description}
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
            onClick={() => {
              dispatch(addToCart(item))
            }}
          >
            add to cart
          </Button>
          <Typography sx={{ pr: "20px"  }}>${item.price}</Typography>

        </Stack>
      </Card>
    </Stack>
  );
}
