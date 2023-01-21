export const initialState = {
  id: 0,
  duration: '',
  subject: '',
  idb: '',
  responsible: '',
}

export const IDB = [
  {
    value: 'I',
    label: 'Information',
  },
  {
    value: 'D',
    label: 'Diskussion',
  },
  {
    value: 'B',
    label: 'Beslut',
  },
]

export const duration = [
  {
    value: 5,
    label: '5min',
  },
  {
    value: 10,
    label: '10min',
  },
  {
    value: 15,
    label: '15min',
  },
  {
    value: 20,
    label: '20min',
  },
  {
    value: 25,
    label: '25min',
  },
  {
    value: 30,
    label: '30min',
  },
  {
    value: 45,
    label: '45min',
  },
  {
    value: 60,
    label: '1h',
  },
  {
    value: 90,
    label: '1.5h',
  },
  {
    value: 120,
    label: '2h',
  },
]
