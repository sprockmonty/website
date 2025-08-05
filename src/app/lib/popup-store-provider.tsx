"use client";

import { useStore } from "zustand";

import { type PopupsStore, createPopupsStore } from "./popup-store";
import { createContext, ReactNode, useContext, useRef } from "react";

type PopupsStoreApi = ReturnType<typeof createPopupsStore>;

const PopupsStoreContext = createContext<PopupsStoreApi | undefined>(undefined);

export default function PopupsStoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const storeRef = useRef<PopupsStoreApi>(null);
  if (storeRef.current === null) {
    storeRef.current = createPopupsStore();
  }
  return (
    <PopupsStoreContext.Provider value={storeRef.current}>
      {children}
    </PopupsStoreContext.Provider>
  );
}

export function usePopupsStore<T>(selector: (store: PopupsStore) => T): T {
  const popupsStoreContext = useContext(PopupsStoreContext);
  if (!PopupsStoreContext) {
    throw new Error(`usePopupsStore must be used within PopupsStoreProvider`);
  }
  return useStore(popupsStoreContext, selector);
}
