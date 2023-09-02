import ApplicationLogo from '@/components/ApplicationLogo';
import NavLink from '@/components/NavLink';
import { PageProps } from '@/types';
import { router, usePage } from '@inertiajs/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { IconChevronDown } from '@tabler/icons-react';

const Navbar = () => {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="px-4 py-2 border-b border-border/60 sm:py-3 sm:px-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <ApplicationLogo className="w-auto h-8 mr-4 fill-primary" />
                    <NavLink
                        href={route('home')}
                        active={route().current('home')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center">
                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-between gap-x-4 focus:outline-none">
                                {auth.user.name}
                                <IconChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-6 w-72">
                                <DropdownMenuLabel>
                                    Manage account
                                </DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() =>
                                        router.get(route('dashboard'))
                                    }
                                >
                                    Dashboard
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() =>
                                        router.get(route('profile.edit'))
                                    }
                                >
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => router.post(route('logout'))}
                                >
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex gap-x-2">
                            <NavLink href={route('login')}>Login</NavLink>
                            <NavLink href={route('register')}>Register</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
