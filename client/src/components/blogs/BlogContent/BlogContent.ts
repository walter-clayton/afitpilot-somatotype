import { display } from "html2canvas/dist/types/css/property-descriptors/display";
import { IBlogContent } from "./BlogInterfaces";
import axios from "axios";

const fetchWordPressImage = async (imageId: number) => {
  try {
    const response = await fetch(
      `https://blog.afitpilot.com/wp-json/wp/v2/media/${imageId}`
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
      "https://blog.afitpilot.com/wp-json/wp/v2/posts"
    );

    const allBlogContent: IBlogContent[] = await Promise.all(
      response.data.map(async (blog: any) => {
        const imageId = blog.featured_media;

        const dynamicImageSrc = imageId
          ? await fetchWordPressImage(imageId)
          : "https://blog.afitpilot.com/wp-content/uploads/2024/02/logo.png";

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
