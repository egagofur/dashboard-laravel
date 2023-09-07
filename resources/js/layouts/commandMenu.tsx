import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/command';
import { Icon } from '@/components/icon';
import { PageProps } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

interface IProps {
    openCommandMenu: boolean;
    setOpenCommandMenu: (openCommandMenu: boolean) => void;
}

export function CommandMenu({ openCommandMenu, setOpenCommandMenu }: IProps) {
    const { auth } = usePage<PageProps>().props;

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setOpenCommandMenu((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const goto = (href: string) => {
        return router.get(
            href,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => setOpenCommandMenu(false),
            }
        );
    };

    return (
        <CommandDialog open={openCommandMenu} onOpenChange={setOpenCommandMenu}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Pages">
                    <CommandItem
                        value="home"
                        onSelect={() => goto(route('home'))}
                    >
                        <Icon name={'IconHome'} />
                        <span>Home</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Account">
                    {auth?.user ? (
                        <>
                            <CommandItem
                                value="dashboard"
                                onSelect={() => goto(route('dashboard'))}
                            >
                                <Icon name="IconDashboard" />
                                <span>Dashboard</span>
                            </CommandItem>
                            <CommandItem
                                value="profile"
                                onSelect={() => goto(route('profile.edit'))}
                            >
                                <Icon name="IconSettings" />
                                <span>Settings</span>
                            </CommandItem>
                            <CommandItem
                                value="logout"
                                onSelect={() =>
                                    router.post(
                                        route('logout'),
                                        {},
                                        {
                                            onSuccess: () =>
                                                setOpenCommandMenu(false),
                                        }
                                    )
                                }
                            >
                                <Icon name="IconLogout" />
                                <span>Log out</span>
                            </CommandItem>
                        </>
                    ) : (
                        <>
                            <CommandItem
                                value="login"
                                onSelect={() => goto(route('login'))}
                            >
                                <Icon name="IconLogin" />
                                <span>Login</span>
                            </CommandItem>
                            <CommandItem
                                value="register"
                                onSelect={() => goto(route('register'))}
                            >
                                <Icon name="IconUserCircle" />
                                <span>Register</span>
                            </CommandItem>
                        </>
                    )}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
