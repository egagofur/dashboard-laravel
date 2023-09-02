import React, { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/layouts/GuestLayout';
import InputError from '@/components/InputError';
import { Label } from '@/components/label';
import { Button } from '@/components/button';
import { Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/Input';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        name="name"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        autoFocus
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setData('name', e.target.value)
                        }
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setData('email', e.target.value)
                        }
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setData('password', e.target.value)
                        }
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password_confirmation">
                        Password Confirmation
                    </Label>

                    <Input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="text-sm underline rounded-md text-muted-foreground hover:text-primary hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <Button className="ml-4" disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </>
    );
}

Register.layout = (page: React.ReactNode) => (
    <GuestLayout title="Register">{page}</GuestLayout>
);
