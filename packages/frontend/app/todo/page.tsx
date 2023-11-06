"use client";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Todo, ListTodosQuery } from "@/app/API";
import { listTodos } from "@/app/graphql/queries";

import { GraphQLQuery } from "@aws-amplify/api";

import { API } from "aws-amplify";

export default function ListTodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const allTodos = await API.graphql<GraphQLQuery<ListTodosQuery>>({
      query: listTodos,
    });
    setTodos(allTodos.data?.listTodos?.items as Todo[]);
  };

  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Todos</h2>
          <p className="text-muted-foreground">Manage your tasks.</p>
        </div>
        <Separator className="my-6" />
        <Button asChild>
          <Link href="/todo/new">New</Link>
        </Button>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Description</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo: Todo) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">
                    {todo.description}
                  </TableCell>
                  <TableCell className="text-right">{todo.done}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
