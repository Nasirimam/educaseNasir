import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
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
          sx={{ color: "rgba(0,0,0,1)" }}
          gutterBottom
        >
          Signin to your PopX account
        </Typography>
        <Typography
          variant="body2"
          fontFamily="Rubik"
          fontSize={"18px"}
          sx={{ color: "rgba(0,0,0,0.6)" }}
        >
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </Typography>
      </Box>

      <Box width="100%" maxWidth={400} mb={3}>
        <TextField
          fullWidth
          label="Email Address"
          placeholder="Enter email address"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="Enter password"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
        />
      </Box>

      <Box width="100%" maxWidth={400}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#CBCBCB",
            textTransform: "none",
            borderRadius: "6px",
            py: 1.5,
            fontSize: "16px",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
