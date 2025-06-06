export interface UnknownObject {
  [key: string]: unknown;
}

export interface TaskbarAreaItemInterface {
  name: string;
  icon: string;
  onClick: () => void;
}