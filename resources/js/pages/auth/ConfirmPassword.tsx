import { Input } from '@/components/Input';
import InputError from '@/components/InputError';
import { Button } from '@/components/button';
import { Label } from '@/components/label';
import GuestLayout from '@/layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <>
            <div className="mb-4 text-sm text-muted-foreground">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" disabled={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </>
    );
}

ConfirmPassword.layout = (page: React.ReactNode) => (
    <GuestLayout title="Confirm Password">{page}</GuestLayout>
);
