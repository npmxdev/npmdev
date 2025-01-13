const Sidebar = () => {
    return (
      <section
        data-aos="fade-right"
        data-aos-duration="2000"
        className="w-full sm:w-1/3 h-screen fixed top-0 left-0 flex-col justify-center items-center sm:p-4 p-2 lg:flex hidden"
      >
        <h1 className="font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 inline-block bg-clip-text text-transparent mb-3 text-3xl">
            &lt;npmdev/&gt;
        </h1>
        <ul className="ml-4 text-base list-none flex flex-col space-y-2 font-bold">
          <li>
            <a
              href="#home"
              className="relative hover:text-orange-500 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative hover:text-orange-500 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative hover:text-orange-500 group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className="relative hover:text-orange-500 group"
            >
              Certifications
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative hover:text-orange-500 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#hire"
              className="relative hover:text-orange-500 group"
            >
              Hire
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Sidebar;
  