"use client";
import { useState } from "react";
import { CustomChakraProvider } from "./CustomChakraProvider";
import { QueryProvider } from "./QueryProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [showDevtools, setShowDevtools] = useState(false);

  return (
    <QueryProvider>
      <CustomChakraProvider>{children}</CustomChakraProvider>
    </QueryProvider>
  );
};
