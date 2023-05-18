// HeroImageContext.tsx
import { createContext, useState, useContext } from 'react';

interface ContextProps {
  heroVisible: boolean;
  setHeroVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroImageContext = createContext<ContextProps>({
  heroVisible: false,
  setHeroVisible: () => {}
});

export function useHeroImageContext() {
  return useContext(HeroImageContext);
}

export function HeroImageProvider({ children }: { children: React.ReactNode }) {
  const [heroVisible, setHeroVisible] = useState(false);

  return (
    <HeroImageContext.Provider value={{ heroVisible, setHeroVisible }}>
      {children}
    </HeroImageContext.Provider>
  );
}
