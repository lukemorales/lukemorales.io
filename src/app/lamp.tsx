import type * as React from 'react';

import { LampAnimation } from './lamp-animation';

export const Lamp: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-[#0a0c13]">
    <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ">
      <LampAnimation />
    </div>

    <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
      {children}
    </div>
  </div>
);
