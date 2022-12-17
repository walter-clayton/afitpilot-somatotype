import logoImage from "./image/logo-black.png";
import somatotypeImage from "./image/TestImageSomatotype.png";
import errorImage from "./image/TestImageError.png";
import buttonImage from "./image/TestImageButton.png";
import fullLogoImage from "./image/TestImageLogo.png";

export interface IBlogTextWithImage {
  text?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export interface IBlogImage {
  imageSrc?: string;
  imageAlt?: string;
  imageHasCaption?: boolean;
  imageCaption?: string;
}

export interface IBlogCardImage {
  imageSrc?: string;
  imageAlt?: string;
  imageFitMethod?: string;
}

export interface IBlogCTABtn {
  buttonText?: string;
  isExternalLink?: boolean;
  buttonLink?: string;
  buttonPosition?: string;
  buttonColor?:
    | "inherit"
    | "success"
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "warning"
    | undefined;
  buttonStyle?: "text" | "contained" | "outlined" | undefined;
}

export interface IBlogContent {
  title?: string;
  date?: string;
  cardDescription?: string;
  cardImage?: IBlogCardImage;
  texts?: string[];
  images?: IBlogImage[];
  textsWithImages?: IBlogTextWithImage[];
  callToActionButtons?: IBlogCTABtn[];
  layout?: string[];
}

const BlogArticle1 = {
  title: "Blog Title 1",
  date: "05/12/2022",
  cardDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  cardImage: {
    imageSrc: logoImage,
    imageAlt: "This text explain what the image is",
    imageFitMethod: "contain",
  },
  content: [
    {text: 
      "This is the 1st paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla."
    },
    {callToActionButton: 
      {
        buttonText: "Button text",
        isExternalLink: false,
        buttonLink: "/",
        buttonPosition: "end",
        buttonColor: "success",
        buttonStyle: "contained"
      }
    },
    {image: 
      {
        imageSrc: logoImage,
        imageAlt: "This text explain what the image is 1",
        imageHasCaption: false,
        imageCaption: "",
      }
    },
    {image:
      {
        imageSrc: logoImage,
        imageAlt: "This text explain what the image is 2",
        imageHasCaption: true,
        imageCaption: "This text is the caption of the image",
      }
    },
    {callToActionButton:
      {
        buttonText: "Stripe",
        isExternalLink: true,
        buttonLink: "https://stripe.com/docs/testing",
        buttonPosition: "center",
        buttonColor: "secondary",
        buttonStyle: "outlined",
      }
    },
    {textsWithImage: 
      {
        text: "This is the 1st paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
        image: logoImage,
        imageAlt: "This text explain what the image is 3",
        imagePosition: "left",
      }
    },
    {text:
      "This is the 2nd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    },
    {textsWithImage :{
      text: "This is the 2nd paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: logoImage,
      imageAlt: "This text explain what the image is 4",
      imagePosition: "right",
    }},
    {image:{
      imageSrc: logoImage,
      imageAlt: "This text explain what the image is 5",
      imageHasCaption: true,
      imageCaption: "This text is the caption of the image",
    }},
    {callToActionButton:{
      buttonText: "Stripe",
      isExternalLink: true,
      buttonLink: "https://stripe.com/docs/testing",
      buttonPosition: "start",
      buttonColor: "error",
      buttonStyle: "outlined",
    }},
    {text:
      "This is the 3rd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    }
  ],
};

const BlogArticle2 = {
  title: "Somatotypes are cool",
  date: "01/04/2022",
  cardDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  cardImage: {
    imageSrc: somatotypeImage,
    imageAlt: "This image show a random body illustration",
    imageFitMethod: "contain",
  },
  texts: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  ],
  images: [
    {
      imageSrc: somatotypeImage,
      imageAlt: "A body",
      imageHasCaption: false,
      imageCaption: "",
    },
  ],
  textsWithImages: [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: somatotypeImage,
      imageAlt: "This is the body of a random guy",
      imagePosition: "left",
    },
  ],
  layout: ["textWithImage", "text", "text", "image", "text", "text"],
};

const BlogArticle3 = {
  title: "The issues with console",
  date: "07/10/2555",
  cardDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  cardImage: {
    imageSrc: errorImage,
    imageAlt: "errors in the browser console",
    imageFitMethod: "contain",
  },
  texts: [
    "This is the 1st paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "This is the 2nd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "This is the 3rd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  ],
  images: [
    {
      imageSrc: errorImage,
      imageAlt: "This text explain what the image is 1",
      imageHasCaption: false,
      imageCaption: "",
    },
  ],
  textsWithImages: [
    {
      text: "This is the 1st paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: errorImage,
      imageAlt: "This text explain what the image is 3",
      imagePosition: "left",
    },
    {
      text: "This is the 2nd paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: errorImage,
      imageAlt: "This text explain what the image is 4",
      imagePosition: "right",
    },
  ],
  layout: ["text", "textWithImage", "image", "text", "textWithImage", "text"],
};

const BlogArticle4 = {
  title: "Mui buttons",
  date: "08/03/1998",
  cardDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  cardImage: {
    imageSrc: buttonImage,
    imageAlt: "a button with the style from mui library",
    imageFitMethod: "contain",
  },
  texts: [
    "This is the 1st paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "This is the 2nd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "This is the 3rd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  ],
  images: [
    {
      imageSrc: buttonImage,
      imageAlt: "This text explain what the image is 1",
      imageHasCaption: false,
      imageCaption: "",
    },
    {
      imageSrc: buttonImage,
      imageAlt: "This text explain what the image is 2",
      imageHasCaption: true,
      imageCaption: "A button example",
    },
  ],
  textsWithImages: [
    {
      text: "This is the 1st paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: buttonImage,
      imageAlt: "This text explain what the image is 3",
      imagePosition: "left",
    },
  ],
  layout: ["image", "text", "textWithImage", "text", "image", "text"],
};

const BlogArticle5 = {
  title: "Afitpilot",
  date: "14/11/2022",
  cardDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  cardImage: {
    imageSrc: fullLogoImage,
    imageAlt: "Afitpilot logo full version",
    imageFitMethod: "contain",
  },
  texts: [
    "This is the 1st paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "This is the 2nd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    "This is the 3rd paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
  ],
  images: [
    {
      imageSrc: fullLogoImage,
      imageAlt: "Afitpilot logo full version",
      imageHasCaption: false,
      imageCaption: "",
    },
    {
      imageSrc: fullLogoImage,
      imageAlt: "Afitpilot logo full version",
      imageHasCaption: true,
      imageCaption: "The Afitpilot logo",
    },
  ],
  textsWithImages: [
    {
      text: "This is the 1st paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: fullLogoImage,
      imageAlt: "Afitpilot logo",
      imagePosition: "left",
    },
    {
      text: "This is the 2nd paragraph with an image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      image: fullLogoImage,
      imageAlt: "Afitpilot logo",
      imagePosition: "right",
    },
  ],
  layout: [
    "text",
    "image",
    "textWithImage",
    "text",
    "textWithImage",
    "image",
    "text",
  ],
};

export function getAllBlogContents() {
  const allBlogContent: IBlogContent[] = [
    BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle1,
    // BlogArticle2,
    // BlogArticle3,
    // BlogArticle4,
    // BlogArticle5,
    // BlogArticle5,
  ];

  return allBlogContent;
}
