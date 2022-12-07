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
import { getAllBlogContents, IBlogContent } from "./BlogContent";
import { IBlogCardInfos } from "./BlogPage";

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
    let textCount = 0;
    let imageCount = 0;
    let textWithImageCount = 0;
    let buttonCount = 0;

    blogCardInfo?.layout?.forEach((layoutElement) => {
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
      if (layoutElement === "button") {
        arrayTemp.push(getBlogCTAButton(buttonCount, layoutElementCount));
        buttonCount++;
        layoutElementCount++;
      }
    });

    setFinalLayout(arrayTemp);
  }, [blogCardInfo]);

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
            {blogCardInfo?.texts![index]}
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
            {blogCardInfo?.images![index] &&
              blogCardInfo?.images![index].imageSrc && (
                <CardMedia
                  component="img"
                  image={blogCardInfo?.images![index].imageSrc}
                  alt={""}
                />
              )}
            {blogCardInfo?.images![index] &&
              blogCardInfo?.images![index].imageHasCaption && (
                <Typography variant="caption">
                  {blogCardInfo?.images![index].imageCaption}
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
              image={blogCardInfo?.textsWithImages![index].image}
              alt={""}
              sx={{
                marginLeft:
                  blogCardInfo?.textsWithImages![index].imagePosition! ===
                  "right"
                    ? xxs
                      ? "0"
                      : "20px"
                    : "0",
                marginRight:
                  blogCardInfo?.textsWithImages![index].imagePosition! ===
                  "left"
                    ? xxs
                      ? "0"
                      : "20px"
                    : "0",
                marginTop: "0",
                marginBottom: xxs ? "0" : "20px",
                float: xxs
                  ? "none"
                  : blogCardInfo?.textsWithImages![index].imagePosition!,
                width: xxs ? "100%" : "50%",
              }}
            />
            {blogCardInfo?.textsWithImages![index].text}
          </Typography>
        </Grid>
      </Grid>
    );
    return blogTextWithImage;
  };

  const getBlogCTAButton = (index: number, layoutIndex: number) => {
    const blogCTABtn = (
      <Grid
        item
        my={3}
        xs={12}
        md={8}
        alignSelf={blogCardInfo?.callToActionButtons![index].buttonPosition}
        key={layoutIndex}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          {blogCardInfo?.callToActionButtons![index].isExternalLink ? (
            <Button
              variant={blogCardInfo?.callToActionButtons![index].buttonStyle}
              color={blogCardInfo?.callToActionButtons![index].buttonColor}
              href={blogCardInfo?.callToActionButtons![index].buttonLink!}
              target="_blank"
            >
              {blogCardInfo?.callToActionButtons![index].buttonText}
            </Button>
          ) : (
            <Button
              variant={blogCardInfo?.callToActionButtons![index].buttonStyle}
              color={blogCardInfo?.callToActionButtons![index].buttonColor}
              onClick={() => {
                navigate(blogCardInfo?.callToActionButtons![index].buttonLink!);
                window.scrollTo(0, 0);
              }}
            >
              {blogCardInfo?.callToActionButtons![index].buttonText}
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

      <Grid item m={3} xs={12} md={8} lg={6} alignSelf={"center"}>
        <Button
          type="submit"
          variant="contained"
          size="large"
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
