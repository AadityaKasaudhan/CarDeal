import { Link } from 'react-router-dom';

const CarCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src="/assets/car-7.jpeg" alt="Car" className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-2">
        <h3 className="text-lg font-semibold">Car Model XYZ</h3>
        <p className="text-gray-600">Price: $10,000</p>
        <p className="text-gray-600">Year: 2019</p>
        <Link to="/cars/1" className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
