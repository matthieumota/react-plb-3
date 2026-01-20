import Author, { type Author as AuthorType } from './components/Author'
import MovieList from './components/MovieList'
import { type Movie as MovieType } from './components/Movie'
import Counter from './components/Counter'
import StateChallenge from './components/StateChallenge'
import EventListenerChallenge from './components/EventListenerChallenge'

function App() {
  const authors: AuthorType[] = [
    { id: 1, name: 'Victor Hugo', birthDate: '1802-02-26' },
    { id: 2, name: 'Marcel Proust', birthDate: '1871-07-10' },
    { id: 3, name: 'Albert Camus', birthDate: '1913-11-07' },
    { id: 4, name: 'Jean-Paul Sartre', birthDate: '1955-06-21' },
  ]

  const movies: MovieType[] = [
    { id: 1, title: 'Le Parrain', releaseYear: 1972, rating: 9.2 },
    { id: 2, title: 'Avatar', releaseYear: 2009, rating: 7.8 },
    { id: 3, title: 'Matrix', releaseYear: 1999, rating: 8.7 },
    { id: 4, title: 'Titanic', releaseYear: 1997, rating: 4.9 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Auteurs</h2>
        <div className="mb-8">
          {authors.map((author) => (
            <Author key={author.id} author={author} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Films</h2>
        <MovieList movies={movies} />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Compteurs</h2>
        <Counter />
        <Counter initialValue={2} />
        <Counter initialValue={5} maxValue={10} />
        <Counter maxValue={5} />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">State challenge</h2>
        <StateChallenge />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Listener challenge</h2>
        <EventListenerChallenge />
      </div>
    </div>
  )
}

export default App
