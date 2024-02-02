import React from "react";
import { Stack, Box, IconButton, InputAdornment } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { LinkSimple, Smiley, PaperPlaneTilt } from "phosphor-react";

import StyledInput from "../../components/StyledInput";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      p={1.5}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px  0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <StyledInput
          sx={{
            "& .MuiInputBase-root": {
              "& input": {
                textAlign: "left",
              },
            },
          }}
          fullWidth
          placeholder="Write a message..."
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            height: 40,
            width: 40,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ width: "100%", height: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
