import React, { lazy, Suspense } from 'react';

const LazyThemeSwitcher = lazy(() => import('./ThemeSwitcher'));

const ThemeSwitcher = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThemeSwitcher {...props} />
  </Suspense>
);

export default ThemeSwitcher;
