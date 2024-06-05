'use client'

import { Provider, atom } from 'jotai'

// example atom
// export const cartAtom = atom()

export const Providers = ({ children }) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}