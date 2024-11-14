const SellCarPage = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Sell Your Car</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <label className="block mb-2 font-semibold">Car Model</label>
        <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter car model" />
        
        <label className="block mb-2 font-semibold">Price</label>
        <input type="number" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter price" />
        
        <label className="block mb-2 font-semibold">Year</label>
        <input type="number" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter manufacturing year" />
        
        <label className="block mb-2 font-semibold">Description</label>
        <textarea className="w-full p-2 border rounded-lg mb-4" rows="4" placeholder="Enter car description"></textarea>
        
        <button className="w-full bg-blue-600 text-white p-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default SellCarPage;
