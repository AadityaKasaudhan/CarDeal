import CarCard from '../components/CarCard';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const CarListingsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const carData = [
        { id: 1, model: "Toyota Camry", price: 14000, year: 2016, image: "" },
        { id: 2, model: "Nissan Altima", price: 13000, year: 2015, image: "" },
      ];
      setCars(carData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Available Cars for Sale</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarListingsPage;
