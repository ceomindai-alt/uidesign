import { LOCATIONS } from "../data/locationsData";

const LocationsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12">Locations</h1>
      {LOCATIONS.map((loc) => (
        <div key={loc.city} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{loc.city}</h2>
          {loc.spots.map((s, i) => (
            <div key={i} className="border p-4 mb-4">
              <h3 className="font-bold">{s.name}</h3>
              <p>{s.address}</p>
              <p>{s.time}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LocationsPage;
