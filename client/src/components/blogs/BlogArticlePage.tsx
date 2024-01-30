import {
  Button,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllBlogContents } from "./BlogContent/BlogContent";
import { IBlogContent } from "./BlogContent/BlogInterfaces";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IBlogCardInfos } from "./BlogPage";

interface IBlogArticlePage {
  blogCardInfos?: IBlogCardInfos;
  setOpenBlogArticleModal?: (openModal: boolean) => void;
}

const BlogArticlePage: FC<IBlogArticlePage> = (props) => {
  const xxs = useMediaQuery("(max-width:450px)");

  const navigate = useNavigate();
  const { idBlog } = useParams();
  console.log("coming from idBlog:", idBlog);

  const [finalLayout, setFinalLayout] = useState<JSX.Element[]>([]);
  const [blogCardInfo, setBlogCardInfo] = useState<IBlogContent | undefined>(
    undefined
  );
  console.log("blogCardInfos:", blogCardInfo);

  const [allBlogContent, setAllBlogContent] = useState<IBlogContent[]>([]);
  // console.log("BlogArticlePage:", allBlogContent);
  const [noBlogFound, setNoBlogFound] = useState<boolean>(false);

  const [blogCards, setBlogCards] = useState<IBlogCardInfos[]>([]);

  useEffect(() => {
    const fetchBlogContents = async () => {
      try {
        const blogContents = await getAllBlogContents();
        setAllBlogContent(blogContents);
      } catch (error) {
        console.error("Error fetching blog contents:", error);
      }
    };

    fetchBlogContents();
  }, []);

  useEffect(() => {
    if (allBlogContent.length > 0) {
      if (isNaN(Number(idBlog)!)) {
        setNoBlogFound(true);
      } else if (
        Number(idBlog) < 0 ||
        Number(idBlog) >= allBlogContent.length
      ) {
        setNoBlogFound(true);
      } else {
        setNoBlogFound(false);
        setBlogCardInfo(allBlogContent[Number(idBlog)]);
      }
    }
  }, [allBlogContent, idBlog]);

  //description
  useEffect(() => {
    if (blogCardInfo?.content) {
      let arrayTemp: JSX.Element[] = [];
      let layoutElementCount = 0;

      blogCardInfo.content.forEach((blogContentElement) => {
        if (blogContentElement.hasOwnProperty("text")) {
          arrayTemp.push(getBlogText(layoutElementCount));
          layoutElementCount++;
        }
        if (blogContentElement.hasOwnProperty("image")) {
          arrayTemp.push(getBlogImage(layoutElementCount));
          layoutElementCount++;
        }
        if (blogContentElement.hasOwnProperty("textWithImage")) {
          arrayTemp.push(getBlogTextWithImage(layoutElementCount));
          layoutElementCount++;
        }
        if (blogContentElement.hasOwnProperty("callToActionButton")) {
          arrayTemp.push(getBlogCTAButton(layoutElementCount));
          layoutElementCount++;
        }
      });

      setFinalLayout(arrayTemp);
    }
  }, [blogCardInfo]);

  // useEffect(() => {
  //   const transformToCardInfo = (blogContent: IBlogContent): IBlogCardInfos => {
  //     return {
  //       title: blogContent.title,
  //       date: new Date(blogContent.date).toLocaleDateString("en-GB"),
  //     };
  //   };

  //   const fetchWordPressData = async () => {
  //     try {
  //       const fetchedBlogContents = await getAllBlogContents();
  //       const transformedBlogCards =
  //         fetchedBlogContents.map(transformToCardInfo);
  //       setBlogCards(transformedBlogCards);
  //     } catch (error) {
  //       console.error("Error fetching WordPress data:", error);
  //     }
  //   };

  //   fetchWordPressData();
  // }, [idBlog]);

  const getBlogText = (layoutIndex: number) => {
    return (
      <Grid item my={3} xs={12} md={8} alignSelf={"center"} key={layoutIndex}>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "100%", sm: "130%", md: "160%" },
            }}
            dangerouslySetInnerHTML={{
              __html: blogCardInfo?.content![layoutIndex].text!,
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const getBlogImage = (layoutIndex: number) => {
    return (
      <Grid
        item
        my={3}
        m={0}
        xs={12}
        md={8}
        alignSelf={"center"}
        justifySelf={"center"}
        textAlign={"center"}
        sx={{
          width: "100%",
        }}
        key={layoutIndex}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Grid
            item
            sx={{
              width: "100%",
            }}
          >
            {blogCardInfo?.content![layoutIndex].image &&
              blogCardInfo?.content![layoutIndex].image?.imageSrc && (
                <CardMedia
                  component="img"
                  image={blogCardInfo?.content![layoutIndex].image?.imageSrc}
                  alt={""}
                />
              )}
            {blogCardInfo?.content![layoutIndex].image &&
              blogCardInfo?.content![layoutIndex].image?.imageHasCaption && (
                <Typography variant="caption">
                  {blogCardInfo?.content![layoutIndex].image?.imageCaption}
                </Typography>
              )}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const getBlogTextWithImage = (layoutIndex: number) => {
    return (
      <Grid item my={3} xs={12} md={8} alignSelf={"center"} key={layoutIndex}>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "100%", sm: "130%", md: "160%" },
            }}
          >
            <CardMedia
              component="img"
              image={blogCardInfo?.content![layoutIndex].textWithImage?.image}
              alt={""}
              sx={{
                marginLeft:
                  blogCardInfo?.content![layoutIndex].textWithImage
                    ?.imagePosition! === "right"
                    ? xxs
                      ? "0"
                      : "20px"
                    : "0",
                marginRight:
                  blogCardInfo?.content![layoutIndex].textWithImage
                    ?.imagePosition! === "left"
                    ? xxs
                      ? "0"
                      : "20px"
                    : "0",
                marginTop: "0",
                marginBottom: xxs ? "0" : "20px",
                float: xxs
                  ? "none"
                  : blogCardInfo?.content![layoutIndex].textWithImage
                      ?.imagePosition!,
                width: xxs ? "100%" : "50%",
              }}
            />
            {blogCardInfo?.content![layoutIndex].textWithImage?.text}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const getBlogCTAButton = (layoutIndex: number) => {
    return (
      <Grid
        item
        my={3}
        xs={12}
        md={8}
        alignSelf={
          blogCardInfo?.content![layoutIndex].callToActionButton?.buttonPosition
        }
        key={layoutIndex}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          {blogCardInfo?.content![layoutIndex].callToActionButton
            ?.isExternalLink ? (
            <Button
              sx={{
                backgroundColor:
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonStyle === "contained"
                    ? blogCardInfo?.content![layoutIndex].callToActionButton
                        ?.buttonColor
                    : "#ffffff",
                color:
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonStyle === "contained"
                    ? "#ffffff"
                    : blogCardInfo?.content![layoutIndex].callToActionButton
                        ?.buttonColor,
                borderColor:
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonColor,
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "18px",
                textTransform: "initial",
                padding: "14px 30px",
                borderRadius: "40px",
                marginTop: "5px",
                width: "100%",
                "&.MuiButtonBase-root:hover": {
                  bgcolor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                  color: "#ffffff",
                  borderColor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                },
                display: "flex",
                "&:hover": {
                  bgcolor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                  color: "#ffffff",
                  borderColor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                },
              }}
              variant={
                blogCardInfo?.content![layoutIndex].callToActionButton
                  ?.buttonStyle
              }
              href={
                blogCardInfo?.content![layoutIndex].callToActionButton
                  ?.buttonLink!
              }
              target="_blank"
            >
              {
                blogCardInfo?.content![layoutIndex].callToActionButton
                  ?.buttonText
              }
            </Button>
          ) : (
            <Button
              sx={{
                backgroundColor:
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonStyle === "contained"
                    ? blogCardInfo?.content![layoutIndex].callToActionButton
                        ?.buttonColor
                    : "#ffffff",
                color:
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonStyle === "contained"
                    ? "#ffffff"
                    : blogCardInfo?.content![layoutIndex].callToActionButton
                        ?.buttonColor,
                borderColor:
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonColor,
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "18px",
                textTransform: "initial",
                padding: "14px 30px",
                borderRadius: "40px",
                marginTop: "5px",
                width: "100%",
                "&.MuiButtonBase-root:hover": {
                  bgcolor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                  color: "#ffffff",
                  borderColor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                },
                display: "flex",
                "&:hover": {
                  bgcolor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                  color: "#ffffff",
                  borderColor:
                    blogCardInfo?.content![layoutIndex].callToActionButton
                      ?.buttonColor,
                },
              }}
              variant={
                blogCardInfo?.content![layoutIndex].callToActionButton
                  ?.buttonStyle
              }
              onClick={() => {
                navigate(
                  blogCardInfo?.content![layoutIndex].callToActionButton
                    ?.buttonLink!
                );
                window.scrollTo(0, 0);
              }}
            >
              {
                blogCardInfo?.content![layoutIndex].callToActionButton
                  ?.buttonText
              }
            </Button>
          )}
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px 15px",
      }}
      width={"100%"}
    >
      {noBlogFound ? (
        <Grid
          item
          m={3}
          xs={12}
          md={8}
          lg={6}
          alignSelf={"center"}
          textAlign={"center"}
        >
          <Typography
            variant="h3"
            my={20}
            sx={{
              width: "100%",
              fontSize: { xs: "230%", sm: "320%", md: "400%" },
            }}
          >
            No blog found ! :(
          </Typography>
        </Grid>
      ) : (
        <Grid
          item
          m={3}
          xs={12}
          md={8}
          lg={6}
          alignSelf={"center"}
          textAlign={"center"}
        >
          <Typography
            variant="h3"
            sx={{
              width: "100%",
              fontSize: { xs: "230%", sm: "320%", md: "400%" },
            }}
          >
            {blogCardInfo?.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              width: "100%",
              fontSize: { xs: "75%", sm: "120%", md: "150%" },
            }}
          >
            {blogCardInfo?.date}
          </Typography>
        </Grid>
      )}

      {finalLayout.length > 0 && !noBlogFound ? finalLayout : null}

      <Grid item xs={12} md={8} lg={6} alignSelf={"end"}>
        <Button
          variant="text"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <Typography>Go back to top</Typography>
            <ArrowUpwardIcon
              sx={{ color: "#1976D2", marginLeft: "5px" }}
              fontSize="small"
            />
          </Box>
        </Button>
      </Grid>
      <Grid item m={3} xs={12} md={8} lg={6} alignSelf={"center"}>
        <Button
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            fontWeight: 600,
            textAlign: "center",
            lineHeight: "30px",
            fontSize: "18px",
            textTransform: "initial",
            padding: "14px 30px",
            borderRadius: "40px",
            marginTop: "5px",
            width: "100%",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#000000",
            },
            display: "flex",
            "&:hover": { bgcolor: "#000000" },
          }}
          variant="contained"
          onClick={() => {
            navigate("/Blog");
            window.scrollTo(0, 0);
          }}
        >
          Check All Blogs
        </Button>
      </Grid>
    </Grid>
  );
};

export default BlogArticlePage;
