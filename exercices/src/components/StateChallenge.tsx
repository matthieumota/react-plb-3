import { useState } from 'react'

function StateChallenge() {
  const [animals, setAnimals] = useState([
    {
      name: 'Trolilo',
      type: 'troll'
    },
    {
      name: 'Sheep sheep',
      type: 'poisson'
    },
    {
      name: 'Donald Trump',
      type: 'orange'
    }
  ])
  const [newAnimalType, setNewAnimalType] = useState('')
  const [newAnimalName, setNewAnimalName] = useState('')

  const saveAnimal = () => {
    setAnimals([...animals, {
      name: newAnimalName,
      type: newAnimalType
    }])
    setNewAnimalName('')
    setNewAnimalType('')
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Animaux</h2>
      <ul className="space-y-2 mb-6">
        {animals.map((animal, index) => (
          <li key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-medium">{animal.name}</span>
            <span className="text-gray-500 ml-2">({animal.type})</span>
          </li>
        ))}
      </ul>
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={newAnimalType}
            onChange={(e) => setNewAnimalType(e.target.value)}
            placeholder="Type"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={newAnimalName}
            onChange={(e) => setNewAnimalName(e.target.value)}
            placeholder="Nom"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={saveAnimal}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={!newAnimalName || !newAnimalType}
        >
          Ajouter
        </button>
      </div>
    </div>
  )
}

export default StateChallenge
