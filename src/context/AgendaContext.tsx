import { createContext, useState } from "react";
import { AgendaContextType, AgendaContextProviderProps, AgendaItem } from "../@types/agenda";

export const AgendaContext = createContext<AgendaContextType | null>(null);

const AgendaProvider = ({ children }: AgendaContextProviderProps) => {
  const [agenda, setAgenda] = useState<AgendaItem[]>([
    {
      id: 1,
      duration: 10,
      subject: 'Vatten',
      idb: 'I',
      responsible: 'Joel'
    },
    {
      id: 2,
      duration: 15,
      subject: 'Coding',
      idb: 'D',
      responsible: 'Birgit'
    },
  ])

  const addItem = (item: AgendaItem) => {
    const newItem: AgendaItem = {
      id: Math.random(),
      duration: item.duration,
      subject: item.subject,
      idb: item.idb,
      responsible: item.responsible
    }

    setAgenda([...agenda, newItem])
  }

  return (
    <AgendaContext.Provider value={{ agenda, addItem }}>
      {children}
    </AgendaContext.Provider>  
  )
}

export default AgendaProvider