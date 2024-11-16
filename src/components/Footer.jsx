const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-[1640px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Best<span className="text-orange-600">Eats</span></h1>
            <p className="mt-2 text-gray-400">© 2023 BestEats. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#about" className="hover:text-orange-600">About</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#privacy" className="hover:text-orange-600">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  