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

const BlogCard: FC<IBlogCard> = (props) => {
  const navigate = useNavigate();

  const handleClickLearnMore = (index: number) => {
    navigate(`/Blog/${index}`);
    window.scrollTo(0, 0);
  };

  const { cardDescription, cardImage, title, date } = props.blogCard || {};
  const { imageSrc, imageAlt } = cardImage || {};

  return (
    <Card
      sx={{
        maxWidth: "100%",
        mb: "-2px", // Set margin bottom to -2px to eliminate gaps
        mx: "auto",
        width: { xs: "100%", sm: "345px" },
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={imageSrc}
        alt={imageAlt}
        sx={{
          flex: "0 0 auto",
          objectFit: "cover", // Ensure the image covers the entire container
          height: "12rem", // Set a fixed height for the image
        }}
      />
      <CardContent
        sx={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}
      >
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          style={{ fontSize: ".9rem" }}
          component="div"
        >
          {date}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          maxHeight={"5.8em"}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {cardDescription && (
            <span dangerouslySetInnerHTML={{ __html: cardDescription }} />
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleClickLearnMore(props.index!)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
