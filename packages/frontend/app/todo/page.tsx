"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  ListTodosQuery,
  Todo,
  UpdateTodoMutation,
  DeleteTodoMutation,
} from "@/app/API";
import { listTodos } from "@/app/graphql/queries";
import { updateTodo, deleteTodo } from "@/app/graphql/mutations";

import { GraphQLQuery } from "@aws-amplify/api";

import { API } from "aws-amplify";

import { NewTodo } from "@/app/todo/new-todo";
import { TodoTable } from "@/app/todo/todo-table";

export default function ListTodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const [open, setOpen] = React.useState(false);

  const fetchTodos = async () => {
    const allTodos = await API.graphql<GraphQLQuery<ListTodosQuery>>({
      query: listTodos,
    });
    setTodos(allTodos.data?.listTodos?.items as Todo[]);
  };

  const deleteItem = async (id: string) => {
    await API.graphql<GraphQLQuery<UpdateTodoMutation>>({
      query: deleteTodo,
      variables: {
        input: {
          id,
        },
      },
    });

    fetchTodos();
  };

  const toggleItem = async ({ id, done }: Todo, value: boolean) => {
    await API.graphql<GraphQLQuery<UpdateTodoMutation>>({
      query: updateTodo,
      variables: {
        input: {
          id,
          done: value,
        },
      },
    });

    fetchTodos();
  };

  const onSaveCallback = () => {
    setOpen(false);
    fetchTodos();
  };

  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Todos</h2>
          <p className="text-muted-foreground">Manage your tasks.</p>
        </div>
        <Separator className="my-6" />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>New</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create Todo Form</SheetTitle>
            </SheetHeader>
            <NewTodo onSaveCallback={onSaveCallback} />
          </SheetContent>
        </Sheet>
        <TodoTable
          todos={todos}
          toggleItem={toggleItem}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
}
