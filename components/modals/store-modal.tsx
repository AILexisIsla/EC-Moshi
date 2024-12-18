"use client";

import { Modal } from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal title="crear una tienda Moshi" 
  description="Crea una tienda Moshi para adminstrar tus productos y categorias"
  isOpen={storeModal.isOpen}
  onClose={storeModal.onClose}>

    crear form de tienda
  </Modal>
    );
};
