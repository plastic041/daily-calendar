import type { ReactNode } from "react";
import { SWRConfig } from "swr";

type ProvidersProps = {
  children: ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
