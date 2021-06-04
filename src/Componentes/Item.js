import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core"; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemCount from "../Componentes/ItemCount";
import {useState} from 'react'; 
import '../Styles/itemCount.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import '../Styles/item.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    display: "inline-block",
    marginLeft: 160,
    marginTop: 50,
    marginBottom: 80

  },
  media: {
    height: 450,
  
  },
  actions: {
    display: "block",
    marginLeft: 20
  }
});


function Item ({id, title, description, img, price}) {

  const[cantidad, setCantidad] = useState(1);

  const handleCantidad = (cantidad) => {
      setCantidad(cantidad);
  }
 const classes = useStyles();
 
  return (
    <div className="card"> 
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
          <Typography>
          {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions} style={{ marginLeft: 40, marginBottom: 30}} >
        <ItemCount stock={5} initial={1} onAdd={handleCantidad} />
        <Button size="small" color="primary"  display="block" style={{ background: "purple", color:"white", width: 200, marginTop: 30}}>
            Comprar  ({cantidad})
        </Button>
        <IconButton color="purple" style={{ marginLeft: 50, marginTop: 30}}  aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{marginTop: 30}}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};
export default Item;
