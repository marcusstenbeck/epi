import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navigation } from '../components/Navigation';
import { cx } from '../utils/cx';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  }
);

const styles = {
  app: cx('p-16'),
};

function RootComponent() {
  return (
    <>
      <main className={styles.app}>
        <Navigation />
        <Outlet />
      </main>
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="top-left" />
    </>
  );
}
