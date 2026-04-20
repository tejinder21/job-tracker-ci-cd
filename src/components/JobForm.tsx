"use client";

import { useState } from "react";

type JobFormProps = {
  onAdd: (company: string, position: string) => void;
};

export default function JobForm({ onAdd }: JobFormProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!company.trim() || !position.trim()) return;

    onAdd(company, position);

    setCompany("");
    setPosition("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        name="company"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <input
        name="position"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
