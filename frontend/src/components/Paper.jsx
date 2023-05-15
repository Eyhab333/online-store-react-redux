import * as React from "react";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import IconButton from "@mui/material/IconButton";
import { Badge, CardMedia, Stack, styled, Typography } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 0,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 ",
    },
  }));
export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, display: "flex", alignItems: "center" }}>
      <CardActions>
        <Button size="small" sx={{ color: red[500] }}>
          Delete
        </Button>
      </CardActions>
      <Typography variant="body1" >$100</Typography>
      <Stack direction={{ xs: "row", sm: "row" }}>
        <Button size="small" color="primary">
          <AddIcon />
        </Button>
        <IconButton size="small" color="primary">
          <StyledBadge badgeContent={4} color="primary"></StyledBadge>
        </IconButton>
        <Button size="small" color="primary">
          <HorizontalRuleIcon />
        </Button>
      </Stack>
      <CardMedia
        component="img"
        height="auto"
        image=""
        alt="watch"
        sx={{pr: '9px'}}
      />
    </Card>
  );
}
