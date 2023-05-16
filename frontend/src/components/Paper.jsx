import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Badge, CardMedia, Stack, styled, Typography } from "@mui/material";
import { increaseQuantity, decreaseQuantity, deleteProduct } from "cart/cartSlice";
import { useDispatch } from "react-redux";
import { Remove } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 ",
  },
}));

export default function BasicCard({ item }) {
  const dispatch = useDispatch()
  return (
    <Card sx={{ minWidth: 275, display: "flex", alignItems: "center", mt: '23px' }}>
      <CardActions>
        <Button
        onClick={() => {
          dispatch(deleteProduct(item))
        }}
        size="small" sx={{ color: red[500] }}>
          Delete
        </Button>
      </CardActions>
      <Typography variant="body1">${item.price}</Typography>
      <Stack direction={{ xs: "row", sm: "row" }}>
        <Button
        onClick={() => {
          dispatch(increaseQuantity(item))
        }}
        size="small" color="primary">
          <AddIcon />
        </Button>
        <IconButton size="small" color="primary">
          <StyledBadge badgeContent={4} color="primary"></StyledBadge>
        </IconButton>
        <Button
        onClick={() => {
          dispatch(decreaseQuantity(item))
        }}
        size="small" color="primary">
          <Remove />
        </Button>
      </Stack>
      <CardMedia
        component="img"
        height="117px"
        image={item.imageLink}
        alt="watch"
        sx={{ pr: "0px", width: '117px' }}
      />
    </Card>
  );
}
