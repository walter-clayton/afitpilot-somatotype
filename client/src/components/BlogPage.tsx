import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import BlogArticlePage from "./BlogArticlePage";
import BlogCard from "./BlogCard";
import { getAllBlogContents } from "./BlogContent";

const createBlogCard = (
  BlogTitle: string,
  BlogCardDescription: string,
  BlogCardImgSrc: string,
  BlogCardImgFitMethod: string,
  BlogText: string,
  BlogDate: string
) => {
  return {
    BlogTitle,
    BlogCardDescription,
    BlogCardImgSrc,
    BlogCardImgFitMethod,
    BlogText,
    BlogDate,
  };
};

export interface IBlogCardInfos {
  BlogTitle?: string;
  BlogCardDescription?: string;
  BlogCardImgSrc?: string;
  BlogCardImgFitMethod?: string;
  BlogText?: string;
  BlogDate?: string;
}

interface IBlogPage {
  openBlogArticleModal?: boolean;
  setOpenBlogArticleModal?: (openModal: boolean) => void;
}

const BlogPage: FC<IBlogPage> = (props) => {
  const [blogCards, setBlogCards] = useState<IBlogCardInfos[]>([]);
  const [selectedBlogCard, setSelectedBlogCard] = useState<IBlogCardInfos>();

  useEffect(() => {
    props.setOpenBlogArticleModal!(false);
    setBlogCards([]);

    getAllBlogContents().forEach((blogContent: any) => {
      setBlogCards((blogCards) => [
        ...blogCards,
        createBlogCard(
          blogContent.title,
          blogContent.cardDescription,
          blogContent.cardImgSrc,
          blogContent.cardImgFitMethod,
          blogContent.text,
          blogContent.date
        ),
      ]);
    });
  }, []);

  return (
    <>
      {props.openBlogArticleModal ? (
        <BlogArticlePage
          blogCardInfos={selectedBlogCard}
          setOpenBlogArticleModal={props.setOpenBlogArticleModal}
        />
      ) : (
        <Grid container px={4}>
          {blogCards.map((blogCard, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} paddingTop={4} key={index}>
              <Grid container alignContent={"center"} justifyContent={"center"}>
                <BlogCard
                  blogCard={blogCard}
                  setOpenBlogArticleModal={props.setOpenBlogArticleModal}
                  setSelectedBlogCard={setSelectedBlogCard}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default BlogPage;
