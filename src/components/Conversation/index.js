import React from "react";
import { Stack, Box } from "@mui/material";

import {} from "phosphor-react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../../index.css";

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box
        className="scrollbar"
        width={"100%"}
        sx={{
          flexGrow: 1,
          height: "100%",
          overflow: "scroll",
          className: "scrollbar",
        }}
      >
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
