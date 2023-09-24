"use client";

import { Provider } from 'react-redux'
import { reduxStore } from '@/lib/redux'
import config from "@/config/config.json";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const { default_theme } = config.settings;

  return (
    <Provider store={reduxStore}>
      <ThemeProvider
      attribute="class"
      defaultTheme={default_theme}
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
    </Provider>
  );
};

export default Providers;
