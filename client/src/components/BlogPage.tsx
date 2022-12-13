import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import BlogArticlePage from "./BlogArticlePage";
import BlogCard from "./BlogCard";
import {
  getAllBlogContents,
  IBlogCardImage,
  IBlogCTABtn,
  IBlogImage,
  IBlogTextWithImage,
} from "./BlogContent";
import CounterShare from "./CTA/CounterShare";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const createBlogCard = (
  BlogTitle: string,
  BlogDate: string,
  BlogCardDescription: string,
  BlogCardImg: IBlogCardImage,
  BlogTexts: string[],
  BlogImages: IBlogImage[],
  BlogTextsWithImages: IBlogTextWithImage[],
  BlogCallToActionButton: IBlogCTABtn[],
  BlogLayout: string[]
) => {
  return {
    BlogTitle,
    BlogDate,
    BlogCardDescription,
    BlogCardImg,
    BlogTexts,
    BlogImages,
    BlogTextsWithImages,
    BlogCallToActionButton,
    BlogLayout,
  };
};

export interface IBlogCardInfos {
  BlogTitle?: string;
  BlogDate?: string;
  BlogCardDescription?: string;
  BlogCardImg?: IBlogCardImage;
  BlogTexts?: string[];
  BlogImages?: IBlogImage[];
  BlogTextsWithImages?: IBlogTextWithImage[];
  BlogCallToActionButtons?: IBlogCTABtn[];
  BlogLayout?: string[];
}

const BlogPage = () => {
  const xxs = useMediaQuery("(max-width:420px)");
  const xxxs = useMediaQuery("(max-width:320px)");
  const large = useMediaQuery("(min-width:1200px)");
  const [blogCards, setBlogCards] = useState<IBlogCardInfos[]>([]);

  const blogArticlesPerPage: number = 6;
  const [page, setPage] = useState(0);

  const handleChangePage = (newPage: number) => {
    window.scrollTo(0, 0);
    setPage(newPage - 1);
  };

  useEffect(() => {
    setBlogCards([]);

    getAllBlogContents().forEach((blogContent) => {
      setBlogCards((blogCards) => [
        ...blogCards,
        createBlogCard(
          blogContent.title!,
          blogContent.date!,
          blogContent.cardDescription!,
          blogContent.cardImage!,
          blogContent.texts!,
          blogContent.images!,
          blogContent.textsWithImages!,
          blogContent.callToActionButtons!,
          blogContent.layout!
        ),
      ]);
    });
  }, []);

  return (
    <>
      <Grid container px={4}>
        {blogCards
          .slice(
            page * blogArticlesPerPage,
            page * blogArticlesPerPage + blogArticlesPerPage
          )
          .map((blogCard, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} paddingTop={4} key={index}>
              <Grid container alignContent={"center"} justifyContent={"center"}>
                <BlogCard
                  index={page * blogArticlesPerPage + index}
                  blogCard={blogCard}
                />
              </Grid>
            </Grid>
          ))}
        <Grid
          item
          xs={12}
          paddingTop={4}
          key={"pagination"}
          justifySelf={"center"}
        >
          <Stack alignItems="center">
            <Pagination
              count={Math.ceil(blogCards.length / blogArticlesPerPage)}
              variant="outlined"
              shape="circular"
              onChange={(e, value) => {
                handleChangePage(value);
              }}
              size={xxs ? "small" : large ? "large" : "medium"}
              sx={{
                "& .Mui-selected": { backgroundColor: "#d1d1d1" },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#d1d1d1",
                },
                "& .MuiPaginationItem-root.Mui-selected:hover": {
                  backgroundColor: "#d1d1d1",
                },
                "& .MuiPaginationItem-root": {
                  minWidth: xxxs
                    ? "20px"
                    : xxs
                    ? "26px"
                    : large
                    ? "40px"
                    : "32px",
                  height: xxxs
                    ? "20px"
                    : xxs
                    ? "26px"
                    : large
                    ? "40px"
                    : "32px",
                  fontSize: xxxs ? "70%" : large ? "108%" : "90%",
                },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
      <CounterShare />
    </>
  );
};

export default BlogPage;
