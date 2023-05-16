import { Box } from "@mui/material";
import "./Cart.css";
import Paper from "components/Paper";
import CartSummary from "components/CartSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.cartttt);
  return (
    <Box>
      {selectedProducts.map((item) => {
        return <Paper item={item} key={item.id}/>;
      })}

      <CartSummary />
    </Box>
  );
};

export default Cart;
