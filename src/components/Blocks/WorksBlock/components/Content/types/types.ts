export interface ContentDetailsProps {
  title: string;
  description: string;
  stacks: string;
  isGithubEnabled?: boolean;
  githubLink?: string;
  iOSLink?: string;
  androidLink?: string;
  appLink?: string;
  isLeft?: boolean;
}

export interface ContentImageProps {
  src: string;
  isLeft?: boolean;
  appLink?: string;
}

export type ContentDescriptionProps = ContentImageProps & ContentDetailsProps;
