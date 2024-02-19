import { Box, Button, Typography, useMediaQuery } from "@mui/material/";
import Card from "@mui/material/Card";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { comparisonDatas, IComparisonData } from "../../datas/ComparisonDatas";
import comingSoon from "../../image/Comparison_avatars/coming_soon.svg";
import SomatotypeGraph from "../somatotypeGraph/SomatotypeGraph";
import { AddPoint } from "../../datas/Calculation";
import "./SearchLibrary.css";

interface ShowGraphState {
  [key: number]: boolean;
}

const SearchLibrary = () => {
  const [searchResults, setSearchResults] = useState<IComparisonData[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showGraph, setShowGraph] = useState<ShowGraphState>({});
  const [isFlipped, setIsFlipped] = useState<Record<number, boolean>>({});

  const handleShowGraph = (index?: number) => {
    if (index !== undefined) {
      setShowGraph((currentShowGraph) => ({
        ...currentShowGraph,
        [index]: !currentShowGraph[index],
      }));

      setIsFlipped((currentIsFlipped) => ({
        ...currentIsFlipped,
        [index]: !currentIsFlipped[index],
      }));
    }
  };

  const handleChange = (e: { target: { value: string } }) => {
    setNext(0 + imagePerCard);
    if (e.target.value !== "") {
      setIsSearching(true);
      setSearchResults([]);
      let searchValue = e.target.value;
      let tempResultsArray: IComparisonData[] = [];
      for (let i = 0; i < comparisonDatas.length; i++) {
        if (
          comparisonDatas[i].group
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          comparisonDatas[i].gender
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          comparisonDatas[i].name
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          comparisonDatas[i].codeSoma
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          (comparisonDatas[i].imageName !== undefined &&
            comparisonDatas[i]
              .imageName!.toLowerCase()
              .includes(searchValue.toLowerCase()))
        ) {
          tempResultsArray.push(comparisonDatas[i]);
        }
      }

      setSearchResults(tempResultsArray);
    } else {
      setIsSearching(false);
    }
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
      {isSearching && (
        <Typography variant="h3" component="div" paddingTop={"50px"}>
          Search results :
        </Typography>
      )}

      <Box
        flexWrap={"wrap"}
        display={
          (isSearching && searchResults.length > 0) || !isSearching
            ? "flex"
            : "none"
        }
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"1100px"}
        padding={"50px 0"}
      >
        {isSearching
          ? searchResults?.slice(0, next)?.map((data, index) => {
              return (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                  maxWidth={"340px"}
                  width={"100%"}
                >
                  {/* card  for flippling animation */}
                  <div className={`card ${isFlipped[index] ? "flipped" : ""}`}>
                    {/* inner card */}
                    <div className="card-inner">
                      {/* FRONT CARD */}
                      <Card
                        className="card-front"
                        sx={{
                          placeSelf: "center",
                          width: "100%",
                          borderRadius: "25px",
                        }}
                      >
                        {data.imageName !== undefined ? (
                          <CardMedia
                            component="img"
                            sx={{ objectFit: "fill" }}
                            image={require("../../image/Comparison_avatars/" +
                              data.imageName +
                              ".svg")}
                          />
                        ) : (
                          <CardMedia
                            component="img"
                            sx={{ objectFit: "fill" }}
                            image={comingSoon}
                          />
                        )}
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            backgroundColor: "#D9D9D9",
                          }}
                        >
                          {data.name + " " + data.gender.toLowerCase()}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            backgroundColor: "#E7E7E7",
                          }}
                        >
                          {data.endo + " - " + data.meso + " - " + data.ecto}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            backgroundColor: "#F5F5F6",
                          }}
                        >
                          {data.codeSoma}
                        </Typography>
                        <button onClick={() => handleShowGraph(index)}>
                          {showGraph[index] ? "Hide Graph" : "Show Graph"}
                        </button>
                      </Card>
                      {/* BACK CARD */}
                      <Card
                        className="card-back"
                        sx={{
                          placeSelf: "center",
                          width: "100%",
                          borderRadius: "25px",
                          padding: "10px",
                        }}
                      >
                        <SomatotypeGraph
                          pointsArray={[
                            AddPoint(
                              data.endo,
                              data.meso,
                              data.ecto,
                              "#000000"
                            ),
                          ]}
                          graphColor={"#5c5c5c"}
                        />
                        <button onClick={() => handleShowGraph(index)}>
                          {!showGraph[index] ? "Hide Graph" : "Show card"}
                        </button>
                      </Card>
                    </div>
                  </div>
                </Box>
              );
            })
          : comparisonDatas?.slice(0, next)?.map((data, index) => {
              return (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                  maxWidth={"340px"}
                  width={"100%"}
                >
                  <div className={`card ${isFlipped[index] ? "flipped" : ""}`}>
                    <div className="card-inner">
                      {/* FRONT CARD */}
                      <Card
                        className="card-front"
                        sx={{
                          placeSelf: "center",
                          width: "100%",
                          borderRadius: "25px",
                        }}
                      >
                        {data.imageName !== undefined ? (
                          <CardMedia
                            component="img"
                            sx={{ objectFit: "fill" }}
                            image={require("../../image/Comparison_avatars/" +
                              data.imageName +
                              ".svg")}
                          />
                        ) : (
                          <CardMedia
                            component="img"
                            sx={{ objectFit: "fill" }}
                            image={comingSoon}
                          />
                        )}
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            backgroundColor: "#D9D9D9",
                          }}
                        >
                          {data.name + " " + data.gender.toLowerCase()}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="div"
                          sx={{
                            backgroundColor: "#E7E7E7",
                          }}
                        >
                          {data.endo + " - " + data.meso + " - " + data.ecto}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            backgroundColor: "#F5F5F6",
                          }}
                        >
                          {data.codeSoma}
                        </Typography>
                        <button onClick={() => handleShowGraph(index)}>
                          {showGraph[index] ? "Hide Graph" : "Show Graph"}
                        </button>
                      </Card>
                      {/* BACK CARD */}
                      <Card
                        className="card-back"
                        sx={{
                          placeSelf: "center",
                          width: "100%",
                          borderRadius: "25px",
                          padding: "10px",
                        }}
                      >
                        <SomatotypeGraph
                          pointsArray={[
                            AddPoint(
                              data.endo,
                              data.meso,
                              data.ecto,
                              "#000000"
                            ),
                          ]}
                          graphColor={"#5c5c5c"}
                        />
                        <button onClick={() => handleShowGraph(index)}>
                          {!showGraph[index] ? "Hide Graph" : "Show card"}
                        </button>
                      </Card>
                    </div>
                  </div>
                </Box>
              );
            })}
      </Box>
      {/* button */}
      {next <
        (isSearching ? searchResults?.length : comparisonDatas?.length) && (
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
      {isSearching && searchResults.length === 0 && (
        <Typography variant="h4" component="div" paddingY={"50px"}>
          No results found
        </Typography>
      )}
    </Box>
  );
};

export default SearchLibrary;
