import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";



const CartSummary = () => {
  return (
    <Box sx={{ mt: '33px', }}>
      <Card sx={{ maxWidth: '200px', margin: '0 auto'}}>
        <Typography variant="h6" sx={{textAlign: 'center', padding: '12px'}}>
          Cart summary
        </Typography>
        <Divider/>
        
        <Stack sx={{flexDirection: 'row', justifyContent: 'space-between', padding: '12px'}}>
          <Typography variant="body1" >SubTotal</Typography>
          <Typography variant="body1" >$100</Typography>
        </Stack>
        <Button variant="contained" fullWidth>Checkout</Button>
      </Card>
    </Box>
  );
}

export default CartSummary;
