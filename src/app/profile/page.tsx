"use client"
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
    const { data, status } = useSession();
    return (
        <div>
            <h1>Profile</h1>
            {
                data ?
                    <>
                        <h2>Id: {data.user.id}</h2>
                        <h2>name: {data.user.name}</h2>
                        <h2>role: {data.user.role}</h2>
                    </>
                    :
                    <p>{status}</p>
            }
        </div>
    );
}