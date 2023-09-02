import Container from '@/components/container';
import AppLayout from '@/layouts/AppLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const Dashboard = () => {
    return (
        <>
            <Head title="dashboard" />
            <Container>
                <div className="py-12">Dashboard</div>
            </Container>
        </>
    );
};

export default Dashboard;

Dashboard.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
