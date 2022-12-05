import create from 'zustand';
import { persist } from 'zustand/middleware';
import jwt_decode from 'jwt-decode';

const useGlobal = create(
  persist((set, get) => ({
    session: null,
    setSession: (value) => {
      const decoded = jwt_decode(value);
      console.log(decoded);
      set({ session: decoded });
    },
  })),
);

export default useGlobal;
