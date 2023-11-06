 "use client";
 import { Separator } from "@/components/ui/separator";
 import { useForm } from "react-hook-form";

 import { CreateTodoInput, CreateTodoMutation, Todo } from "@/app/API";
 import { GraphQLQuery } from "@aws-amplify/api";
 import { createTodo } from "@/app/graphql/mutations";

 import { API } from "aws-amplify";

 import * as z from "zod";
 import { zodResolver } from "@hookform/resolvers/zod";

 import { Button } from "@/components/ui/button";
 import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
 } from "@/components/ui/form";
 import { Input } from "@/components/ui/input";
 // useRouter
 import { useRouter } from "next/navigation";

 const formSchema = z.object({
   description: z.string().min(10, {
     message: "Description must be at least 10 characters.",
   }),
 });

 export default function NewTodoPage() {
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       description: "",
     },
   });

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
     const input: CreateTodoInput = { ...values, done: false };
     await API.graphql<GraphQLQuery<CreateTodoMutation>>({
       query: createTodo,
       variables: { input },
     });

     router.push("/todo", { scroll: false });
   };
   //   const router = useRouter();
   return (
     <>
       <div className="hidden space-y-6 p-10 pb-16 md:block">
         <div className="space-y-0.5">
           <h2 className="text-2xl font-bold tracking-tight">Create Todo</h2>
           <p className="text-muted-foreground">Manage your tasks.</p>
         </div>
         <Separator className="my-6" />

         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
             <FormField
               control={form.control}
               name="description"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Description</FormLabel>
                   <FormControl>
                     <Input placeholder="Your description" {...field} />
                   </FormControl>
                   <FormDescription>This is your description.</FormDescription>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <Button type="submit">Submit</Button>
           </form>
         </Form>
       </div>
     </>
   );
 }
