import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Register = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
      bgcolor="#F7F8F9"
      p={3}
    >
      <Box>
        <Box textAlign="left" mb={3}>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="Rubik"
            fontSize={"28px"}
            sx={{ color: "rgba(0,0,0,1)" }}
            gutterBottom
          >
            Create your PopX account
          </Typography>
        </Box>

        <Box width="100%" maxWidth={400} mb={3}>
          <TextField
            required
            fullWidth
            label="Full Name"
            placeholder="Enter your full name"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
          />
          <TextField
            required
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
          />
          <TextField
            required
            fullWidth
            label="Email address"
            placeholder="Enter email address"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
          />
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter password"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
          />
          <TextField
            required
            fullWidth
            label="Company name"
            placeholder="Enter your company name"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ shrink: true, style: { color: "#6C25FF" } }}
          />
        </Box>

        <Box width="100%" maxWidth={400} mb={3}>
          <Typography
            variant="body1"
            fontFamily="Rubik"
            fontSize={"18px"}
            sx={{ color: "rgba(0,0,0,0.8)" }}
            gutterBottom
          >
            Are you an Agency?
          </Typography>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>

      <Box width="100%" maxWidth={400}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#6C25FF",
            textTransform: "none",
            borderRadius: "6px",
            py: 1.5,
            fontSize: "16px",
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
