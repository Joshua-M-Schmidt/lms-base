import { redirect } from 'next/navigation'
import React from 'react'
import { getUser } from '../(auth)/utils/getUser'

export default async function layout({ children }) {
    const user = await getUser()

    if (!user) return redirect('/login')

    return (
        <div className=''>
            {children}
        </div>
    )
}
