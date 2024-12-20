"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Modal } from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import toast from "react-hot-toast";


const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [ loading, setloading ] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setloading(true);

            const response = await axios.post('/api/stores', values);
            toast.success("Tienda creada correctamente");
            window.location.assign(`/${response.data.id}`);
    } catch (error) {
        toast.error("Error, algo anda mal al crear la tienda");
    } finally {
      setloading(false);
    }
    }

    return (
        <Modal title="crear una tienda Moshi" 
  description="Crea una tienda Moshi para adminstrar tus productos y categorias"
  isOpen={storeModal.isOpen}
  onClose={storeModal.onClose}>
    <div>
    <div className="space-y-4 py-2 pb-4">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input disabled={loading} placeholder="e-commerce" {...field} />
            </FormControl>
            <FormMessage>Este campo es obligatorio</FormMessage>
          </FormItem>
        )}
        ></FormField>

       <div className="pt-6 space-x-2 flex items-center justify-end w-full">
       <Button
       disabled={loading}
       variant="outline"
       onClick={storeModal.onClose}
       >cancelar</Button>
       <Button 
       disabled={loading}
       type="submit"
       >continuar</Button>
       </div>
        
      </form>
     </Form>
    </div>
    </div>
  </Modal>
    );
};
