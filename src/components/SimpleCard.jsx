import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, marginTop:3 }}>
      <CardActionArea>
{/* <<<<<<< HEAD */}
      {/* <a href='/packages'> */}
{/* ======= */}
        <a href={`/packages/${props.type}`}>
{/* >>>>>>> 5effce763cbd34d70ec8714009e4b0a43a7959ab */}
        <CardMedia
          component="img"
          height="160"
          image={props.imeg}
          alt="green iguana"
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.adv}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}