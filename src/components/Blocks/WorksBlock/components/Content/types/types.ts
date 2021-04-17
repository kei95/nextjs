export interface ContentDescriptionProps {
  title: string;
  description: string;
  stacks: string;
  isGithubEnabled?: boolean;
  githubLink?: string;
  appLink?: string;
  iOSLink?: string;
  androidLink?: string;
  isLeft?: boolean;
  src?: string;
}

export interface ContentImageProps {
  src: string;
  isLeft?: boolean;
  appLink: string;
}
