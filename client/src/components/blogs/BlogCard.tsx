import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IBlogCardInfos } from "./BlogPage";

interface IBlogCard {
  index?: number;
  blogCard?: IBlogCardInfos;
}

const BlogCard: FC<IBlogCard> = (props) => {
  let navigate = useNavigate();

  const handleClickLearnMore = () => {
    navigate(`/Blog/${props.index}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {props.blogCard?.BlogCardImg?.imageSrc != null && (
        <CardMedia
          component="img"
          height="200"
          width="100%"
          image={props.blogCard.BlogCardImg.imageSrc}
          alt={props.blogCard.BlogCardImg.imageAlt}
          sx={{
            objectFit: props.blogCard.BlogCardImg.imageFitMethod || "contain",
            backgroundColor: "#eeeeee",
          }}
        />
      )}
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
          <div
            dangerouslySetInnerHTML={{
              __html: props.blogCard?.BlogCardDescription || "",
            }}
          />
          {/* <div>{props.blogCard?.BlogText || ""}</div> */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
