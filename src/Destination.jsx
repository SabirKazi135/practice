import popularDestinations from './data/popularDestinations';
import DestinationCard from './components/DestinationCard';
function Destination() {
  return (
    <div className="mx-auto max-w-md px-8 py-8 sm:max-w-xl lg:max-w-6xl lg:px-12">
      <h2 className="text-xl text-gray-900">Popular destinations</h2>
      <p className="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {popularDestinations.map((destination) => (
          <DestinationCard destination={destination} key={destination.city} />
        ))}
      </div>
    </div>
  );
}

export default Destination;
