"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function UserEditPage() {
    const searchParams = useSearchParams()
    const userId = searchParams.get("userId")
    return (
        <div>
            <h1>Edit User, user id : {userId}</h1>
        </div>
    )
}
