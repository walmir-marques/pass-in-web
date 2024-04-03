import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  const classname = twMerge("py-3 px-4 text-sm text-zinc-300", props.className);
  return <td {...props} className={classname} />;
}
