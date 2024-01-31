import { IBlogContent } from "./BlogInterfaces";

//IMPORTED IMAGES :

import logoImage from "../../../image/Afitpilot_logo_black.png";
import somatotypeImage from "../../../image/Comparison_avatarsimage/TestImageSomatotype.png";
import errorImage from "../../../image/Comparison_avatarsimage/TestImageError.png";
import buttonImage from "../../../image/Comparison_avatarsimage/TestImageButton.png";
import fullLogoImage from "../../../image/Comparison_avatarsimage/TestImageLogo.png";

//HOW TO CREATE A BLOG ARTICLE :

//1. Create blog article object or ducplicate template one (just below this explanations paragraph)
//2. Change it's properties with your content (you can remove comments if you duplicated the template object)
//3. Add the blog article object to the array of allBlogContent
//    (in the getAllBlogContents function at the end of this script)

// BLOG ARTICLE TEMPLATE :

// const BlogArticle:IBlogContent = {
//   //Title of the blog article
//   title: "Blog Title 1",
//   //Date of the blog article
//   date: "05/12/2022",
//   //Description text displayed on the blog card of the blog article
//   cardDescription:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
//   //Image displayed on the blog card of the blog article
//   cardImage: {
//     //The reference of the image, it needs to be imported in the script (see at top of this script)
//     imageSrc: logoImage,
//     //The alt text of the image
//     imageAlt: "This text explain what the image is",
//     //The object-fit method used for the image. Possible values are : fill, contain, cover, none, scale-down (check object-fit css property : https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
//     imageFitMethod: "contain",
//   },
//   //The content of the blog article.
//   //It's an array of objects in which each object represent an element of the blog article content.
//   //There are 4 possible objects : text, image, textWithImage, callToActionButton.
//   //The order of objects in the content array will be the same displayed order for each elements in the blog article page.
//   //There can be as much objects in the content array as needed.
//   content: [
//      //The text object, it contains a string which is a full paragraph of text.
//     {text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla."
//     },
//      //The callToActionButton object, it contains an object with all it's properties.
//     {callToActionButton:
//       {
//          //The text displayed on the button
//         buttonText: "Button text",
//          //A boolean used to know if the link of the button is leading to an external or internal page of the project.
//          //For example :
//          // "https://www.google.be/" is an external link → it leads to a page outside of the project → true
//          // "/Homepage" is an internal link → it leads to another page of the project → false
//         isExternalLink: false,
//          //The path of the link
//         buttonLink: "/",
//          //The horizontal position of the button. Possible values are : "start" - "center" - "end"
//         buttonPosition: "end",
//          //The color of the button based on hexadecimal code colors.
//         buttonColor: "#ff0000",
//          //The style variant of the button based on mui style button themes.
//          //Possible values are : "text" - "contained" - "outlined"
//         buttonStyle: "contained"
//       }
//     },
//      //The image object, it contains an object with all it's properties.
//     {image:
//       {
//          //The image reference path (it needs to be imported in this script see at top of this script)
//         imageSrc: logoImage,
//          //The alt text of the image
//         imageAlt: "This text explain what the image is 1",
//          //A boolean used to tell if the image have a caption or not
//          //If you want a caption for the image, set it to → true
//          //If you don't want a caption for the image, set it to → false
//         imageHasCaption: false,
//          //The caption text (will be displayed only if imageHasCaption is set to → true)
//         imageCaption: "",
//       }
//     },
//      //The textWithImage object, it contains an object with all it's properties.
//     {textWithImage:
//       {
//          //The text
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
//          //The image path of the image (it needs to be imported in this script see at top of this script)
//         image: logoImage,
//          //The alt text of the image
//         imageAlt: "This text explain what the image is 3",
//          //The image position according to it's text. Possible values are "left" - "right".
//         imagePosition: "left",
//       }
//     },
//   ],
// };

const blogs: IBlogContent[] = [
  {
    id: 1,
    //Title of the blog article
    title: "Blog Title 1",
    //Date of the blog article
    date: "05/12/2022",
    //Description text displayed on the blog card of the blog article
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    //Image displayed on the blog card of the blog article
    cardImage: {
      //The reference of the image, it needs to be imported in the script (see at top of this script)
      imageSrc: logoImage,
      //The alt text of the image
      imageAlt: "This text explain what the image is",
      //The object-fit method used for the image. Possible values are : fill, contain, cover, none, scale-down (check object-fit css property : https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
      imageFitMethod: "contain",
    },
    //The content of the blog article.
    //It's an array of objects in which each object represent an element of the blog article content.
    //There are 4 possible objects : text, image, textWithImage, callToActionButton.
    //The order of objects in the content array will be the same displayed order for each elements in the blog article page.
    //There can be as much objects in the content array as needed.
    content: [
      //The text object, it contains a string which is a full paragraph of text.
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      },
      //The callToActionButton object, it contains an object with all it's properties.
      {
        callToActionButton: {
          //The text displayed on the button
          buttonText: "Button text",
          //A boolean used to know if the link of the button is leading to an external or internal page of the project.
          //For example :
          // "https://www.google.be/" is an external link → it leads to a page outside of the project → true
          // "/Homepage" is an internal link → it leads to another page of the project → false
          isExternalLink: false,
          //The path of the link
          buttonLink: "/",
          //The horizontal position of the button. Possible values are : "start" - "center" - "end"
          buttonPosition: "end",
          //The color of the button based on hexadecimal code colors.
          buttonColor: "#1976D2",
          //The style variant of the button based on mui style button themes.
          //Possible values are : "text" - "contained" - "outlined"
          buttonStyle: "contained",
        },
      },
      //The image object, it contains an object with all it's properties.
      {
        image: {
          //The image reference path (it needs to be imported in this script see at top of this script)
          imageSrc: logoImage,
          //The alt text of the image
          imageAlt: "This text explain what the image is 1",
          //A boolean used to tell if the image have a caption or not
          //If you want a caption for the image, set it to → true
          //If you don't want a caption for the image, set it to → false
          imageHasCaption: false,
          //The caption text (will be displayed only if imageHasCaption is set to → true)
          imageCaption: "",
        },
      },
      //The textWithImage object, it contains an object with all it's properties.
      {
        textWithImage: {
          //The text
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
          //The image path of the image (it needs to be imported in this script see at top of this script)
          image: logoImage,
          //The alt text of the image
          imageAlt: "This text explain what the image is 3",
          //The image position according to it's text. Possible values are "left" - "right".
          imagePosition: "left",
        },
      },
    ],
  },
  {
    id: 2,
    //Title of the blog article
    title: "Blog Title 1",
    //Date of the blog article
    date: "05/12/2022",
    //Description text displayed on the blog card of the blog article
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
    //Image displayed on the blog card of the blog article
    cardImage: {
      //The reference of the image, it needs to be imported in the script (see at top of this script)
      imageSrc: logoImage,
      //The alt text of the image
      imageAlt: "This text explain what the image is",
      //The object-fit method used for the image. Possible values are : fill, contain, cover, none, scale-down (check object-fit css property : https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
      imageFitMethod: "contain",
    },
    //The content of the blog article.
    //It's an array of objects in which each object represent an element of the blog article content.
    //There are 4 possible objects : text, image, textWithImage, callToActionButton.
    //The order of objects in the content array will be the same displayed order for each elements in the blog article page.
    //There can be as much objects in the content array as needed.
    content: [
      //The text object, it contains a string which is a full paragraph of text.
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
      },
      //The callToActionButton object, it contains an object with all it's properties.
      {
        callToActionButton: {
          //The text displayed on the button
          buttonText: "Button text",
          //A boolean used to know if the link of the button is leading to an external or internal page of the project.
          //For example :
          // "https://www.google.be/" is an external link → it leads to a page outside of the project → true
          // "/Homepage" is an internal link → it leads to another page of the project → false
          isExternalLink: false,
          //The path of the link
          buttonLink: "/",
          //The horizontal position of the button. Possible values are : "start" - "center" - "end"
          buttonPosition: "end",
          //The color of the button based on hexadecimal code colors.
          buttonColor: "#1976D2",
          //The style variant of the button based on mui style button themes.
          //Possible values are : "text" - "contained" - "outlined"
          buttonStyle: "contained",
        },
      },
      //The image object, it contains an object with all it's properties.
      {
        image: {
          //The image reference path (it needs to be imported in this script see at top of this script)
          imageSrc: logoImage,
          //The alt text of the image
          imageAlt: "This text explain what the image is 1",
          //A boolean used to tell if the image have a caption or not
          //If you want a caption for the image, set it to → true
          //If you don't want a caption for the image, set it to → false
          imageHasCaption: false,
          //The caption text (will be displayed only if imageHasCaption is set to → true)
          imageCaption: "",
        },
      },
      //The textWithImage object, it contains an object with all it's properties.
      {
        textWithImage: {
          //The text
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra faucibus mollis. Fusce finibus leo non elit faucibus, eget vehicula felis tincidunt. Donec convallis ut erat maximus laoreet. Vivamus maximus aliquam justo eget condimentum. Pellentesque et viverra nulla. Cras magna elit, tempor sit amet sapien vitae, sollicitudin lacinia massa. Nam iaculis venenatis venenatis. In tristique nisl ut sodales fringilla.",
          //The image path of the image (it needs to be imported in this script see at top of this script)
          image: logoImage,
          //The alt text of the image
          imageAlt: "This text explain what the image is 3",
          //The image position according to it's text. Possible values are "left" - "right".
          imagePosition: "left",
        },
      },
    ],
  },
];

// export function getAllBlogContents() {
//   const allBlogContent: IBlogContent[] = blogs;

//   return allBlogContent;
// }
