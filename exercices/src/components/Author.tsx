export type Author = {
  id: number
  name: string
  birthDate: string
}

type AuthorProps = {
  author: Author
}

function Author({ author }: AuthorProps) {
  const birthDate = new Date(author.birthDate)

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold text-gray-800">{author.name}</h3>
      <p className="text-gray-600">Né(e) le {author.birthDate}</p>
      {birthDate.getFullYear() < 1925 && <p className="mt-2 text-sm text-yellow-600 font-medium">Plus de 100 ans</p>}
    </div>
  )
}

export default Author
