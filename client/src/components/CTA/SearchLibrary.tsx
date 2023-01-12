import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material/";
import Card from "@mui/material/Card";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Datas } from "../CTA/Library";

const SearchLibrary = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  const imagePerCard = 6;
  const [next, setNext] = useState(imagePerCard);
  const handleMoreCard = () => {
    setNext(next + imagePerCard);
  };

  const small = useMediaQuery("(max-width:599px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingX: "20px",
        width: "100%",
      }}
    >
      <input
        type="search"
        onChange={handleChange}
        placeholder="Search...."
        style={{
          width: small ? "80%" : "70%",
          height: "30px",
          borderRadius: "20px",
          padding: "20px",
          border: "1px solid grey",
        }}
      />

      <Box
        flexWrap={"wrap"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"1100px"}
        padding={"50px 0"}
      >
        {Datas?.slice(0, next)?.map((step, index) => {
          if (
            search === "" ||
            step.bodytype.toLowerCase().includes(search.toLowerCase()) ||
            step.TypeCode.toLowerCase().includes(search.toLowerCase())
          ) {
            return (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  textAlign: "center",
                  padding: "20px",
                }}
                maxWidth={"340px"}
                width={"100%"}
              >
                <Card
                  sx={{
                    placeSelf: "center",
                    width: "100%",
                    borderRadius: "25px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "fill" }}
                    image={require("../image/" + step.images + ".svg")}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      backgroundColor: "#D9D9D9",
                    }}
                  >
                    {step.bodytype}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      backgroundColor: "#E7E7E7",
                    }}
                  >
                    {step.SomatotypeType}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      backgroundColor: "#F5F5F6",
                    }}
                  >
                    {step.TypeCode}
                  </Typography>
                </Card>
              </Box>
            );
          }
        })}
      </Box>
      {/* button */}
      {next < Datas?.length && (
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            fontSize: "18px",
            lineHeight: "30px",
            backgroundColor: "RGB(108, 77, 123)",
            padding: "14px 40px",
            fontWeight: 600,
            textAlign: "center",
            textTransform: "initial",
            marginTop: 0,
            mb: 2,
            "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
          }}
          onClick={handleMoreCard}
        >
          Load More
        </Button>
      )}
    </Box>
  );
};

export default SearchLibrary;
