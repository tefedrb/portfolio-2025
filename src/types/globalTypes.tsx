export interface UnknownObject {
  [key: string]: unknown;
}

export interface TaskbarAreaItemInterface {
  name: string;
  icon: string;
  onClick: () => void;
}

export interface OpenFileInterface {
  name: string;
  link: string;
  content: JSX.Element;
  icon: string;
}