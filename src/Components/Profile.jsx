import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profilePic from "../assets/profilepic.png";

const Profile = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F7F8F9",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "4px",
          p: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Account Settings
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#F7F8F9",
          borderRadius: "4px",
          p: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          sx={{ position: "relative" }}
        >
          <Avatar src={profilePic} sx={{ width: 60, height: 60, mr: 2 }} />

          <Box
            sx={{
              position: "absolute",
              left: 40,
              top: 40,
              bgcolor: "#6C25FF",
              width: 22,
              height: 22,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 14,
            }}
          >
            <CameraAltIcon sx={{ fontSize: 14 }} />
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Marry Doe
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Marry@Gmail.Com
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: "#555" }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
