import { PropsWithChildren, useState } from 'react';
import Navbar from './Navbar';

const AppLayout = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar open={open} setOpen={setOpen} />
            {children}
        </div>
    );
};

export default AppLayout;
