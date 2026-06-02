// src/stores/useCareSessionStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CareSessionState {
  isVerified: boolean;
  mobileNumber: string;

  login: (mobileNumber: string) => void;
  logout: () => void;
}

export const useCareSessionStore = create<CareSessionState>()(
  persist(
    (set) => ({
      isVerified: false,
      mobileNumber: "",

      login: (mobileNumber) =>
        set({
          isVerified: true,
          mobileNumber,
        }),

      logout: () =>
        set({
          isVerified: false,
          mobileNumber: "",
        }),
    }),
    {
      name: "care-session",
    }
  )
);