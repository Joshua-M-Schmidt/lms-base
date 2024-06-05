'use server'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getUser() {
    const headers = getHeaders()
    const payload = await getPayload({ config: configPromise })
    const { permissions, user } = await payload.auth({ headers })
    return user
}
