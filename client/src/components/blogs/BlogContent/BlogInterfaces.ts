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
  buttonColor?: string;
  buttonStyle?: "text" | "contained" | "outlined" | undefined;
}

export interface IBlogContentElement {
  text?: string;
  image?: IBlogImage;
  textWithImage?: IBlogTextWithImage;
  callToActionButton?: IBlogCTABtn;
}

export interface IBlogContent {
  id: number;
  title?: string;
  authorName?: string;
  date?: string;
  cardDescription?: string;
  cardImage?: IBlogCardImage;
  content?: IBlogContentElement[];
}

//from blogPage
