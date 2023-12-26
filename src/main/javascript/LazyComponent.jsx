import React, { lazy, Suspense } from 'react';

const LazyLoadedComponent = lazy(() => import('./VirtualElements'));

const LazyComponent = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadedComponent />
        </Suspense>
    );
};

export default LazyComponent;