import React, { FC, useEffect, useState } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import BlogCard from "./BlogCard";
import CounterShare from "../shares/CounterShare";
import { IBlogCardInfos, WordPressPost } from "./interfaces-blogPage";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled-component";

const BlogPage: FC = () => {
  const xxs = useMediaQuery("(max-width:420px)");
  const xxxs = useMediaQuery("(max-width:320px)");
  const large = useMediaQuery("(min-width:1200px)");
  const [blogCards, setBlogCards] = useState<IBlogCardInfos[]>([]);
  const [resultBlogCards, setResultBlogCards] = useState<IBlogCardInfos[]>([]);
  const [noResultsFound, setNoResultsFound] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const blogArticlesPerPage: number = 6;
  const [page, setPage] = useState(0);

  const checkForResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.currentTarget.value.trim().toLowerCase();
    setSearchValue(searchInput);

    if (!searchInput) {
      setNoResultsFound(false);
      setResultBlogCards(blogCards);
    } else {
      const resultArray = blogCards.filter((blogCard) => {
        const isInContent = blogCard.contentArray?.some((content) =>
          Object.values(content)
            .map((value) => value?.toString().toLowerCase())
            .join("")
            .includes(searchInput)
        );
        return (
          Object.values(blogCard)
            .map((value) => value?.toString().toLowerCase())
            .join("")
            .includes(searchInput) || isInContent
        );
      });

      setPage(0);
      setNoResultsFound(resultArray.length === 0);
      setResultBlogCards(resultArray);
    }
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) =>
    setPage(value - 1);

  useEffect(() => {
    const fetchWordPressData = async () => {
      try {
        const response = await fetch(
          "https://blog.walterclayton.com/wp-json/wp/v2/posts?categories=3"
        );
        if (!response.ok) throw new Error("Failed to fetch WordPress data");
        const data: WordPressPost[] = await response.json();

        const fetchedBlogContents: IBlogCardInfos[] = await Promise.all(
          data.map(async (post) => {
            const mediaResponse = await fetch(
              `https://blog.walterclayton.com/wp-json/wp/v2/media/${post.featured_media}`
            );
            const mediaData = await mediaResponse.json();
            const imageUrl = mediaData.source_url;

            return {
              id: post.id,
              title: post.title.rendered,
              date: new Date(post.date).toLocaleDateString(),
              cardDescription: post.excerpt.rendered,
              cardImage: {
                imageSrc: imageUrl
                  ? imageUrl
                  : `https://path/to/default/image.png`,
                imageAlt: post.title.rendered,
                imageFitMethod: "contain",
              },
              contentArray: [
                { text: post.title.rendered },
                { text: post.excerpt.rendered },
                // Add more properties as needed
              ],
            };
          })
        );

        setBlogCards(fetchedBlogContents);
        setResultBlogCards(fetchedBlogContents);
      } catch (error) {
        console.error("Error fetching WordPress data:", error);
      }
    };

    fetchWordPressData();
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
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={checkForResults}
              fullWidth
            />
          </Search>
        </Grid>

        {!noResultsFound &&
          resultBlogCards
            .slice(page * blogArticlesPerPage, (page + 1) * blogArticlesPerPage)
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
            ))}

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
                count={Math.ceil(resultBlogCards.length / blogArticlesPerPage)}
                variant="outlined"
                shape="circular"
                onChange={handleChangePage}
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
            xs={12}
            sx={{ flexGrow: 1, alignItems: "center", margin: "20px 0" }}
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
