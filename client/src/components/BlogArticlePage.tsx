import {
  Button,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { IBlogCardInfos } from "./BlogPage";

interface IBlogArticlePage {
  blogCardInfos?: IBlogCardInfos;
  setOpenBlogArticleModal?: (openModal: boolean) => void;
}

const BlogArticlePage: FC<IBlogArticlePage> = (props) => {
  let objectFitMethod: string = "";
  if (props.blogCardInfos?.BlogCardImg?.imageFitMethod != null) {
    objectFitMethod = props.blogCardInfos.BlogCardImg?.imageFitMethod;
  } else {
    objectFitMethod = "cover";
  }

  const xxs = useMediaQuery("(max-width:450px)");

  const [finalLayout, setFinalLayout] = useState<any[]>([]);

  useEffect(() => {
    let arrayTemp: any[] = [...finalLayout];
    // console.log(arrayTemp);

    let layoutElementCount = 0;
    let textCount = 0;
    let imageCount = 0;
    let textWithImageCount = 0;

    props.blogCardInfos?.BlogLayout?.forEach((layoutElement) => {
      if (layoutElement === "text") {
        arrayTemp.push(getBlogText(textCount, layoutElementCount));
        textCount++;
        layoutElementCount++;
      }
      if (layoutElement === "image") {
        arrayTemp.push(getBlogImage(imageCount, layoutElementCount));
        imageCount++;
        layoutElementCount++;
      }
      if (layoutElement === "textWithImage") {
        arrayTemp.push(
          getBlogTextWithImage(textWithImageCount, layoutElementCount)
        );
        textWithImageCount++;
        layoutElementCount++;
      }
    });

    setFinalLayout(arrayTemp);
  }, []);

  const getBlogText = (index: number, layoutIndex: number) => {
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
            {props.blogCardInfos?.BlogTexts![index]}
          </Typography>
        </Grid>
      </Grid>
    );
    return blogText;
  };

  const getBlogImage = (index: number, layoutIndex: number) => {
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
            {props.blogCardInfos?.BlogImages![index] &&
              props.blogCardInfos?.BlogImages![index].imageSrc && (
                <CardMedia
                  component="img"
                  image={props.blogCardInfos?.BlogImages![index].imageSrc}
                  alt={""}
                />
              )}
            {props.blogCardInfos?.BlogImages![index] &&
              props.blogCardInfos?.BlogImages![index].imageHasCaption && (
                <Typography variant="caption">
                  {props.blogCardInfos?.BlogImages![index].imageCaption}
                </Typography>
              )}
          </Grid>
        </Grid>
      </Grid>
    );
    return image;
  };

  const getBlogTextWithImage = (index: number, layoutIndex: number) => {
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
              image={props.blogCardInfos?.BlogTextsWithImages![index].image}
              alt={""}
              sx={{
                marginLeft:
                  props.blogCardInfos?.BlogTextsWithImages![index]
                    .imagePosition! === "right"
                    ? xxs
                      ? "0"
                      : "20px"
                    : "0",
                marginRight:
                  props.blogCardInfos?.BlogTextsWithImages![index]
                    .imagePosition! === "left"
                    ? xxs
                      ? "0"
                      : "20px"
                    : "0",
                marginTop: "0",
                marginBottom: xxs ? "0" : "20px",
                float: xxs
                  ? "none"
                  : props.blogCardInfos?.BlogTextsWithImages![index]
                      .imagePosition!,
                width: xxs ? "100%" : "50%",
              }}
            />
            {props.blogCardInfos?.BlogTextsWithImages![index].text}
          </Typography>
        </Grid>
      </Grid>
    );
    return blogTextWithImage;
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
          {props.blogCardInfos?.BlogTitle}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            width: "100%",
            fontSize: { xs: "75%", sm: "120%", md: "150%" },
          }}
        >
          {props.blogCardInfos?.BlogDate}
        </Typography>
      </Grid>

      {finalLayout.length > 0 ? finalLayout : null}

      <Grid item m={3} xs={12} md={8} lg={6} alignSelf={"center"}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          onClick={() => {
            props.setOpenBlogArticleModal!(false);
            window.scrollTo(0, 0);
          }}
        >
          GO BACK
        </Button>
      </Grid>
    </Grid>
  );
};

export default BlogArticlePage;
