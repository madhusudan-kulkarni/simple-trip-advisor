import { Link } from 'react-router-dom'

function ContinentsPage({ continents }) {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="mb-6 text-4xl">Welcome to Trip Advisor</h1>
      <h2 className="mb-8 text-2xl">Select a continent to view destinations</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {continents.map((continent) => (
          <Link
            key={continent.id}
            to={`/${continent.name}`}
            className="block w-full"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={continent.image}
                alt={continent.name}
                className="object-cover w-full h-56"
              />
              <div className="px-6 py-4 bg-gray-500">
                <h2 className="text-2xl font-bold">{continent.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ContinentsPage
