"use client";

import { useState } from "react";
import { Input } from "@heroui/react";
import { LuSearch } from "react-icons/lu";

export default function EventSearchBar({ onSearch }: { onSearch: (id: string) => void }) {
  const [eventId, setEventId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventId.trim()) return;
    onSearch(eventId);
    setEventId("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 justify-center"
    >
      <Input
        type="text"
        label="Buscar evento por ID"
        placeholder="Ejemplo: EVT-1023"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
        className="w-[250px] h-[60px] text-sm"
      />
    </form>
  );
}
