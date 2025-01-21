import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

export default function PokemonCard({name, image, types}) {
  
  const typeHandler = () => {
    if(types[1]) {
      return types[0].type.name +" " + types[1].type.name
    }
    return types[0].type.name
  }
  
  return (
    //Estilização do conteúdo dentro
    <Card >
      <CardActionArea>
        <CardMedia component="img" height='100' image={image}/>
        <CardContent>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler()}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
