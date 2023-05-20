'use client';

import { darkTheme } from '@/themes';
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }) {
  return <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>;
}
