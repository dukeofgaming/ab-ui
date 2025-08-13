"use client"; // TODO: Remove this

import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

import { FieldDefinition } from "./DataManager";

export interface DataFormProps<T> {
  readonly form: Partial<T>;
  readonly fields: readonly FieldDefinition<T>[];
  readonly editingId: number | string | null;
  readonly error: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly onSubmit: (e: React.FormEvent) => void;
  readonly onCancel: () => void;
}


export function DataForm<T>({
  form,
  fields,
  editingId,
  error,
  onChange,
  onSubmit,
  onCancel 
}: DataFormProps<T>) {

  return (
    
    <form
      className={[
        "flex",
        "flex-col",
        "gap-5",
        "w-full",
        "max-w-xs",
        "bg-[var(--global-color-bg)]",
        "shadow-lg",
        "rounded-2xl",
        "p-8",
        "border",
        "border-[var(--global-color-border)]",
      ].join(" ")}
      onSubmit={onSubmit}
    >
      <h2 
        className={[
          "text-2xl",
          "font-bold",
          "mb-3",
          "text-[var(--global-color-accent)]",
          "tracking-tight",
          "drop-shadow",
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
            "text-[var(--global-color-text)]",
          ].join(" ")}
        >
          {field.label}

          <Input
            name={String(field.name)}
            value={String(form[field.name] ?? "")}
            onChange={onChange}
            required={field.required}
            placeholder={field.placeholder}
            mode={field.type === "textarea" ? "multiline" : field.type === "number" ? "number" : undefined}
            rows={field.type === "textarea" ? 3 : undefined}
          />
          
        </label>
      ))}
      {error && <div className={["text-red-600", "font-medium"].join(" ")}>{error}</div>}
      <div className={["flex", "gap-2", "mt-2"].join(" ")}>
        <Button type="submit" variant="primary">
          {editingId ? "Save" : "Add"}
        </Button>
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </div>
    </form>
  );
}
