"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomSelect({
  id,
  name,
  options,
  defaultValue,
}: {
  id?: string;
  name?: string;
  options: string[];
  defaultValue?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        className="h-11 w-full rounded-[7px] border border-[#242b2d] bg-[#0b0f11] px-4 text-left text-[14px] text-[#8f999f] outline-none transition focus:border-[#26ceb5] flex items-center justify-between"
      >
        <span className={`${value === "Select" ? "text-[#8f999f]" : "text-white"}`}>{value}</span>
        <svg viewBox="0 0 20 20" className={`h-4 w-4 fill-current text-[#8f999f]`} aria-hidden="true">
          <path d="M5.7 7.6a1 1 0 0 1 1.4.1L10 11l2.9-3.3a1 1 0 0 1 1.5 1.3l-3.7 4.2a1 1 0 0 1-1.5 0L5.6 8.9a1 1 0 0 1 .1-1.3Z" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded border border-[#242b2d] bg-[#0b0f11] py-1"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setValue(opt);
                  setOpen(false);
                }
              }}
              tabIndex={0}
              className={`cursor-pointer px-4 py-2 text-[14px] ${opt === value ? "bg-[#00C19C] text-white" : "text-[#8f999f] hover:bg-[#00C19C] hover:text-white"}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
