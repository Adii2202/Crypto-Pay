import React, { useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Container,
  Grid,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Divider,
  Box,
} from "@mui/material";
import { TransactionContext } from "../context/TransactionContext";

const theme = createTheme({
  typography: {
    fontFamily: "Spartan, sans-serif",
    fontStyle: "normal",
  },
  palette: {
    primary: {
      main: "#2196f3", // Adjust primary color
    },
    secondary: {
      main: "#ff5722", // Adjust secondary color
    },
  },
});

const Welcome = () => {
  const {
    connectWallet,
    connectedAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, message } = formData;
    if (!addressTo || !amount || !message) return;

    const amtarr = amount.split(".");
    if (amtarr.length > 2) return;

    for (let i = 0; i < amount.length; i++) {
      if (
        amount.charAt(i) === "." ||
        (amount.charAt(i) >= "0" && amount.charAt(i) <= "9")
      )
        continue;
      else return;
    }

    sendTransaction();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ height: "100vh", width: "100vw" }}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="center"></Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Box mb={2}>
                {!connectedAccount && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </Button>
                )}
              </Box>
              <ToggleButtonGroup color="primary" exclusive>
                <ToggleButton disableRipple selected>
                  Reliability
                </ToggleButton>
                <ToggleButton disableRipple selected>
                  Security
                </ToggleButton>
                <ToggleButton disableRipple selected>
                  Ethereum
                </ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup color="primary" exclusive sx={{ mt: 2 }}>
                <ToggleButton disableRipple selected>
                  Web 3.0
                </ToggleButton>
                <ToggleButton disableRipple selected>
                  Low Fees
                </ToggleButton>
                <ToggleButton disableRipple selected>
                  Blockchain
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <TextField
                name="addressTo"
                margin="dense"
                required
                type="text"
                onChange={(e) => handleChange(e, "addressTo")}
                label="Recipient Address"
                variant="outlined"
                fullWidth
                InputLabelProps={{ sx: { color: "primary.main" } }}
                InputProps={{ sx: { color: "primary.main" } }}
                sx={{ mb: 2 }}
              />
              <TextField
                name="amount"
                margin="dense"
                required
                type="number"
                step={0.5}
                onChange={(e) => handleChange(e, "amount")}
                label="Amount (ETH)"
                variant="outlined"
                fullWidth
                InputLabelProps={{ sx: { color: "primary.main" } }}
                InputProps={{ sx: { color: "primary.main" } }}
                sx={{ mb: 2 }}
              />
              <TextField
                name="message"
                margin="dense"
                required
                type="text"
                onChange={(e) => handleChange(e, "message")}
                label="Message (Optional)"
                variant="outlined"
                fullWidth
                InputLabelProps={{ sx: { color: "primary.main" } }}
                InputProps={{ sx: { color: "primary.main" } }}
                sx={{ mb: 2 }}
              />
              <Divider sx={{ backgroundColor: "primary.main", my: 2 }} />
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                fullWidth
              >
                Send Ether
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Welcome;
