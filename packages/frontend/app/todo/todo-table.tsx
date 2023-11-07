"use client";

import { Todo } from "@/app/API";

import { TrashIcon } from "@radix-ui/react-icons";

import { ColumnDef } from "@tanstack/react-table";

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
      header: ({ table }) => <div className="w-[0px]">Done</div>,
      cell: ({ row }) => (
        <>
          <Checkbox
            checked={row.original.done!}
            onCheckedChange={(value) => onCheckedChange(row, value)}
            aria-label="Select row"
          />
        </>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="w-[60em]">{row.original.description}</div>
      ),
    },
    {
      accessorKey: "delete",
      header: "Delete",
      cell: ({ row }) => (
        <>
          <Button
            variant="destructive"
            onClick={() => onClickDelete(row.original.id)}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
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
      />
    </>
  );
}
