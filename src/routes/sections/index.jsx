import { lazy } from 'react';
import { useRoutes } from 'react-router';

import { MainLayout } from 'src/components/layouts/main';

const HomePage = lazy(() => import('src/pages/app'));

// -----------------------------------------

const Layout = ({ children }) => <MainLayout>{children}</MainLayout>;

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
  ]);
}
