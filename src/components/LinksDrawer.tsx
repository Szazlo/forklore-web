import { IconButton, Stack, SwipeableDrawer, Typography } from "@mui/material";
import "@/main.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LinksDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon fontSize="large"/>
      </IconButton>

      <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
        <Stack px={2}>
          <Typography variant="h3" color={"primary"}>Links</Typography>
          <Link to="/">
            <Typography variant="h5">Feed</Typography>
          </Link>
          <Link to="/recipes">
            <Typography variant="h5">Recipes</Typography>
            </Link>
          <Link to="/tips">
            <Typography variant="h5">Cooking Tips</Typography>
          </Link>
        </Stack>
      </SwipeableDrawer>
    </>
  );
}
