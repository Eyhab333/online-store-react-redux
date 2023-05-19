import {
  Badge,
  Button,
  CircularProgress,
  IconButton,
  styled,
} from "@mui/material";
import "./ProductDetails.css";
import { useGetproductByNameQuery } from "services/productsApi";
import { useParams } from "react-router-dom";
import DetailsThumb from "./DetailsThumb";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../cart/cartSlice";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useRef, useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { selectedProducts, selectedProductsID } = useSelector(
    // @ts-ignore
    (state) => state.cartttt
  );

  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    // this.setState({index: index})
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const productQuantity = (/** @type {{ id: any; }} */ itemAPI) => {
    let myProduct = selectedProducts.find(
      (/** @type {{ id: any; }} */ itemUser) => {
        return itemUser.id === itemAPI.id;
      }
    );
    return myProduct.quantity;
  };

  let { id } = useParams();
  const { data, error, isLoading } = useGetproductByNameQuery(id);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          <CircularProgress />
        </>
      ) : data ? (
        <>
          <div className="app details-page">
            <div className="details">
              <div className="big-img">
                <img src={data.imageLink[index]} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{data.productName}</h2>
                  <span>${data.price}</span>
                </div>
                {/* <Colors colors={data.colors} /> */}

                <p>{data.description}</p>

                <DetailsThumb
                  images={data.imageLink}
                  tab={handleTab}
                  myRef={myRef}
                />
                {/* <button className="cart">Add to cart</button> */}
                {selectedProductsID.includes(data.id) ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "33px",
                    }}
                  >
                    <IconButton
                      color="primary"
                      sx={{ mr: "10px" }}
                      onClick={() => {
                        dispatch(decreaseQuantity(data));
                      }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>

                    <StyledBadge
                      badgeContent={productQuantity(data)}
                      color="primary"
                    />

                    <IconButton
                      color="primary"
                      sx={{ ml: "10px" }}
                      onClick={() => {
                        dispatch(increaseQuantity(data));
                      }}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </div>
                ) : (
                  <Button
                    sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(addToCart(data));
                    }}
                  >
                    <ShoppingCart sx={{ fontSize: "18px", mr: 1 }} /> Add to
                    cart
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProductDetails;
