import React from "react";

// types for context
export interface AgendaItem {
  id: number;
  duration: number | string;
  subject: string;
  idb: string;
  responsible: string;
}

export type AgendaContextType = {
  agenda: AgendaItem[],
  addItem: (item: AgendaItem) => void;
  clearList: () => void;
  deleteItem: (id: number) => void;
}

export type AgendaContextProviderProps = {
  children: React.ReactNode
}
