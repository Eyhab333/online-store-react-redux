import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  IconButton,
  styled,
  Badge,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "cart/cartSlice";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 ",
  },
}));



export default function MultiActionAreaCard({ item, index }) {
  const dispatch = useDispatch();

  const { selectedProducts, selectedProductsID } = useSelector(
    // @ts-ignore
    (state) => state.cartttt
  );

  const productQuantity = (/** @type {{ id: any; }} */ itemAPI) => {
    let myProduct = selectedProducts.find((/** @type {{ id: any; }} */ itemUser) => {
      return itemUser.id === itemAPI.id;
    });
      return myProduct.quantity
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 2, md: 4 }}
      key={item.id}
    >
      <Card key={item.id} sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={item.imageLink}
            alt="watch"
          />
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
          {selectedProductsID.includes(item.id) ? (
            <Stack direction={{ xs: "row", sm: "row" }}>
              <Button
                onClick={() => {
                  dispatch(increaseQuantity(item));
                }}
                size="small"
                color="primary"
              >
                <Add />
              </Button>
              <IconButton size="small" color="primary">
                <StyledBadge
                  badgeContent={productQuantity(item)}
                  color="primary"
                ></StyledBadge>
              </IconButton>
              <Button
                onClick={() => {
                  dispatch(decreaseQuantity(item));
                }}
                size="small"
                color="primary"
              >
                <Remove />
              </Button>
            </Stack>
          ) : (
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", lineHeight: "1" }}
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              add to cart
            </Button>
          )}

          <Typography sx={{ pr: "20px" }}>${item.price}</Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
