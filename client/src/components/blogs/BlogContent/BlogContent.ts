import axios from "axios";
import { IBlogContent } from "./BlogInterfaces";

// Modified to dynamically determine the base URL for fetching images
const fetchWordPressImage = async (imageId: number, baseUrl: string) => {
  try {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/media/${imageId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch WordPress image");
    }

    const data = await response.json();
    return data.source_url;
  } catch (error) {
    console.error("Error fetching WordPress image:", error);
    // You may need to specify default images for each source if necessary
    return `${baseUrl}/path/to/default/image.png`;
  }
};

const fetchAuthorName = async (
  authorId: number,
  baseUrl: string
): Promise<string> => {
  try {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/users/${authorId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch author details");
    }
    const data = await response.json();
    return data.name; // Assuming 'name' is the field you want
  } catch (error) {
    console.error("Error fetching author details:", error);
    return "Unknown Author"; // Default author name if fetch fails
  }
};

export async function getAllBlogContents(): Promise<IBlogContent[]> {
  const sources = [
    "https://blog.walterclayton.com/wp-json/wp/v2/posts?categories=3",
  ];

  try {
    // Fetch posts from all sources
    const responses = await Promise.all(sources.map((url) => axios.get(url)));
    // Flatten the response data arrays into a single array
    const allPostsData = responses.flatMap((response) => response.data);

    const allBlogContent: IBlogContent[] = await Promise.all(
      allPostsData.map(async (blog: any) => {
        const baseUrl = blog.link.includes("walterclayton")
          ? "https://blog.walterclayton.com"
          : "";
        const imageId = blog.featured_media;
        const dynamicImageSrc = imageId
          ? await fetchWordPressImage(imageId, baseUrl)
          : `${baseUrl}/wp-content/uploads/default-image.png`; // Adjust default image path as necessary
        const authorName = await fetchAuthorName(blog.author, baseUrl);

        return {
          id: blog.id,
          title: blog.title.rendered,
          authorName: authorName,
          date: new Date(blog.date).toLocaleDateString("en-GB"),
          cardDescription: blog.excerpt.rendered,
          cardImage: {
            imageSrc: dynamicImageSrc,
            imageAlt: blog.title.rendered,
            imageFitMethod: "contain",
          },
          content: [
            {
              image: {
                imageSrc: dynamicImageSrc,
                imageAlt: blog.title.rendered,
                // other image properties...
              },
            },
            {
              text: blog.content.rendered,
            },

            //CTA is disable based
            {
              callToActionButton: {
                buttonText: "Button text",
                isExternalLink: false,
                buttonLink: "/",
                buttonPosition: "end",
                buttonColor: "#1976D2",
                buttonStyle: "contained",
              },
            },

            // Add more content objects as needed based on your requirements
          ],
        };
      })
    );

    return allBlogContent;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}
