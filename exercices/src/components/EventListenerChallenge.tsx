import { useState } from 'react'

function EventListenerChallenge() {
  const [birds, setBirds] = useState([
    {
      name: 'Pingouin',
      age: 18,
      color: 'Noir',
      isColorDisplayed: true,
    },
    {
      name: 'Manchot',
      age: 15,
      color: 'Blanc',
      isColorDisplayed: false,
    },
    {
      name: 'Autruche',
      age: 8555,
      color: 'Blanc',
      isColorDisplayed: false,
    },
    {
      name: 'Colibri',
      age: 85,
      color: 'Bleu',
      isColorDisplayed: true,
    },
  ])

  const [newBird, setNewBird] = useState({
    name: '',
    age: '',
    color: '',
    isColorDisplayed: true
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBird({
      ...newBird,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const addBird = () => {
    let error = ''

    if (newBird.name.length < 4 || newBird.name.length > 12) {
      error = 'Veuillez entrer un nom entre 4 et 12 caractères'
    }

    const allowedColors = ['bleu', 'noir', 'blanc']
    if (!allowedColors.includes(newBird.color.toLowerCase())) {
      error = 'Veuillez entrer une de ces trois couleurs : bleu, noir, blanc'
    }

    setError(error)
    if (error) return

    setBirds([...birds, {
      name: newBird.name,
      age: parseInt(newBird.age),
      color: newBird.color,
      isColorDisplayed: newBird.isColorDisplayed
    }])
    setNewBird({
      name: '',
      age: '',
      color: '',
      isColorDisplayed: true
    })
  }

  // on peut comparer la reference de l'objet en JS
  const deleteBird = (bird: any) => {
    setBirds(birds.filter(b => b !== bird))
  }

  const updateBirdColor = (bird: any, newColor: string) => {
    setBirds(birds.map((b) => b === bird ? { ...b, color: newColor } : b))
  }

  return (
    <div>
      <ul>
        {birds.map((bird, index) => (
          <li key={index}>
            {bird.name} - {bird.age} ans
            {bird.isColorDisplayed && <span> - {bird.color}</span>}
            <input
              type="text"
              placeholder="Modifier couleur"
              value={bird.color}
              onChange={(e) => updateBirdColor(bird, e.target.value)}
            />
            <button onClick={() => deleteBird(bird)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Ajouter un oiseau</h3>
        {error && <p className="text-red-500">{error}</p>}
        <input
          name="name"
          type="text"
          placeholder="Nom"
          value={newBird.name}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={newBird.age}
          onChange={handleChange}
        />
        <input
          name="color"
          type="text"
          placeholder="Couleur"
          value={newBird.color}
          onChange={handleChange}
        />
        <label>
          <input
            name="isColorDisplayed"
            type="checkbox"
            checked={newBird.isColorDisplayed}
            onChange={handleChange}
          />
          Afficher couleur
        </label>
        <button onClick={addBird}>Ajouter</button>
      </div>
    </div>
  )
}

export default EventListenerChallenge
