import { Link, useParams } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'

function DestinationListPage({ continents }) {
  const { continent: continentName, country: countryName } = useParams()
  const continent = continents.find(
    (continent) => continent.name === continentName
  )
  const country = continent.countries.find(
    (country) => country.name === countryName
  )

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="mb-6 text-4xl">
        Top Destinations in {country.name} for your next holiday
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {country.destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/${continent.name}/${country.name}/${destination.name}`}
            className="block w-full"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-56"
              />
              <div className="flex justify-around px-6 py-4 text-center bg-gray-500">
                <h2 className="mb-2 text-2xl font-bold">{destination.name}</h2>
                <div className="flex items-center ">
                  <BsFillStarFill className="text-yellow-500" />
                  <p className="ml-2">{destination.ratings}</p>
                </div>
                {/* <p className="mt-2">{destination.description}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DestinationListPage
