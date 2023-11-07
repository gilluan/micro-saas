 "use client";
 import { Separator } from "@/components/ui/separator";
 import { useForm } from "react-hook-form";

 import { CreateTodoInput, CreateTodoMutation } from "@/app/API";
 import { GraphQLQuery } from "@aws-amplify/api";
 import { createTodo } from "@/app/graphql/mutations";

 import { API } from "aws-amplify";

 import * as z from "zod";
 import { zodResolver } from "@hookform/resolvers/zod";

 import { Button } from "@/components/ui/button";

 import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card";
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

 const formSchema = z.object({
   description: z.string().min(5, {
     message: "Description must be at least 5 characters.",
   }),
 });

 export interface NewTodoProps {
   onSaveCallback: Function;
 }

 export function NewTodo(props: NewTodoProps) {
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

     props.onSaveCallback();
   };

   return (
     <>
       <div className="">
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
                   <FormDescription>
                     This is your todo description.
                   </FormDescription>
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
