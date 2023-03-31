import { useState,Fragment } from 'react'
import { Combobox } from '@headlessui/react'
import {  CheckCircleIcon} from '@heroicons/react/24/outline'


const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

export default function Search() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className='justify-self-center w-3/4 rounded-md '>
    <Combobox  value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      < CheckCircleIcon className=''/>
      
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person}>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
    </div>
  )
}