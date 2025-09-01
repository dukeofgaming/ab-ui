"use client"; // TODO: Remove this

import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

import { FieldDefinition } from "./DataManager";

export interface DataFormProps<T> {
  readonly form       : Partial<T>;
  readonly fields     : readonly FieldDefinition<T>[];
  readonly editingId  : number | string | null;
  readonly error      : string;
  readonly onChange   : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onSubmit   : (e: React.FormEvent) => void;
  readonly onCancel   : () => void;
}


export function DataForm<T>({
  form,
  fields,
  editingId,
  error,
  onChange,
  onSubmit,
  onCancel,
}: DataFormProps<T>) {

  return (

    <form
      className={[
        "bg-surface",
        "border",
        "border-outline",
        "flex",
        "flex-col",
        "gap-5",
        "rounded-2xl",
        "shadow-lg",
        "p-8",
        "w-full",
      ].join(" ")}
      onSubmit={onSubmit}
    >
      <h2
        className={[
          "drop-shadow",
          "font-bold",
          "mb-3",
          "text-2xl",
          "text-accent",
          "tracking-tight",
        ].join(" ")}
      >
        {editingId ? "Edit" : "Add"}
      </h2>

      {fields.map((field) => (

        <label
          key={String(field.name)}
          className={[
            "flex",
            "flex-col",
            "gap-1",
            "text-content",
          ].join(" ")}
        >
          {field.label}

          <Input
            mode={
              field.type === "textarea" ? "multiline" : 
              field.type === "number"   ? "number"    : 
              undefined
            }
            name={String(field.name)}
            onChange={onChange}
            placeholder={field.placeholder}
            required={field.required}
            rows={field.type === "textarea" ? 3 : undefined}
            value={String(form[field.name] ?? "")}
          />

        </label>
      ))}

      {
        error && <div 
          className={[
            "text-destructive",
            "font-medium",
          ].join(" ")}
        >
          {error}
        </div>
      }

      <div 
        className={[
          "flex",
          "gap-2",
          "mt-2",
        ].join(" ")}
      >
        <Button 
          type="submit" 
          variant="action"
        >
          {editingId ? "Save" : "Add"}
        </Button>
        
        <Button 
          type="button" 
          onClick={onCancel} 
          variant="neutral"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
