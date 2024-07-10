'use client';

import React, { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('@/mocks/browser');
        if (!(window as any).msw) {
          await worker.start({
            onUnhandledRequest: 'bypass',
          });
        }
      }
      setIsInitialized(true);
    };

    init();
  }, []);

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
}