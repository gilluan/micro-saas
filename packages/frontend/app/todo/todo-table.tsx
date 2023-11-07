"use client";

import { Todo } from "@/app/API";

import {
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTable } from "@/components/ui/data-table";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";

export interface TodoTableProps {
  todos: Todo[];
  toggleItem: Function;
  deleteItem: Function;
}

export const buildColumns = (
  onSelect: Function,
  onClickDelete: Function
): ColumnDef<Todo>[] => {
  const onCheckedChange = (row: any, value: any) => {
    row.toggleSelected(!!value);
    onSelect(row.original, value);
  };
  return [
    {
      accessorKey: "done",
      header: "Done",

      cell: ({ row }) => (
        <>
          <Checkbox
            checked={row.getIsSelected()}
            value={row.original.done}
            onCheckedChange={(value) => onCheckedChange(row, value)}
            aria-label="Select row"
          />
        </>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <>{row.original.description}</>,
    },
    {
      accessorKey: "delete",
      header: "Delete",
      cell: ({ row }) => (
        <>
          <Button onClick={() => onClickDelete(row.original.id)}>Delete</Button>
        </>
      ),
    },
  ];
};

export function TodoTable(props: TodoTableProps) {
  return (
    <>
      <DataTable
        data={props.todos}
        columns={buildColumns(props.toggleItem, props.deleteItem)}
        onRowSelection={console.log}
      />
    </>
  );
}
