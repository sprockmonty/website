import { PopupT } from "@/app/ui/Popup/Popup";
import { createStore } from "zustand";

type PopupsState = {
  popups: { [key: string]: PopupT };
};

type PopupsActions = {
  addPopup: (key: string, popup: PopupT) => void;
  removePopup: (key: string) => void;
};

export type PopupsStore = PopupsState & PopupsActions;

export const createPopupsStore = () => {
  return createStore<PopupsStore>()((set) => ({
    popups: {},
    addPopup: (key: string, popup: PopupT) =>
      set((state) => {
        const popups = state.popups;
        popups[key] = popup;
        return { popups: popups };
      }),
    removePopup: (key: string) =>
      set((state) => {
        const popups = state.popups;
        delete popups[key];
        return { popups: popups };
      }),
  }));
};
