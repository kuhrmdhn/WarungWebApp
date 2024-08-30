"use client"
import { userRouter } from '@/lib/database/userRouter'
import { userManageStore } from '@/lib/store/userManageStore'
import { User } from '@/types/userInterface'
import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export default function UserList() {
    const { allUser } = userManageStore()
    const { getAllUser, deleteUser } = userRouter
    useEffect(() => {
        getAllUser()
    }, [getAllUser])

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center w-full h-fit">
            <table className="w-3/4 text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((user: User, index: number) => (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {user.username}
                                </th>
                                <td className="px-6 py-4">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4 flex gap-3">
                                    <Button size="sm" colorScheme="red" onClick={() => deleteUser(user.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
