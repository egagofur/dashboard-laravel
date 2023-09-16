import ApplicationLogo from '@/components/ApplicationLogo';
import NavLink from '@/components/NavLink';
import { Button } from '@/components/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { ThemeToggle } from '@/components/themeToggle';
import { ICommandMenuProps, PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { IconChevronDown, IconCommand, IconSearch } from '@tabler/icons-react';
import { CommandMenu } from './commandMenu';

const Navbar = ({ open, setOpen }: ICommandMenuProps) => {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <CommandMenu openCommandMenu={open} setOpenCommandMenu={setOpen} />
            <nav className="px-4 lg:block hidden py-2 border-b border-border/60 sm:py-3 sm:px-6">
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
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setOpen(true)}
                            className="rounded-lg ring-1 ring-muted-foreground px-4 py-2 focus:outline-none flex items-center gap-x-4 text-muted-foreground hover:text-foreground"
                        >
                            <IconSearch className="w-4 h-4 stroke-[1.5]" />
                            <span>Search...</span>
                            <span className="flex items-center">
                                <IconCommand className="w-4 h-4 stroke-[1.5]" />{' '}
                                K
                            </span>
                        </button>
                        <ThemeToggle />
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
                                        onClick={() =>
                                            router.post(route('logout'))
                                        }
                                    >
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex gap-x-2">
                                <Button
                                    className="rounded-full"
                                    variant="secondary"
                                    asChild
                                >
                                    <Link href={route('login')}>Login</Link>
                                </Button>
                                <Button className="rounded-full" asChild>
                                    <Link href={route('register')}>
                                        Register
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
