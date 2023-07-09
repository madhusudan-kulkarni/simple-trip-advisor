import { useParams } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'

function DestinationDetailPage({ continents }) {
  const {
    continent: continentName,
    country: countryName,
    destination: destinationName,
  } = useParams()
  const continent = continents.find(
    (continent) => continent.name === continentName
  )
  const country = continent.countries.find(
    (country) => country.name === countryName
  )
  const destination = country.destinations.find(
    (destination) => destination.name === destinationName
  )

  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="mb-6 text-4xl">{destination.name}</h1>
      <div className="flex flex-col w-full max-w-4xl lg:flex-row">
        <div className="w-auto overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="object-cover w-full h-56"
          />
        </div>
        <div className="px-6 py-4 lg:w-1/2">
          <div className="mb-6 text-xl font-semibold">
            <p>
              Description:
              <span className="block ml-6 text-lg font-normal">
                {destination.description}
              </span>
            </p>
          </div>
          <div className="flex items-center mb-4">
            <p className="mr-2 text-xl">
              <span>Ratings:</span> {destination.ratings}
            </p>
            <BsFillStarFill className="text-yellow-500" />
          </div>
          <p className="mb-4 text-lg">
            Reviews: <span className="font-normal">{destination.reviews}</span>
          </p>
          <p className="mb-4 text-lg">
            Location:{' '}
            <span className="font-normal">{destination.location}</span>
          </p>
          <p className="mb-4 text-lg">
            Opening Hours:{' '}
            <span className="font-normal">{destination.openingHours}</span>
          </p>
          <p className="mb-4 text-lg">
            Ticket Price:{' '}
            <span className="font-normal">{destination.ticketPrice}</span>
          </p>
          <a
            href={destination.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetailPage
