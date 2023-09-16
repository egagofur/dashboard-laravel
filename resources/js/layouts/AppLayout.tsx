import { PropsWithChildren, useState } from 'react';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const AppLayout = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <MobileNavbar open={open} setOpen={setOpen} />
            <Navbar open={open} setOpen={setOpen} />
            {children}
        </div>
    );
};

export default AppLayout;
