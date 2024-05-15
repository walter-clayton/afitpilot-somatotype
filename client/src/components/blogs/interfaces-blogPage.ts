export interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  featured_media_src_url?: string;
  author: number;
  link: string;
  content: { rendered: string };
  base: string;
}

export interface FetchResponseData {
  data: WordPressPost[];
  base: string;
}

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
  imagePosition?: "left" | "right" | undefined;
}

export interface IBlogContent {
  id: number;
  title?: string;
  date?: string;
  cardDescription?: string;
  cardImage?: IBlogCardImage;
  content?: IBlogContentElement[];
}

export interface IBlogCardInfos {
  contentArray: IBlogContentElement[];
  BlogTitle?: string;
  BlogDate?: string;
  BlogCardDescription?: string;
  BlogCardImg?: IBlogCardImage;
  BlogContent?: IBlogContentElement[];
  title?: string;
  date?: string;
  id?: number;
  content?: IBlogContent[];
  cardImage: IBlogCardImage;
  cardDescription: string;
}
