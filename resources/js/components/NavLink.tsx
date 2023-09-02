import { cn } from '@/lib/utils';
import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({
    active = false,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            className={
                (cn('transition duration-200 hover:text-primary'),
                active ? 'text-primary' : 'text-muted-foreground')
            }
            {...props}
        />
    );
}
