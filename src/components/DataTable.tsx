"use client";

import { Button } from "./Button";

export interface DataTableProps<T extends Record<string, unknown>> {
  readonly items      : T[];
  readonly loading    : boolean;
  readonly deletingIds: readonly React.Key[];
  readonly onEdit     : (id: React.Key) => void;
  readonly onDelete   : (id: React.Key) => void;
  readonly getRowId   : (item: T) => React.Key;
}

export function DataTable<T extends Record<string, unknown>>({
  items,
  loading,
  deletingIds,
  onEdit,
  onDelete,
  getRowId
}: DataTableProps<T>) {

  const keys: (keyof T)[] = items.length > 0 ? (
    Object.keys(items[0]) as (keyof T)[]
  ) : [];

  return (
    <div
      className={[
        "flex-1",
        "relative",
        "bg-[var(--global-color-bg)]",
        "text-[var(--global-color-text)]",
      ].join(" ")}
    >

      {/* Spinner overlay */}
      {loading && (
        <div
          className={[
            "absolute",
            "inset-0",
            "flex",
            "items-center",
            "justify-center",
            "bg-[var(--global-color-bg)]",
            "bg-opacity-80",
            "z-10",
            "rounded-2xl",
          ].join(" ")}
        >
          <div
            className={[
              "w-12",
              "h-12",
              "border-4",
              "border-[var(--global-color-accent)]",
              "border-t-transparent",
              "rounded-full",
              "animate-spin",
            ].join(" ")}
          />
        </div>
      )}

      {/* Dynamically generate table headings and cells from the first item in items */}
      
      <table
        className={[
          "w-full",
          "bg-[var(--global-color-bg)]",
          "shadow-lg",
          "rounded-2xl",
          "overflow-hidden",
          "border",
          "border-[var(--global-color-border)]",
        ].join(" ")}
      >

        <thead>
          <tr className={["bg-[var(--global-color-border)]"].join(" ")}>
            {keys.map((key: keyof T) => (
              <th
                key={String(key)}
                className={[
                  "p-3",
                  "text-left",
                  "font-semibold",
                  "text-[var(--global-color-accent)]",
                ].join(" ")}
              >
                {String(key).charAt(0).toUpperCase() + String(key).slice(1)}
              </th>
            ))}
            <th
              className={[
                "p-3",
                "text-left",
                "font-semibold",
                "text-[var(--global-color-accent)]",
              ].join(" ")}
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (

            <tr>
              <td
                colSpan={keys.length + 1}
                className={["text-center", "p-6", "text-yellow-700", "font-medium"].join(" ")}
              >
                No items yet.
              </td>
            </tr>

          ) : (

            items.map((item) => (

              <tr
                key={getRowId(item)}
                className={[
                  "relative",
                  "hover:bg-[var(--global-color-border)]",
                  "transition-colors",
                ].join(" ")}
              >
                {/* Table Rows */}
                {keys.map(
                  (key: keyof T) => {
                    const cellClassParts = [
                      "p-3",
                      "border-b",
                      "border-[var(--global-color-border)]",
                    ];

                    if (key === "name") {
                      cellClassParts.push("font-bold", "text-[var(--global-color-accent)]");
                    } else if (key === "description") {
                      cellClassParts.push("text-[var(--global-color-text)]");
                    } else {
                      cellClassParts.push("text-[var(--global-color-text)]");
                    }

                    // Table Cell Content
                    let cellContent: React.ReactNode;

                    if (key === "logoUrl") {
                      cellContent = (
                        <img src={typeof item[key] === "string" ? item[key] : ""} alt={typeof item["name"] === "string" ? item["name"] : ""} width={32} height={32} className="h-8 w-8 object-contain rounded" />
                      );
                    } else if (typeof item[key] === "string" || typeof item[key] === "number") {
                      cellContent = String(item[key]);
                    } else {
                      cellContent = "";
                    }

                    // Table Cells
                    return (
                      <td key={String(key)} className={cellClassParts.join(" ")}>
                        {cellContent}
                      </td>
                    );
                  }
                )}
                
                {/* Table Actions */}
                <td
                  className={[
                    "p-3",
                    "border-b",
                    "border-[var(--global-color-border)]",
                    "flex",
                    "gap-3",
                  ].join(" ")}
                >
                  <Button
                    type="button"
                    variant="action"
                    onClick={() => onEdit(getRowId(item))}
                    disabled={deletingIds.includes(getRowId(item))}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => onDelete(getRowId(item))}
                    disabled={deletingIds.includes(getRowId(item))}
                    style={{ position: 'relative' }}
                  >
                    {deletingIds.includes(getRowId(item)) ? (
                      <span
                        className={[
                          "absolute",
                          "inset-0",
                          "flex",
                          "items-center",
                          "justify-center",
                          "bg-[var(--global-color-bg)]",
                          "bg-opacity-60",
                          "z-10",
                          "rounded-full",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "w-5",
                            "h-5",
                            "border-2",
                            "border-[var(--global-color-accent)]",
                            "border-t-transparent",
                            "rounded-full",
                            "animate-spin",
                          ].join(" ")}
                        />
                      </span>
                    ) : (
                      "Delete"
                    )}
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
