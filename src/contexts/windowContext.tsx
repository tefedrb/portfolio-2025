import { createContext, useContext } from 'react';
import { OpenFileInterface } from '../types/globalTypes';
import { FileIconInterface } from '../components/window/windowTypes';

export interface WindowContextType {
  allOpenWindows: Record<string, { type: string; data: OpenFileInterface | FileIconInterface[] }>;
  addWindow: (params: { type: string; key: string; data: OpenFileInterface | FileIconInterface[] }) => void;
  closeWindow: (windowName: string) => void;
}

const defaultContext: WindowContextType = {
  allOpenWindows: {},
  addWindow: () => {},
  closeWindow: () => {}
}

export const WindowContext = createContext<WindowContextType>(defaultContext);
export const useWindowContext = () => useContext(WindowContext);
