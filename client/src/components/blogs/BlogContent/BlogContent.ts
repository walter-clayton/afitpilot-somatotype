import { IBlogContent } from "./BlogInterfaces";
import axios from "axios";

export async function getAllBlogContents(): Promise<IBlogContent[]> {
  try {
    const response = await axios.get(
      "https://testing-123-com.preview-domain.com/wp-json/wp/v2/posts"
    );

    const allBlogContent: IBlogContent[] = response.data.map((blog: any) => ({
      id: blog.id,
      title: blog.title.rendered,
      date: blog.date,
      cardDescription: blog.excerpt.rendered,
      cardImage: {
        imageSrc: blog.featured_media ? blog.featured_media.source_url : "",
        imageAlt: blog.title.rendered,
        imageFitMethod: "contain",
      },
      content: [
        {
          text: blog.content.rendered,
        },
        // Add more content objects as needed based on your requirements
      ],
    }));

    return allBlogContent;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}
