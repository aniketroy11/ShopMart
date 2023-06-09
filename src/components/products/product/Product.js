import React from 'react'
import { Card, CardMedia, CardActions, Typography, IconButton, CardContent } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


const Product = ({ product,onAddToCart }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={Product.title} />
            <CardContent className={classes.cardContentMain}>
                <div className={classes.cardContent}>
                    <Typography variant="h6"  >{product.name}</Typography>
                    <Typography variant="h6" >{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions  className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
