import { Box } from "@mui/material";
import "./Cart.css";
import Paper from "components/Paper"
import CartSummary from "components/CartSummary";

const Cart = () => {
  return (
    <Box>
      <Paper/>
      <CartSummary/>
    </Box>
  );
};

export default Cart;
