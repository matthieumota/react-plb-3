import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import NavLinkButton from "../NavLinkButton"
import type { Book } from "../Book"

export default function Book() {
  const { id } = useParams()
  const [book, setBook] = useState<Book>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`)
        setBook(response.data)
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status !== 404) {
          setError("Erreur lors du chargement du livre")
        }
      }

      setLoading(false)
    }

    fetchBook()
  }, [])

  if (loading) {
    return <div className="p-6">Chargement...</div>
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>
  }

  if (!book) {
    return <div className="p-6">Livre non trouvé</div>
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">{book.title}</h1>

      <div className="p-6 bg-white rounded-lg shadow">
        {book.image && (
          <img
            src={book.image}
            alt={`Couverture de ${book.title}`}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-lg text-gray-600 mb-2">Auteur: {book.author}</p>
        <p className="text-sm text-gray-500">Publié en {book.year}</p>

        <NavLinkButton to={`/livre/2`}>
          Livre suivant
        </NavLinkButton>
      </div>
    </>
  )
}
