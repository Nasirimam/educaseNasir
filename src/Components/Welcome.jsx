import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      minHeight="100vh"
      bgcolor="#F7F8F9"
      p={3}
    >
      <Box textAlign="left" mb={3}>
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="Rubik"
          fontSize={"28px"}
          gutterBottom
        >
          Welcome to PopX
        </Typography>
        <Typography
          variant="body2"
          fontFamily="Rubik"
          fontWeight="bold"
          fontSize={"18px"}
          color="text.secondary"
        >
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </Typography>
      </Box>

      <Box width="100%" maxWidth={400} alignItems={"center"}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#6C25FF",
            textTransform: "none",
            borderRadius: "6px",
            py: 1.5,
            mb: 2,
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#6C25FF4B",
            color: "black",
            textTransform: "none",
            borderRadius: "6px",
            py: 1.5,
            fontSize: "16px",
            opacity: 1,
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Already Registered? Login
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
