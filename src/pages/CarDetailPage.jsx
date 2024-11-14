import { useParams } from 'react-router-dom';

const CarDetailPage = () => {
  const { id } = useParams();
  
  const car = { model: "Toyota Corolla", price: 12000, year: 2015, description: "A reliable and efficient car.", image: "" }; // Fetch car by ID here

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-4xl mt-12 mb-12">
  <img src={car.image || "/assets/car-6.jpg"} alt={car.model} className="w-full h-64 object-cover rounded-md" />
  <div className="mt-4">
    <h2 className="text-2xl font-bold">{car.model}</h2>
    <p className="text-gray-600">Price: ${car.price}</p>
    <p className="text-gray-600">Year: {car.year}</p>
    <p className="mt-4">{car.description}</p>
  </div>
</div>

  );
};

export default CarDetailPage;
