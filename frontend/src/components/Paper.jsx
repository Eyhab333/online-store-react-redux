import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, display: 'flex', alignItems: 'center' }}>
      
      <CardActions>
        <Button size="small" sx={{color: red[500]}}>Delete</Button>

      </CardActions>
    </Card>
  );
}