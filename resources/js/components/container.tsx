import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
    return <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">{children}</div>;
};

export default Container;
