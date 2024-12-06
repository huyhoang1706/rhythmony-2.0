"use client";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import StoreProvider from "@/store/store-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <StoreProvider>{children}</StoreProvider>
    </ApolloWrapper>
  );
}
