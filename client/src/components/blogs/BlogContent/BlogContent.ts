import { IBlogContent } from "./BlogInterfaces";
import axios from "axios";

const fetchWordPressImage = async (imageId: number) => {
  try {
    const response = await fetch(
      `https://testing-123-com.preview-domain.com/wp-json/wp/v2/media/${imageId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch WordPress image");
    }

    const data = await response.json();
    const imageUrl = data.source_url;

    return imageUrl;
  } catch (error) {
    console.error("Error fetching WordPress image:", error);
    return null;
  }
};

export async function getAllBlogContents(): Promise<IBlogContent[]> {
  try {
    const response = await axios.get(
      "https://testing-123-com.preview-domain.com/wp-json/wp/v2/posts"
    );

    const allBlogContent: IBlogContent[] = await Promise.all(
      response.data.map(async (blog: any) => {
        const imageId = blog.featured_media;

        const dynamicImageSrc = imageId
          ? await fetchWordPressImage(imageId)
          : "https://testing-123-com.preview-domain.com/wp-content/uploads/2024/01/logo.png";

        return {
          id: blog.id,
          title: blog.title.rendered,
          date: new Date(blog.date).toLocaleDateString("en-GB"),
          cardDescription: blog.excerpt.rendered,
          cardImage: {
            imageSrc: dynamicImageSrc,
            imageAlt: blog.title.rendered,
            imageFitMethod: "contain",
          },
          content: [
            {
              text: blog.content.rendered,
            },
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
            {
              image: {
                imageSrc: dynamicImageSrc,
                imageAlt: blog.title.rendered,
                // other image properties...
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
