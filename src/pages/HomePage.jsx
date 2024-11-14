import React, { useState } from "react";
import CarCard from "../components/CarCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const HomePage = () => {
  const cars = [
    { id: 1, model: "Toyota Corolla", price: 12000, year: 2015, image: "" },
    { id: 2, model: "Honda Civic", price: 15000, year: 2017, image: "" },
    { id: 3, model: "Ford Mustang", price: 25000, year: 2018, image: "" },
  ];

  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const vehicles = [
    {
      name: "Mercedes Benz R3",
      price: "$900/Day",
      imgSrc: "./assets/car-2.jpg",
    },
    {
      name: "Toyota Corolla Cross",
      price: "$1200/Day",
      imgSrc: "./assets/car-6.jpg",
    },
    {
      name: "Tesla Model S Plaid",
      price: "$1700/Day",
      imgSrc: "./assets/car-5.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/bg-light.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative z-10 flex flex-col items-flex-start justify-center h-full text-white"
          style={{ marginLeft: "150px" }} 
        >
          <h2 className="text-3xl font-bold">Get 15% off your rental</h2>
          <p className="mt-4 text-lg">
            Plan your trip now. Treat yourself in USA.
          </p>

          {/* Car Reservation Form */}
          <div className="bg-black bg-opacity-90 p-6 mt-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-center">
              Continue Car Reservation
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm">Select Your Car Type</label>
                <select
                  className="w-full p-2 mt-2 border rounded bg-black text-white" 
                >
                  <option>Select Car</option>
                  <option>Toyota Corolla</option>
                  <option>Honda Civic</option>
                  <option>Ford Mustang</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm">Pick Up</label>
                <input
                  type="text"
                  placeholder="Enter a City or Airport"
                  className="w-full p-2 mt-2 border rounded bg-black text-white" 
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm">Drop Off</label>
                <input
                  type="text"
                  placeholder="Enter a City or Airport"
                  className="w-full p-2 mt-2 border rounded bg-black text-white" 
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                />
              </div>

              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm">Pick Up Date</label>
                  <input
                    type="date"
                    className="w-full p-2 mt-2 border rounded bg-black text-white" 
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm">Drop Off Date</label>
                  <input
                    type="date"
                    className="w-full p-2 mt-2 border rounded bg-black text-white" 
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Cental Features Section */}
      <section className="bg-white py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600">Cental Features</h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
            nemo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-around">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-red-600 text-white rounded-full p-4">
              <i className="fas fa-star text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">First Class Services</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-red-600 text-white rounded-full p-4">
              <i className="fas fa-car text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Road Assistance</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-red-600 text-white rounded-full p-4">
              <i className="fas fa-tag text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Quality at Minimum</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-red-600 text-white rounded-full p-4">
              <i className="fas fa-taxi text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Free Pick-Up & Drop-Off</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Cars Section */}
      <div className="bg-gray-100 py-12">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Find Your Dream Car</h1>
          <p className="mt-4 text-lg">Browse our wide range of used cars or list your car for sale!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-red-600 mb-4">
                Cental About
              </h2>
              <p className="text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                et nisl sapien. Nulla ac massa a lectus facilisis tempor eget
                vitae lectus.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded">
                  <div className="text-red-600 text-4xl mb-4">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="font-bold">Our Vision</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded">
                  <div className="text-red-600 text-4xl mb-4">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3 className="font-bold">Our Mission</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div  style={{ marginTop: "50px"}} >
              <img
                src="/assets/bg.jpg"
                alt="Car keys"
                className="w-full rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">17 Years of Experience</h3>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                nemo expedita aperiam repellendus distinctio eveniet.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Accusamus et deserunt.</li>
                <li>Deleniti temporibus sapiente.</li>
                <li>Adipisci distinctio eveniet.</li>
              </ul>
              <div className="mt-6 flex items-center">
                <img
                  src="./assets/Avatarrrs.png"
                  alt="Founder"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">William Burgess</p>
                  <p className="text-sm text-gray-500">Carivo Founder</p>
                </div>
              </div>
              <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                More About Us
              </button>
            </div>
            <div>
              <img
                src="./assets/hero-banner.jpg"
                alt="Vintage car"
                className="w-full rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex justify-center items-center bg-white text-red-600 rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-smile text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold">829+</h3>
              <p className="mt-2">Happy Clients</p>
            </div>
            <div>
              <div className="flex justify-center items-center bg-white text-red-600 rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-car text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold">56+</h3>
              <p className="mt-2">Number of Cars</p>
            </div>
            <div>
              <div className="flex justify-center items-center bg-white text-red-600 rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-building text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold">127+</h3>
              <p className="mt-2">Car Center</p>
            </div>
            <div>
              <div className="flex justify-center items-center bg-white text-red-600 rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-road text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold">589+</h3>
              <p className="mt-2">Total Kilometers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-8">
            Cental Services
          </h2>
          <p className="text-gray-500 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
            nemo expedita.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <div className="flex justify-center items-center bg-red-600 text-white rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-phone text-3xl"></i>
              </div>
              <h3 className="font-bold">Phone Reservation</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <div className="flex justify-center items-center bg-red-600 text-white rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-tags text-3xl"></i>
              </div>
              <h3 className="font-bold">Special Rates</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <div className="flex justify-center items-center bg-red-600 text-white rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-road text-3xl"></i>
              </div>
              <h3 className="font-bold">One Way Rental</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <div className="flex justify-center items-center bg-red-600 text-white rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-life-ring text-3xl"></i>
              </div>
              <h3 className="font-bold">Life Insurance</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <div className="flex justify-center items-center bg-red-600 text-white rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-city text-3xl"></i>
              </div>
              <h3 className="font-bold">City to City</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-lg">
              <div className="flex justify-center items-center bg-red-600 text-white rounded-full w-16 h-16 mx-auto mb-4">
                <i className="fas fa-taxi text-3xl"></i>
              </div>
              <h3 className="font-bold">Free Rides</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-10">
            Vehicle Categories
          </h2>
          <Slider {...settings}>
            {vehicles.map((vehicle, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={vehicle.imgSrc}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-bold">{vehicle.name}</h3>
                  <p className="text-red-600 font-bold">{vehicle.price}</p>
                  <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Cental Process Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Cental Process</h2>
          <p className="text-gray-500 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            explicabo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Come In Contact", "Choose A Car", "Enjoy Driving"].map(
              (process, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{process}</h3>
                  <p className="text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <span className="block text-4xl font-bold text-red-600">
                    {index + 1}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Cental Blog & News Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-10">
            Cental Blog & News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rental Cars how to check driving fines?",
                date: "30 Dec 2023",
                imgSrc: "/./assets/car-2.jpg",
              },
              {
                title: "Rental cost of sport and other cars",
                date: "21 Dec 2023",
                imgSrc: "./assets/car-6.jpg",
              },
              {
                title: "Document required for car rental",
                date: "27 Dec 2023",
                imgSrc: "./assets/car-5.jpg",
              },
            ].map((blog, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold mb-4">{blog.title}</h3>
                <button className="text-red-600 hover:underline">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent Your Car Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Renting?</h2>
          <p className="mb-8 text-gray-300">
            Don't hesitate and send us a message.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              WhatsApp
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Other sections of your page */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-red-600">
            Customer Support Center
          </h2>
          <p className="mb-8 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita accusantium.
          </p>
          <Swiper
            slidesPerView={4} // Default for desktop
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }} // Timing set to 1 second
            breakpoints={{
              1024: { slidesPerView: 4 }, // Web
              768: { slidesPerView: 3 }, // Tablet
              640: { slidesPerView: 2 }, // Mobile
            }}
          >
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/1.jpeg" alt="Person 1" />
                <h3>MARTIN DOE</h3>
                <p>Software Engineer</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/2.jpeg" alt="Person 2" />
                <h3>JANE SMITH</h3>
                <p>Graphic Designer</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/3.jpeg" alt="Person 3" />
                <h3>ALICE JOHNSON</h3>
                <p>Product Manager</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/4.jpeg" alt="Person 4" />
                <h3>BOB BROWN</h3>
                <p>UX Designer</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/5.jpeg" alt="Person 5" />
                <h3>CHARLIE WHITE</h3>
                <p>Data Analyst</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/6.jpeg" alt="Person 6" />
                <h3>EMMA WATSON</h3>
                <p>Marketing Specialist</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/7.jpeg" alt="Person 7" />
                <h3>DAVID SMITH</h3>
                <p>Content Writer</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="support-card">
                <img src="./assets/test/8.jpeg" alt="Person 8" />
                <h3>SOPHIA BROWN</h3>
                <p>SEO Expert</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* <ClientReviewsSection /> */}

      <section className="py-16 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-red-600">
            Our Clients Reviews
          </h2>
          <p className="mb-8 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <Swiper
            slidesPerView={2} // Default for web and tablets
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              1024: { slidesPerView: 2 }, // Web
              768: { slidesPerView: 2 }, // Tablet
              640: { slidesPerView: 1 }, // Mobile
            }}
          >
            <SwiperSlide>
              <div className="review-card" >
                <img src="./assets/test/9.jpeg" alt="Client 1" style={{marginLeft:"100px"}}/>
                <h3>Person Name 1</h3>
                <p>Profession 1</p>
                <div className="rating-stars">★★★★☆</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/10.jpeg" alt="Client 2" style={{marginLeft:"100px"}}/>
                <h3>Person Name 2</h3>
                <p>Profession 2</p>
                <div className="rating-stars">★★★☆☆</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/11.jpeg" alt="Client 3" style={{marginLeft:"100px"}}/>
                <h3>Person Name 3</h3>
                <p>Profession 3</p>
                <div className="rating-stars">★★★★★</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/5.jpeg" alt="Client 4" style={{marginLeft:"100px"}}/>
                <h3>Person Name 4</h3>
                <p>Profession 4</p>
                <div className="rating-stars">★★★★☆</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/4.jpeg" alt="Client 5" style={{marginLeft:"100px"}} />
                <h3>Person Name 5</h3>
                <p>Profession 5</p>
                <div className="rating-stars">★★★☆☆</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/3.jpeg" alt="Client 6" style={{marginLeft:"100px"}}/>
                <h3>Person Name 6</h3>
                <p>Profession 6</p>
                <div className="rating-stars">★★★★☆</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/2.jpeg" alt="Client 7" style={{marginLeft:"100px"}}/>
                <h3>Person Name 7</h3>
                <p>Profession 7</p>
                <div className="rating-stars">★★★★★</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review-card">
                <img src="./assets/test/1.jpeg" alt="Client 8" style={{marginLeft:"100px"}} />
                <h3>Person Name 8</h3>
                <p>Profession 8</p>
                <div className="rating-stars">★★☆☆☆</div>
                <p>Review content goes here...</p>
                <div className="flex justify-center mt-2">
                  <a href="https://facebook.com" className="mx-2">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="mx-2">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="mx-2">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="mx-2">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
