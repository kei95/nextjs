export interface ContentProps
  extends ContentDescriptionProps,
    ContentImageProps {}

export interface ContentDescriptionProps {
  title: string;
  description: string;
  stacks: string;
  isGithubEnabled?: boolean;
  githubLink?: string;
  appLink: string;
  isLeft?: boolean;
}

export interface ContentImageProps {
  src: string;
  isLeft?: boolean;
  appLink: string;
}
