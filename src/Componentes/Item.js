import React from "react";
import "../Styles/itemCount.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import "../Styles/item.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../Componentes/Contexts/CartContext";
import Button from "@material-ui/core/Button";

const Item = ({
  id,
  title,
  description,
  img,
  price,
  category,
  descriptionLarga,
}) => {
  const cart = useCart();

  return (
    <div className="itemContainer">
      <div className="item">
        <img src={img} alt={title} />
        <span className="title">{title}</span>
        <span className="description">{description}</span>
        <span className="price">{price}</span>
        <NavLink
          to={`/producto/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button className="verProd" variant="outlined">
            ver producto
          </Button>
        </NavLink>
        <IconButton
          color="purple"
          style={{ marginLeft: 200, marginTop: 30 }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{ marginTop: 30 }}>
          <ShareIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Item;

//pregunta: COMO HAGO EL ROUTING A VER PRODUCTO!!!

/*
    <div className="cont-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 22, color: "purple" }}
            >
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          className={classes.actions}
          style={{ marginLeft: 40, marginBottom: 30 }}
        >
          <NavLink
            to={`/item/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined">Ver producto</Button>
          </NavLink>

          <IconButton
            color="purple"
            style={{ marginLeft: 50, marginTop: 30 }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" style={{ marginTop: 30 }}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div> */
