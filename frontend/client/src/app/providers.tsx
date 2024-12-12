"use client";

import { ApolloWrapper } from "@/lib/apollo-wrapper";
import StoreProvider from "@/store/store-provider";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ApolloWrapper>
        <StoreProvider>{children}</StoreProvider>
      </ApolloWrapper>
    </SessionProvider>
  );
}
