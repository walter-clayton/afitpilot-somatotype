import React, { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IBlogCardInfos } from "./BlogPage";

interface IBlogCard {
  index?: number;
  blogCard?: IBlogCardInfos;
}

// ... (other imports)

const BlogCard: FC<IBlogCard> = (props) => {
  const navigate = useNavigate();
  console.log("BloGcard:", props);

  const handleClickLearnMore = (index: number) => {
    navigate(`/Blog/${index}`);
    window.scrollTo(0, 0);
  };

  // Extracting necessary data from blogCard
  const { cardDescription, cardImage, title } = props.blogCard || {};
  const { imageSrc, imageAlt, imageFitMethod } = cardImage || {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      {imageSrc && (
        <CardMedia
          component="img"
          height="200"
          image={imageSrc}
          alt={imageAlt}
          sx={{
            objectFit: imageFitMethod || "cover",
            backgroundColor: "#eeeeee",
          }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          maxHeight={"5.8em"}
        >
          {cardDescription && (
            <p dangerouslySetInnerHTML={{ __html: cardDescription }} />
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            handleClickLearnMore(props.index!);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
