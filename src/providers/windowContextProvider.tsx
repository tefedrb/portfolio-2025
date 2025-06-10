import { useWindowState } from "../components/hooks/hooks";
import { WindowContext } from "../contexts/windowContext";

export const WindowContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { allOpenWindows, addWindow, closeWindow } = useWindowState();

  return (
    <WindowContext.Provider value={{ allOpenWindows, addWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
}
