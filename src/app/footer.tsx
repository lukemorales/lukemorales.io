import { GithubIcon } from 'lucide-react';

import { Inline } from '@components/layout-primitives';

export const Footer = () => (
  <Inline
    asChild
    align="center"
    justify="end"
    width="full"
    gap="8"
    className="mt-auto h-20 border-t-2 border-t-indigo-900/30 bg-indigo-950/20 p-8"
  >
    <footer>
      <a href="http://github.com/lukemorales">
        <GithubIcon />
      </a>
    </footer>
  </Inline>
);
