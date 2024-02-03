import React from "react";

import {
  Stack,
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import { faker } from "@faker-js/faker";

import { useTheme } from "@mui/material/styles";

import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from "phosphor-react";

import StyledBadge from "../StyledBadge";

import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../redux/slices/app";


const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px  0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack direction={"row"} spacing={3} 
        sx={{cursor: "pointer"}}
        onClick={() => 
        dispatch(ToggleSidebar())
        }>
          <Box>
            <StyledBadge>
              <Avatar src={faker.image.avatar()} ></Avatar>
            </StyledBadge>
          </Box>
          <Stack spacing={0.2}>
            <Typography>{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
