import React from 'react';
import { useStateValue } from "../StateProvider";
import { Button, Grid } from "@mui/material";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (

        <Grid item xs={6} >
            <div className="product">
                <img src={image} />
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <Button variant="contained" onClick={removeFromBasket}>Remove from Basket</Button>
                </div>
            </div>
        </Grid>
    )
}

export default CheckoutProduct
