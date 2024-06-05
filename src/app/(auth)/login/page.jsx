import React from 'react'
import ClientPage from './ClientPage'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config';

export default async function page() {
    const payload = await getPayloadHMR({ config })
    return (
        <div className='h-[calc(100vh-3rem)]'>
            <ClientPage  />
        </div>
    )
}
