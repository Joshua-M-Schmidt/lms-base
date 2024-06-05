"use server"

import { getPayloadHMR } from "@payloadcms/next/utilities"
import config from "@payload-config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login({ email, password }) {
  const payload = await getPayloadHMR({ config })

  try {

    const user = await payload.login({
      collection: "persons",
      data: {
        email,
        password
      }
    })

    cookies().set({
      name: 'payload-token',
      value: user.token,
      httpOnly: true,
      path: '/',
    })
  } catch (error) {
    console.log(error)
    return null
  }

  redirect('/app/courses')
}