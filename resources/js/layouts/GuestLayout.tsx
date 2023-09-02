import ApplicationLogo from '@/components/ApplicationLogo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function GuestLayout({
    title,
    children,
}: PropsWithChildren<{
    title: string;
    children?: ReactNode;
}>) {
    return (
        <>
            <Head title={title} />
            <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                    </Link>
                </div>

                <Card className="w-full mt-6 sm:max-w-md">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </>
    );
}
