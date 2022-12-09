import React, { lazy, Suspense } from 'react';

const LazyUserCard = lazy(() => import('./UserCard'));

const UserCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserCard {...props} />
  </Suspense>
);

export default UserCard;
