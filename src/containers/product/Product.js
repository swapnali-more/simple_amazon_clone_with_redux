import React, { useEffect } from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import { Button, Grid } from "@mui/material";

function Product(props) {
    const [state, dispatch] = useStateValue();
    const products = props.products;

    const addToBasket = (id, image, price, rating) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });

        localStorage.setItem('basket', JSON.stringify(state))
    };

    return (
        <Grid container xs={12} direction="row"
        justifyContent="center"
        alignItems="center">
            {products.map((e) => {
                return (

                    <Grid item xs={3} >
                        <div className="product">
                            <img src={e.image} />
                            <div className="product__info">
                                <p>{e.title}</p>
                                <p className="product__price">
                                    <small>$</small>
                                    <strong>{e.price}</strong>
                                </p>
                                <div className="product__rating">
                                    {Array(e.rating)
                                        .fill()
                                        .map((_, i) => (
                                            <p>⭐</p>
                                        ))}
                                </div>
                            </div>
                            <Button variant="contained" onClick={() => addToBasket(e.id, e.image, e.price, e.rating)}>Add to Basket</Button>
                        </div>
                    </Grid>

                )
            })}
        </Grid>

    )
}

export default Product
