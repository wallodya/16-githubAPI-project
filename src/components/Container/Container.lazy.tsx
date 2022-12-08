import React, { lazy, Suspense } from 'react';

const LazyContainer = lazy(() => import('./Container'));

const Container = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContainer {...props} />
  </Suspense>
);

export default Container;
