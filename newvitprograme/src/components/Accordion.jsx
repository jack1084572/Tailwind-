import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-base-200 my-2">
      <button
        className="w-full text-left p-4 font-semibold bg-base-100 hover:bg-base-300"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
