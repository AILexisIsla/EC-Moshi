"use client";
// local imports
import { StoreModal } from "@/components/modals/store-modal";
// global imports
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (<>
    <StoreModal />
    </>);
};