import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { IBlogCardInfos } from "./BlogPage";
interface IBlogCard {
  blogCard?: IBlogCardInfos;
  setOpenBlogArticleModal?: (openModal: boolean) => void;
  setSelectedBlogCard?: (selectedBlogCard: IBlogCardInfos) => void;
}

const BlogCard: FC<IBlogCard> = (props) => {
  let objectFitMethod: string = "";
  if (props.blogCard?.BlogCardImg?.imageFitMethod != null) {
    objectFitMethod = props.blogCard.BlogCardImg?.imageFitMethod;
  } else {
    objectFitMethod = "cover";
  }

  const handleClickLearnMore = () => {
    props.setSelectedBlogCard!(props.blogCard!);
    props.setOpenBlogArticleModal!(true);
    window.scrollTo(0, 0);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {props.blogCard?.BlogCardImg?.imageSrc != null ? (
        <CardMedia
          component="img"
          height="200"
          image={props.blogCard?.BlogCardImg?.imageSrc}
          alt={props.blogCard?.BlogCardImg?.imageAlt}
          sx={{ objectFit: objectFitMethod, backgroundColor: "#eeeeee" }}
        />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.blogCard?.BlogTitle}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          maxHeight={"5.8em"}
        >
          {props.blogCard?.BlogCardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            handleClickLearnMore();
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
