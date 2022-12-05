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
import React, { FC } from "react";
import { IBlogCardInfos } from "./BlogPage";

interface IBlogArticlePage {
  blogCardInfos?: IBlogCardInfos;
  setOpenBlogArticleModal?: (openModal: boolean) => void;
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
];

const BlogArticlePage: FC<IBlogArticlePage> = (props) => {
  let objectFitMethod: string = "";
  if (props.blogCardInfos?.BlogCardImgFitMethod != null) {
    objectFitMethod = props.blogCardInfos.BlogCardImgFitMethod;
  } else {
    objectFitMethod = "cover";
  }

  const matches = useMediaQuery("(max-width:450px)");

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

      <Grid item m={3} xs={12} md={8} alignSelf={"center"}>
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
              sx={{
                mx: matches ? "auto" : "20px",
                my: matches ? "auto" : "20px",
                float: matches ? "none" : "right",
                width: matches ? "100%" : "50%",
              }}
              component="img"
              image={props.blogCardInfos?.BlogCardImgSrc}
              alt={props.blogCardInfos?.BlogTitle}
            />
            {props.blogCardInfos?.BlogText}
          </Typography>
        </Grid>
      </Grid>

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
