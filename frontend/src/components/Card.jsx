import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  Button, CardActionArea,  } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
// import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export default function MultiActionAreaCard() {
  // const StyledBadge = styled(Badge)(({ theme }) => ({
  //   "& .MuiBadge-badge": {
  //     right: 0,
  //     top: 0,
  //     border: `1px solid ${theme.palette.background.paper}`,
  //     padding: "0 ",
  //   },
  // }));
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 2, md: 4 }}
    >
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image="" alt="watch" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aperiam quas dolorem quaerat deserunt alias
            </Typography>
          </CardContent>
        </CardActionArea>

        <Stack
          direction={{ xs: "row", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          {/* <Stack direction={{ xs: "row", sm: "row" }}>
            <Button size="small" color="primary">
              <AddIcon />
            </Button>
            <IconButton size="small" color="primary">
              <StyledBadge badgeContent={4} color="primary"></StyledBadge>
            </IconButton>
            <Button size="small" color="primary">
              <HorizontalRuleIcon />
            </Button>
          </Stack> */}
          <Button variant="contained" sx={{ textTransform: "capitalize", lineHeight: '1' }}>add to cart</Button>
          <Typography sx={{ pr: "20px" }}>$100</Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
