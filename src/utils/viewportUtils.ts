import { UnknownObject } from "../types/globalTypes";

export const getViewportXY = (): [number, number] => {
  let e: Window | HTMLElement | UnknownObject = window;
  let a = "inner";
  if (!("innerHeight" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }
  if (e instanceof Window) {
    return [e[`${a}Width` as keyof Window], e[`${a}Height` as keyof Window]];
  } else {
    return [(e as HTMLElement).clientWidth, (e as HTMLElement).clientHeight];
  }
}