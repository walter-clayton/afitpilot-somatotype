import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import {
  Typography,
  Box,
  TextField,
  Button,
  Container,
  Link,
} from "@mui/material/";
import { red } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";

export default function CommentPage() {
  const steps = [
    {
      image: "A",
      name: "A",
      bodyType: "Balanced Mesomorph (BM).",
      Time: "2 hours ago",
      description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
    },
    {
      image: "B",
      name: "B",
      bodyType: "Ectomorphic Mesomorph (EcM).",
      Time: "2 days ago",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      image: "C",
      name: "C",
      bodyType: " Mesomorph Ectomorph (M-Ec).",
      Time: "4 days ago",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
    {
      image: "D",
      name: "D",
      bodyType: "Mesomorphic Ectomorph (MEc).",
      Time: "5 days ago",
      description: `Try out different ad text to see what brings in the most customers,
                   and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
  ];
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        backgroundColor: "RGB(242, 243, 244)",
        paddingTop: "1px",
        marginTop: 8,
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "18px", margin: "30px 0px 30px" }}
        >
          Please{" "}
          <Link
            onClick={() => {
              navigate("/Login");
              window.scrollTo(0, 0);
            }}
            sx={{ textDecoration: "none", cursor: "pointer", fontSize: "18px" }}
            variant="body1"
          >
            log in{" "}
          </Link>
          to join the discussion.
        </Typography>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {steps.map((step, index) => (
            <Card sx={{ width: "100%", mb: 3 }} key={index}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="user image">
                    {/* {step.image} */}
                  </Avatar>
                }
                title={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "RGB(56, 129, 153)",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    {step.name}
                    <Typography
                      component={"span"}
                      variant="body2"
                      sx={{
                        marginLeft: "10px",
                        color: "RGB(181, 181, 181)",
                        fontSize: "18px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                    >
                      {step.bodyType}
                    </Typography>
                  </Typography>
                }
                subheader={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "RGB(127, 127, 127)",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                  >
                    {step.Time}
                  </Typography>
                }
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "RGB(81, 89, 106)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                  }}
                >
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
          <TextField
            id="outlined-multiline-static"
            fullWidth
            placeholder="Write your Comment"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: "sm",
              color: "white",
              marginTop: 1.5,
              marginBottom: 2,
              backgroundColor: "RGB(52, 121, 144)",
              padding: "7px 15px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "18px",
              borderRadius: "40px",
              textTransform: "initial",
              minWidth: "140px",
              "&.MuiButtonBase-root:hover": { bgcolor: "RGB(52, 121, 144)" },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
