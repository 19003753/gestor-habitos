'use client'

import React, { useRef } from "react"
import { Provider } from "react-redux"
import { AppStore, makeStore } from "../store/store"

export default function StoreProvider({children}:{children: React.ReactNode}){
    const store = useRef<AppStore | null>(null);
        if (!store.current) {
            store.current = makeStore();
        }
    return <Provider store={store.current}>{children}</Provider>;
}