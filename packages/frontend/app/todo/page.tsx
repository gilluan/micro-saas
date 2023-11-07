"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";

import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ListTodosQuery, Todo, UpdateTodoMutation } from "@/app/API";
import { deleteTodo, updateTodo } from "@/app/graphql/mutations";
import { listTodos } from "@/app/graphql/queries";

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
          <div className="flex">
            <p className="grow text-muted-foreground">Manage your tasks.</p>
            <div className="flex flex-row-reverse">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button>
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    New Task
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Create new todo !</SheetTitle>
                  </SheetHeader>
                  <NewTodo onSaveCallback={onSaveCallback} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        <Separator className="my-6" />

        <TodoTable
          todos={todos}
          toggleItem={toggleItem}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
}
