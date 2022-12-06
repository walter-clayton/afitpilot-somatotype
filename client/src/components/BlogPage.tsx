import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import BlogArticlePage from "./BlogArticlePage";
import BlogCard from "./BlogCard";
import {
  getAllBlogContents,
  IBlogCardImage,
  IBlogImage,
  IBlogTextWithImage,
} from "./BlogContent";

const createBlogCard = (
  BlogTitle: string,
  BlogDate: string,
  BlogCardDescription: string,
  BlogCardImg: IBlogCardImage,
  BlogTexts: string[],
  BlogImages: IBlogImage[],
  BlogTextsWithImages: IBlogTextWithImage[],
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
  BlogLayout?: string[];
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
          blogContent.layout!
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
