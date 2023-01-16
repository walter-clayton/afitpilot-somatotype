import {
  Button,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllBlogContents } from "./BlogContent/BlogContent";
import { IBlogContent } from "./BlogContent/BlogInterfaces";
import { IBlogCardInfos } from "./BlogPage";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface IBlogArticlePage {
  blogCardInfos?: IBlogCardInfos;
  setOpenBlogArticleModal?: (openModal: boolean) => void;
}

const BlogArticlePage: FC<IBlogArticlePage> = (props) => {
  const xxs = useMediaQuery("(max-width:450px)");

  let navigate = useNavigate();

  const { idBlog } = useParams();

  const [finalLayout, setFinalLayout] = useState<any[]>([]);
  const [blogCardInfo, setBlogCardInfo] = useState<IBlogContent | undefined>(
    undefined
  );

  const [allBlogContent, setAllBlogContent] = useState<IBlogContent[]>([]);

  const [noBlogFound, setNoBlogFound] = useState<boolean>(false);

  useEffect(() => {
    setAllBlogContent(getAllBlogContents());
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
  }, [allBlogContent]);

  useEffect(() => {
    let arrayTemp: any[] = [];
    let layoutElementCount = 0;

    blogCardInfo?.content?.forEach((blogContentElement) => {
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
  }, [blogCardInfo]);

  const getBlogText = (layoutIndex: number) => {
    const blogText = (
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
            {blogCardInfo?.content![layoutIndex].text!}
          </Typography>
        </Grid>
      </Grid>
    );
    return blogText;
  };

  const getBlogImage = (layoutIndex: number) => {
    const image = (
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
    return image;
  };

  const getBlogTextWithImage = (layoutIndex: number) => {
    const blogTextWithImage = (
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
    return blogTextWithImage;
  };

  const getBlogCTAButton = (layoutIndex: number) => {
    const blogCTABtn = (
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
    return blogCTABtn;
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
            <Typography>Go back at top</Typography>
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
