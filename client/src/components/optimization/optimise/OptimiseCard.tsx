import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SportGirl from "../../../image/SportGirl.svg";
import Coach from "../../../image/Coach.svg";
import TrueCoach from "../../../image/TrueCoach.png";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const theme = createTheme();

theme.typography.body1 = {
  "@media (max-width:600px)": {
    fontSize: "24px",
    fontWeight: 600,
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "24px",
    fontWeight: 600,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
    fontWeight: 600,
  },
};
theme.typography.body2 = {
  "@media (max-width:600px)": {
    fontSize: "14px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "17px",
  },
};

const OptimiseCard = () => {
  const medium = useMediaQuery("(min-width:769px)");
  const small = useMediaQuery("(max-width:768px)");
  const extraSmall = useMediaQuery("(max-width:449px)");
  const xxSmall = useMediaQuery("(max-width:399px)");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: extraSmall ? 250 : 400,
    height: 400,
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: "25px",
    p: extraSmall ? 2 : 4,
    overflowY: "scroll",
    display: "block",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Modals for terms and conditions */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: "30px",
              }}
            >
              Terms and Conditions
            </Typography>
            <Typography variant="subtitle1">
              Our Terms and Conditions were last updated on January 4, 2023.
            </Typography>
            <List>
              Definitions
              <ListItem>
                <Typography variant="subtitle1">
                  For the purposes of these Terms and Conditions:
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      listStyleType: "disc",
                      display: "list-item",
                      mt: -4,
                    }}
                  >
                    “Service” refers to the refers to the Training or Nutrition
                    Coaching Program.
                  </Typography>
                </ListItem>
              </ListItem>
              <ListItem>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      listStyleType: "disc",
                      display: "list-item",
                      mt: -4,
                    }}
                  >
                    “You” means the individual accessing or using the Service,
                    or the company, or other legal entity on behalf of which
                    such individual is accessing or using the Service, as
                    applicable.
                  </Typography>
                </ListItem>
              </ListItem>
              <ListItem>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      listStyleType: "disc",
                      display: "list-item",
                      mt: -4,
                    }}
                  >
                    “Afitpilot” (referred to as either "the Company", "We", "Us"
                    or "Our" in this Agreement) refers to TVA BE0772.508.196.
                  </Typography>
                </ListItem>
              </ListItem>
            </List>
            <Typography variant="subtitle1" mb={1}>
              You give consent to agree to the following Terms and Conditions
              conducted by Afitpilot.
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              Benefits:
              <Typography variant="subtitle1">
                Participation in a regular program of physical activity has been
                shown to produce positive changes in a number of organ systems
                (heart, lungs, muscles, joints). These changes include increased
                work capacity, decrease in body fat and heart disease, improved
                cardiovascular efficiency, increased muscular strength,
                flexibility, power and endurance{" "}
              </Typography>
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              Risks:
              <Typography variant="subtitle1">
                You understand that exercise carries some risk to the
                musculoskeletal system (sprains, stains), the cardiorespiratory
                system (dizziness, discomfort in breathing, heart attack,
                changes in blood pressure), and other abnormal side effects. You
                hereby certify that you know of no medical problem (except those
                noted in the Afitpilot Information Form) that would increase any
                risk of illness and injury as a result of participation in a
                regular exercise and/or nutrition program.
              </Typography>
              <br></br>
              <Typography variant="subtitle1">
                You understand that Afitpilot shall not be liable for any
                damages arising from personal injuries sustained and during
                and/or from a training and/or program does so at his/her own
                risk. You assume full responsibilities for any injuries or
                damages which may occur during and/or after the Service.
              </Typography>
              <Typography variant="subtitle1">
                You hereby fully and forever release and discharge Afitpilot,
                its assigns and agents from all claims, demands, damages, rights
                of action, present and future therein.
              </Typography>
              <Typography variant="subtitle1">
                The fees for the Service are non-refundable.
              </Typography>
              <br></br>
              <Typography variant="subtitle1">
                The Service shall ask for a 3 month mandatory commitment.
              </Typography>
              <br></br>
              <Typography variant="subtitle1">
                You may cancel the Coaching Program upon 30 days notice, by
                sending an email to info.afitpilot@gmail.com.
              </Typography>
              <br></br>
              <Typography variant="subtitle1">
                This contract shall start upon acceptance of this document.{" "}
              </Typography>
            </Typography>
            <br></br>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Button
                sx={{ display: "flex", justifyContent: "center" }}
                variant="contained"
                href="https://checkout.stripe.com/c/pay/cs_test_a1OP41G5O0P67dW3qMCVrG5nUUrZWZcCoQyRxBKrFHvMWfg18DdbgG4TQO#fidkdWxOYHwnPyd1blpxYHZxWjA0SEZCR3JOZmFjVjR9aXZSV0NVbD1dVX81UDxJTUQ3PVJRUHRIdjBHQDRLbX9%2FUWt2XE5gUnA0N2pAdH1tb0JHdXV9Qz1Gf0BMckZ9amhIPFJfR2pGRGhXNTVzalRgbGdwTCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVo3PWpnSG89QlBmYnBhfzdjXzQneCUl"
                target="_blank"
              >
                Accept
              </Button>
              <Button
                sx={{ display: "flex", justifyContent: "center" }}
                variant="outlined"
                onClick={handleClose}
              >
                Decline
              </Button>
            </Stack>
          </Box>
        </Modal>
      </div>
      {/* cards for training program */}
      <Grid item container>
        <Box
          sx={{
            marginBottom: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "40px",
          }}
        >
          <Stack direction={small ? "column" : "row"} spacing={2}>
            <Paper
              square
              elevation={3}
              sx={{
                alignItems: "center",
                color: "#FFFFFF",
                borderRadius: "8px",
                backgroundColor: "#606161",
                width: small ? "100%" : "calc(100% / 3)",
                padding: "25px 30px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <img
                    src={Coach}
                    alt="avatar"
                    width={"120px"}
                    height={"230px"}
                  />
                </Box>
                <Box>
                  <Typography variant="body1">Personal Coach</Typography>
                  <Typography variant="body2">
                    Our Coaches will be at your service 24/7.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: "#606161",
                color: "#FFFFFF",
                width: small ? "100%" : "calc(100% / 3)",
                padding: "25px 30px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <img
                    src={TrueCoach}
                    alt="TrueCoach"
                    width={"120px"}
                    height={"230px"}
                  />
                </Box>
                <Box>
                  <Typography variant="body1">Mobile App</Typography>
                  <Typography variant="body2">
                    Complete one workout at a time.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: "#606161",
                color: "#FFFFFF",
                width: small ? "100%" : "calc(100% / 3)",
                padding: "25px 30px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Box>
                  <img
                    src={SportGirl}
                    alt="avatar"
                    width={"120px"}
                    height={"230px"}
                  />
                </Box>
                <Box>
                  <Typography variant="body1">Sport Specific</Typography>
                  <Typography variant="body2">
                    Programs that make sense.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Box>
        {/* button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "40px",
          }}
        >
          <Button
            sx={{
              borderRadius: "40px",
              backgroundColor: "RGB(108, 77, 123)",
              padding: "14px 30px",
              fontWeight: 600,
              width: small ? (extraSmall ? "100%" : "65%") : "600px",
              textAlign: "start",
              fontSize: small ? (extraSmall ? "25px" : "30px") : "42px",
              lineHeight: "40px",
              marginBottom: "20px",
              textTransform: "initial",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "RGB(108, 77, 123)",
              },
            }}
            onClick={handleOpen}
            variant="contained"
          >
            GET STARTED
          </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default OptimiseCard;
