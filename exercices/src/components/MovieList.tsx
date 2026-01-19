import Movie, { type Movie as MovieType } from './Movie'

type MovieListProps = {
  movies: MovieType[]
}

function MovieList({ movies }: MovieListProps) {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
