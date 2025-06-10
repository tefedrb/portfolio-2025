import { useContext } from "react";
import { MonitorContextState, MonitorContext } from "./monitorContext";

export const useMonitorContext = () => useContext<MonitorContextState>(MonitorContext);