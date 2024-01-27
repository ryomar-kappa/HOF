import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card variant="outlined" sx={{ minWidth: 275,maxWidth: 400}}>
      <CardContent>
        <Typography variant="h5" component="div">
         本の名前
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          高山龍馬
        </Typography>
        <Typography variant="body2">
          本の説明とかが入る。
          <br />
          {'改行の書き方てすと'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">適当なボタン</Button>
      </CardActions>
    </Card>
  );
}


