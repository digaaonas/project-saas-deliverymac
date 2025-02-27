"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {z} from "zod"

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { isValidCpf } from "../../helpers/cpf";

const formSchema = z.object({
  nome: z.string().trim().min(1, {
    message: "O nome é obrigatório."
  }),
  cpf: z.string().refine((value) => isValidCpf(value), {
    message: "CPF Inválido"
  })
})

type FormSchema = z.infer<typeof formSchema>

const FinishOrderButton = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cpf: ""
    }
  })
  const onSubmit = (data: FormSchema) => {
    console.log({data})
  }
  return ( 
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full rounded-full mb-5">Finalizar Pedido</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Finalizar Pedido</DrawerTitle>
          <DrawerDescription>Insira suas informções abaixo para finalizar seu pedido.</DrawerDescription>
        </DrawerHeader>
        <div className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Nome:</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter>
                <Button type="submit">Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
        
      </DrawerContent>
    </Drawer>
   );
}
 
export default FinishOrderButton;