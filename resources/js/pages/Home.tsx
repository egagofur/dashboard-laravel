import Container from '@/components/container';
import AppLayout from '@/layouts/AppLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <Container>
                <div className="py-12">Home</div>
            </Container>
        </>
    );
};

export default Home;

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
