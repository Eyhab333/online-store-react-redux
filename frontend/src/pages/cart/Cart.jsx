import "./Cart.css";
import { Remove } from "@mui/icons-material";
import CardActions from "@mui/material/CardActions";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import {
  Badge,
  CardMedia,
  styled,
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 ",
  },
}));

const Cart = () => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.cartttt);
  const dispatch = useDispatch();

  let subTotal = 0
  return (
    <Box sx={{}}>
      {selectedProducts.map((item) => {
        subTotal += Number(item.price) * Number(item.quantity)
        return (
          <Card
            key={item.id}
            sx={{
              minWidth: 275,
              display: "flex",
              alignItems: "center",
              mt: "23px",
            }}
          >
            <CardActions>
              <Button
                onClick={() => {
                  dispatch(deleteProduct(item));
                }}
                size="small"
                sx={{ color: red[500] }}
              >
                Delete
              </Button>
            </CardActions>
            <Typography variant="body1">
              ${Number(item.price) * Number(item.quantity)}
            </Typography>
            <Stack direction={{ xs: "row", sm: "row" }}>
              <Button
                onClick={() => {
                  dispatch(increaseQuantity(item));
                }}
                size="small"
                color="primary"
              >
                <AddIcon />
              </Button>
              <IconButton size="small" color="primary">
                <StyledBadge
                  badgeContent={item.quantity}
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
            <CardMedia
              component="img"
              height="117px"
              image={item.imageLink[0]}
              alt="watch"
              sx={{ pr: "0px", width: "117px" }}
            />
          </Card>
        );
      })}

      <Box sx={{ mt: "33px" }}>
        <Card sx={{ minWidth: "242px", margin: "0 auto" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", padding: "12px" }}
          >
            Cart summary
          </Typography>
          <Divider />

          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "12px",
            }}
          >
            <Typography variant="body1">SubTotal</Typography>
            <Typography variant="body1">${subTotal}</Typography>
          </Stack>
          <Button variant="contained" fullWidth>
            Checkout
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default Cart;
