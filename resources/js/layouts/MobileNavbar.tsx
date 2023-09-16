import ApplicationLogo from '@/components/ApplicationLogo';
import { Button } from '@/components/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Icon } from '@/components/icon';
import { Separator } from '@/components/separator';
import { ICommandMenuProps, PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';

const MobileNavbar = ({ open, setOpen }: ICommandMenuProps) => {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="lg:hidden px-4 py-2 block">
            <div className="flex items-center justify-between">
                <Link href={route('home')}>
                    <ApplicationLogo className="w-auto h-8 mr-4 fill-primary" />
                </Link>
                <div className="flex items-center gap-x-4">
                    <button
                        className="focus:outline-none"
                        onClick={() => setOpen(true)}
                    >
                        <Icon name="IconSearch" />
                    </button>
                    <Separator className="h-8" orientation="vertical" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="grid place-content-center w-8 h-8 focus:border border-transparent">
                                <Icon name="IconMenuDeep" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem asChild>
                                <Link href={route('home')}>Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={''}>About</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={''}>Article</Link>
                            </DropdownMenuItem>

                            {auth.user ? (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={route('dashboard')}>
                                            Dashboard
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('profile.edit')}>
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            router.post(route('logout'))
                                        }
                                    >
                                        Log Out
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={route('login')}>
                                            Log in
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('login')}>
                                            Register
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbar;
