import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { client } from './openapi/requests/services.gen.ts';
import { routeTree } from './routeTree.gen.ts';
import { AudioPlayerContextProvider } from './contexts/AudioPlayerContext';

client.setConfig({
  baseUrl: 'http://localhost:8000',
});

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AudioPlayerContextProvider>
        <RouterProvider router={router} />
      </AudioPlayerContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
