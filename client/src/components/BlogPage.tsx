import { Grid } from "@mui/material";
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
import CounterShare from './CTA/CounterShare'

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
  const [blogCards, setBlogCards] = useState<IBlogCardInfos[]>([]);

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
        {blogCards.map((blogCard, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} paddingTop={4} key={index}>
            <Grid container alignContent={"center"} justifyContent={"center"}>
              <BlogCard index={index} blogCard={blogCard} />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <CounterShare />
    </>
  );

};

export default BlogPage;
