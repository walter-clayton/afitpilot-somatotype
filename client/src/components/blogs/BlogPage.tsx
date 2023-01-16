import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import BlogArticlePage from "./BlogArticlePage";
import BlogCard from "./BlogCard";
import { getAllBlogContents } from "./BlogContent/BlogContent";
import CounterShare from "../shares/CounterShare";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
  IBlogCardImage,
  IBlogContentElement,
  IBlogImage,
  IBlogTextWithImage,
} from "./BlogContent/BlogInterfaces";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  borderRadius: "40px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  backgroundColor: "#c8c8c861",
  "&:hover": {
    backgroundColor: "#c8c8c861",
  },
}));

const createBlogCard = (
  BlogTitle: string,
  BlogDate: string,
  BlogCardDescription: string,
  BlogCardImg: IBlogCardImage,
  BlogContent: IBlogContentElement[]
) => {
  return {
    BlogTitle,
    BlogDate,
    BlogCardDescription,
    BlogCardImg,
    BlogContent,
  };
};

export interface IBlogCardInfos {
  BlogTitle?: string;
  BlogDate?: string;
  BlogCardDescription?: string;
  BlogCardImg?: IBlogCardImage;
  BlogContent?: IBlogContentElement[];
}

const BlogPage = () => {
  const xxs = useMediaQuery("(max-width:420px)");
  const xxxs = useMediaQuery("(max-width:320px)");
  const large = useMediaQuery("(min-width:1200px)");
  const [blogCards, setBlogCards] = useState<IBlogCardInfos[]>([]);
  const [resultblogCards, setResultBlogCards] = useState<IBlogCardInfos[]>([]);
  const [noResultsFound, setNoResultsFound] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("");

  const blogArticlesPerPage: number = 6;
  const [page, setPage] = useState(0);

  const isInAllBlogContent = (
    contentArray: IBlogContentElement[],
    searchInput: string
  ) => {
    let tempArray: string[] = [];
    contentArray.forEach((content) => {
      if (
        content.text !== "" &&
        content.text !== null &&
        content.text !== undefined
      ) {
        tempArray.push(content.text);
      }
      if (content.image !== null && content.image !== undefined) {
        if (
          content.image.imageAlt !== "" &&
          content.image.imageAlt !== null &&
          content.image.imageAlt !== undefined
        ) {
          tempArray.push(content.image.imageAlt!);
        }
        if (
          content.image.imageCaption !== "" &&
          content.image.imageCaption !== null &&
          content.image.imageCaption !== undefined
        ) {
          tempArray.push(content.image.imageCaption!);
        }
      }
      if (
        content.textWithImage !== null &&
        content.textWithImage !== undefined
      ) {
        if (
          content.textWithImage.text !== "" &&
          content.textWithImage.text !== null &&
          content.textWithImage.text !== undefined
        ) {
          tempArray.push(content.textWithImage.text);
        }
        if (
          content.textWithImage.imageAlt !== "" &&
          content.textWithImage.imageAlt !== null &&
          content.textWithImage.imageAlt !== undefined
        ) {
          tempArray.push(content.textWithImage.imageAlt);
        }
      }
      if (
        content.callToActionButton !== null &&
        content.callToActionButton !== undefined
      ) {
        if (
          content.callToActionButton.buttonText !== "" &&
          content.callToActionButton.buttonText !== null &&
          content.callToActionButton.buttonText !== undefined
        ) {
          tempArray.push(content.callToActionButton.buttonText);
        }
      }
    });

    let hasBeenFound: boolean = false;

    tempArray.forEach((blogContentElement) => {
      if (
        blogContentElement.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        hasBeenFound = true;
      }
    });

    return hasBeenFound;
  };

  const checkForResults = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(event.currentTarget.value);
    if (
      event.currentTarget.value === "" ||
      event.currentTarget.value === null ||
      event.currentTarget.value === undefined
    ) {
      setNoResultsFound(false);
      setResultBlogCards([]);
    } else {
      const searchValue = event.currentTarget.value;

      const resultArray = blogCards.filter(
        (blogcard) =>
          blogcard.BlogCardDescription?.toLowerCase().includes(
            searchValue.toLowerCase()
          ) ||
          blogcard.BlogTitle?.toLowerCase().includes(
            searchValue.toLowerCase()
          ) ||
          blogcard.BlogCardImg?.imageAlt
            ?.toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          isInAllBlogContent(blogcard.BlogContent!, searchValue)
      );
      setPage(0);
      if (resultArray.length > 0) {
        setNoResultsFound(false);
      } else {
        setNoResultsFound(true);
      }

      setResultBlogCards(resultArray);
    }
  };

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
          blogContent.content!
        ),
      ]);
    });
  }, []);

  return (
    <>
      <Grid container px={4} justifyContent="center" alignItems={"center"}>
        <Grid item xs={12} sm={8} paddingTop={4} key={"search"} marginX={1}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                checkForResults(e);
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              fullWidth
            />
          </Search>
        </Grid>
        {!noResultsFound &&
          (resultblogCards.length > 0
            ? resultblogCards
                .slice(
                  page * blogArticlesPerPage,
                  page * blogArticlesPerPage + blogArticlesPerPage
                )
                .map((resultBlogCard, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    paddingTop={4}
                    key={index}
                  >
                    <Grid
                      container
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <BlogCard
                        index={page * blogArticlesPerPage + index}
                        blogCard={resultBlogCard}
                      />
                    </Grid>
                  </Grid>
                ))
            : blogCards
                .slice(
                  page * blogArticlesPerPage,
                  page * blogArticlesPerPage + blogArticlesPerPage
                )
                .map((blogCard, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    paddingTop={4}
                    key={index}
                  >
                    <Grid
                      container
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <BlogCard
                        index={page * blogArticlesPerPage + index}
                        blogCard={blogCard}
                      />
                    </Grid>
                  </Grid>
                )))}
        {!noResultsFound && (
          <Grid
            item
            xs={12}
            paddingTop={4}
            key={"pagination"}
            justifySelf={"center"}
          >
            <Stack alignItems="center">
              <Pagination
                page={page + 1}
                count={
                  resultblogCards.length > 0
                    ? Math.ceil(resultblogCards.length / blogArticlesPerPage)
                    : Math.ceil(blogCards.length / blogArticlesPerPage)
                }
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
        )}
        {noResultsFound && (
          <Grid
            item
            sx={{
              flexGrow: 1,
              alignItems: "center",
              margin: "20px 0",
            }}
            xs={12}
            md={9}
            lg={7}
            width={"100%"}
          >
            <Typography variant="h5" gutterBottom m={3} textAlign="center">
              {`No results found with '${searchValue}'`}
            </Typography>
          </Grid>
        )}
      </Grid>
      <CounterShare />
    </>
  );
};

export default BlogPage;
