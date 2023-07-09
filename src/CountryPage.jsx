import { Link, useParams } from 'react-router-dom'

function CountryPage({ continents }) {
  const { continent: continentName } = useParams()
  const continent = continents.find(
    (continent) => continent.name === continentName
  )

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="mb-6 text-4xl">
        Top Countries in {continent.name} for your next holiday
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {continent.countries.map((country) => (
          <Link
            key={country.id}
            to={`/${continent.name}/${country.name}`}
            className="block w-full"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={country.image}
                alt={country.name}
                className="object-cover w-full h-56"
              />
              <div className="px-6 py-4 bg-gray-500">
                <h2 className="text-2xl font-bold">{country.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CountryPage
