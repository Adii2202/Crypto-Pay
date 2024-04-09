import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme({
  typography: {
    fontFamily: "Spartan, sans-serif",
    fontWeight: 600,
  },
});

const Navbar = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0} color="transparent">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                color: "white",
                cursor: "pointer",
              }}
            >
              Crypto Pay
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                href="https://github.com/Adii2202"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: { xs: "none", md: "block", color: "white" },
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                <GitHubIcon sx={{ marginRight: 1 }} />
              </Button>
              <Button
                color="inherit"
                href="https://www.linkedin.com/in/aditya-ningule/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: { xs: "none", md: "block", color: "white" },
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                <LinkedInIcon sx={{ marginRight: 1 }} />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
