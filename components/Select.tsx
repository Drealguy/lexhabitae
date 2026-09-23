"use client";

import { useEffect, useId, useRef, useState } from "react";

type SelectProps = {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

// Styled listbox that replaces the native <select>. A hidden required input
// keeps native form validation working.
export default function Select({ id, label, placeholder, options, value, onChange, required }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const openList = () => {
    setActive(Math.max(options.indexOf(value), 0));
    setOpen(true);
  };

  const choose = (option: string) => {
    onChange(option);
    setOpen(false);
    button.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(options[active]);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={root} className="relative">
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase text-brand/60">
        {label}
      </label>
      <button
        ref={button}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className="flex w-full items-center justify-between gap-4 border-b border-brand/20 py-3 text-left text-base transition-colors focus:border-brand focus:outline-none"
      >
        <span className={value ? "text-brand" : "text-brand/40"}>{value || placeholder}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-brand transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Invisible input so the browser's "required" check still covers this field */}
      <input
        tabIndex={-1}
        aria-hidden="true"
        required={required}
        value={value}
        onChange={() => {}}
        onFocus={() => button.current?.focus()}
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full opacity-0"
      />

      <ul
        id={listId}
        role="listbox"
        aria-labelledby={id}
        className={`absolute inset-x-0 top-full z-20 mt-2 origin-top border border-brand/10 bg-white py-2 shadow-[0_24px_48px_-12px_rgba(7,16,31,0.18)] transition-all duration-200 ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        {options.map((option, i) => {
          const selected = option === value;
          return (
            <li
              key={option}
              role="option"
              aria-selected={selected}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(option)}
              className={`flex cursor-pointer items-center justify-between px-4 py-3 text-base transition-colors ${
                i === active ? "bg-brand/[0.04] text-brand" : "text-brand/70"
              }`}
            >
              {option}
              {selected && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
