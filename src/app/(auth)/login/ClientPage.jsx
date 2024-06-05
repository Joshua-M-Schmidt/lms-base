'use client';

import Image from "next/image";
import { useFormStatus } from "react-dom";
import { login } from "../utils/login";

export default function ClientPage() {

  async function onSubmit(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    const result = await login({ email, password })
  }

  function SubmitButton() {
    const { pending } = useFormStatus()
    return (

      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-headBlue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-headBlue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-headBlue-500"
      >
        {pending ? 'Loading...' : 'Login'}
      </button>
    )
  }

  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="w-full flex justify-center">

          <div className="h-16 w-16 relative">
          </div>
        </div>
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={onSubmit} >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-headBlue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-headBlue-500 hover:text-headBlue-400">
                  Password forgotten?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-headBlue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <SubmitButton />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          No Login?{' '}
          <a href="#" className="font-semibold leading-6 text-headBlue-500 hover:text-headBlue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>

  )
}
