export type Movie = {
  id: number
  title: string
  releaseYear: number
  rating: number
}

type MovieProps = {
  movie: Movie
}

function Movie({ movie }: MovieProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
      <p className="text-gray-600">Sortie en {movie.releaseYear}</p>
      <p className="text-gray-600">
        Note: {movie.rating}/10
        {'⭐'.repeat(Math.floor(movie.rating))}
      </p>
      {movie.rating >= 8 && <p className="mt-2 text-sm text-green-600 font-medium">⭐ Recommandé !</p>}
      {movie.rating < 5 && <p className="mt-2 text-sm text-red-600 font-medium">👎 À éviter</p>}
    </div>
  )
}

export default Movie
