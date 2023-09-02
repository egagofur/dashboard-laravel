import { PropsWithChildren } from 'react';
import Navbar from './Navbar';

const AppLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default AppLayout;
