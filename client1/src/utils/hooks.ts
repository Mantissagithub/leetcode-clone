// src/utils/hooks.ts

import { SessionProvider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 * Creates query client instance
 */
export const queryClient = new QueryClient();

/**
 * Creates session provider
 * @param session Current session
 */
export const SessionProviderWrapper = ({ session, children }: { session: any }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

/**
 * Creates query client provider
 * @param queryClientInstance Instance of query client
 * @param children Children element
 */
export const QueryClientProviderWrapper = ({
  queryClientInstance,
  children,
}: {
  queryClientInstance: QueryClient;
  children: any;
}) => {
  return <QueryClientProvider client={queryClientInstance}>{children}</QueryClientProvider>;
};

/**
 * Combines session provider and query client provider
 * @param session Current session
 * @param children Children element
 */
export const useProviders = ({ session, children }: { session: any; children: any }) => {
  return (
    <QueryClientProviderWrapper queryClientInstance={queryClient}>
      <SessionProviderWrapper session={session}>{children}</SessionProviderWrapper>
    </QueryClientProviderWrapper>
  );
}