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
        "bg-surface",
        "flex-1",
        "relative",
        "text-content",
      ].join(" ")}
    >

      {/* Spinner overlay */}
      {loading && (
        <div
          className={[
            "absolute",
            "bg-accent/80",
            "flex",
            "inset-0",
            "items-center",
            "justify-center",
            "rounded-2xl",
            "z-10",
          ].join(" ")}
        >
          <div
            className={[
              "animate-spin",
              "border-4",
              "border-canvas",
              "border-t-transparent",
              "h-12",
              "rounded-full",
              "w-12",
            ].join(" ")}
          />
        </div>
      )}

      {/* Dynamically generate table headings and cells from the first item in items */}
      
      <table
        className={[
          "w-full",
          "rounded-2xl",
          "shadow-lg",
          "overflow-hidden",
          "border-outline",
        ].join(" ")}
      >
        <thead>
          <tr 
            className={[
              "bg-accent",
            ].join(" ")}
          >
            {keys.map((key: keyof T) => (
              <th
                key={String(key)}
                className={[
                  "font-semibold",
                  "p-3",
                  "text-left",
                  "text-canvas",
                ].join(" ")}
              >
                {
                  String(key).charAt(0).toUpperCase() 
                  + String(key).slice(1)
                }
              </th>
            ))}
            {keys.length > 0 && (<th
              className={[
                "p-3",
                "text-left",
                "font-semibold",
                "text-canvas",
              ].join(" ")}
            >
              Actions
            </th>)}
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (

            <tr>
              <td
                colSpan={keys.length + 1}
                className={[
                  "font-medium",
                  "p-6", 
                  "text-accent", 
                  "text-center", 
                ].join(" ")}
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
                  "hover:bg-outline",
                  "transition-colors",
                ].join(" ")}
              >
                {/* Table Rows */}
                {keys.map(
                  (key: keyof T) => {
                    const cellClasses = [
                      "p-3",
                      "border-b",
                      "border-outline",
                    ];

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
                      <td 
                        key={String(key)} 
                        className={cellClasses.join(" ")}
                      >
                        {cellContent}
                      </td>
                    );
                  }
                )}
                
                {/* Table Actions */}
                <td
                  className={[
                    "border-b",
                    "border-outline",
                    "flex",
                    "gap-3",
                    "p-3",
                  ].join(" ")}
                >
                  <Button
                    disabled={deletingIds.includes(getRowId(item))}
                    onClick={() => onEdit(getRowId(item))}
                    type="button"
                    variant="action"
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => onDelete(getRowId(item))}
                    disabled={deletingIds.includes(getRowId(item))}
                    style={{ position: 'relative' }}
                  >
                    {deletingIds.includes(getRowId(item)) ? (
                      <span
                        className={[
                          "absolute",
                          "bg-opacity-60",
                          "flex",
                          "inset-0",
                          "items-center",
                          "justify-center",
                          "rounded-full",
                          "z-10",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "animate-spin",
                            "border-2",
                            "border-canvas",
                            "border-t-transparent",
                            "h-5",
                            "rounded-full",
                            "w-5",
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
