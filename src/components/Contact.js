import React, { useState } from "react";
import {
  Box,
  Stack,
  IconButton,
  Avatar,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import {
  X,
  Phone,
  VideoCamera,
  CaretRight,
  Star,
  Bell,
  FlagBanner,
  Trash,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";

import "../index.css";
import AntSwitch from "./AntSwitch";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete this chat"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Proceed</Button>
      </DialogActions>
    </Dialog>
  );
};
const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Block this contact"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Proceed</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleDeleteBlock = () => {
    setOpenDelete(false);
  };
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            direction="row"
            sx={{ height: "100%", p: 2 }}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar("CONTACT"));
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        <Stack
          p={3}
          spacing={3}
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          className="scrollbar"
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{
                height: 64,
                width: 64,
              }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {"+91 62013 92874"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">At Gym 💪</Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle">Media, Links and Docs</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems="center">
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction="row"
            aligntItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            aligntItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding Monk</Typography>
              <Typography variant="caption">
                Ankit, Anish, Natasha, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              onClick={() => {
                setOpenBlock(true);
              }}
              startIcon={<FlagBanner />}
              fullWidth
              variant="outlined"
            >
              Block
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(true);
              }}
              startIcon={<Trash />}
              fullWidth
              variant="outlined"
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} handleClose={handleDeleteBlock} />
      )}
    </Box>
  );
};

export default Contact;
