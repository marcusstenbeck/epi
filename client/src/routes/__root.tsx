import { AudioPlayerBar } from '@/components/AudioPlayerBar';
import { Navigation } from '@/components/Navigation';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  }
);

function RootComponent() {
  return (
    <>
      <main className="p-16">
        <Navigation />
        <Outlet />
      </main>
      <AudioPlayerBar />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="top-left" />
    </>
  );
}
