const ContactPage = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <label className="block mb-2 font-semibold">Name</label>
        <input type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter your name" />
        
        <label className="block mb-2 font-semibold">Email</label>
        <input type="email" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter your email" />
        
        <label className="block mb-2 font-semibold">Message</label>
        <textarea className="w-full p-2 border rounded-lg mb-4" rows="4" placeholder="Enter your message"></textarea>
        
        <button className="w-full bg-blue-600 text-white p-2 rounded-lg">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
