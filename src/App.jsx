
<head>
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</head>
const Sidebar = () => {
  return (
    <section className="w-full sm:w-1/3 h-screen fixed top-0 left-0 flex-col justify-center items-center sm:p-4 p-2 md:flex hidden">
      <h1 className="font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 inline-block bg-clip-text text-transparent mb-3 text-3xl">
        npmdev
      </h1>
      <ul className="ml-4 list-none flex flex-col space-y-2 font-bold">
        <li><a href="#home" className="hover:text-orange-500">Home</a></li>
        <li><a href="#about" className="hover:text-orange-500">About</a></li>
        <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
        <li><a href="#certifications" className="hover:text-orange-500">Certifications</a></li>
        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
        <li><button href="#contact" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 hover:text-white duration-300">Hire</button></li>
      </ul>
    </section>
  );
};

const Home = () => {
  return (
    <section id="home"  data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="w-full h-screen flex items-center justify-center">
      <div className="w-full sm:w-3/4 lg:w-2/3 flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <img
            src="src/assets/npm.jpg"
            alt="Nur-hamin Mustapha"
            className="shadow-md rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0"
          />
          <div className="text-start md:text-center md:ml-4">
            <p className="text-xl text-gray-700 font-semibold">Hi there! I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Nur-hamin Mustapha</h1>
              <p className="text-sm text-start mt-6">Technologies I have worked with:</p>
              <div className="mt-6 flex badges flex-wrap justify-center gap-2">
                <img
                  src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
                  alt="PHP"
                  className="h-4 animate-floating delay-0"
                />
                <img
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  alt="JavaScript"
                  className="h-4 animate-floating delay-50"
                />
                <img
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  alt="React"
                  className="h-4 animate-floating delay-100"
                />
                <img
                  src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                  alt="Python"
                  className="h-4 animate-floating delay-600"
                />
                <img
                  src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
                  alt="C#"
                  className="h-4 animate-floating delay-800"
                />
                <img
                  src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                  alt="Bootstrap"
                  className="h-4 animate-floating delay-1000"
                />
                <img
                  src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="Tailwind CSS"
                  className="h-4 animate-floating delay-1200"
                />
                <img
                  src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white"
                  alt="DaisyUI"
                  className="h-4 animate-floating delay-1400"
                />
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="HTML5"
                  className="h-4 animate-floating delay-1600"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="CSS3"
                  className="h-4 animate-floating delay-1800"
                />
                <img
                  src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white"
                  alt="Material-UI"
                  className="h-4 animate-floating delay-2000"
                />
                <img
                  src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
                  alt="MySQL"
                  className="h-4 animate-floating delay-2200"
                />
                <img
                  src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=white"
                  alt="Photoshop"
                  className="h-4 animate-floating delay-2400"
                />
                <img
                  src="https://img.shields.io/badge/Microsoft%20Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white"
                  alt="Excel"
                  className="h-4 animate-floating delay-2600"
                />
            </div>
          </div>
        </div>

        <div className="mb-6 max-w-3xl">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
            A tech enthusiast who can make websites come to life and occasionally break them (oops!). When I’m not solving bugs or optimizing code, I’m either learning something new or pretending to understand complex algorithms while sipping coffee. If you're looking for someone who codes, laughs, and never misses a deadline, I’m your person!
          </p>
        </div>
        <div className="github-chart mt-4">
          <img src="https://ghchart.rshah.org/nurhaminator" alt="npmdev's Github chart" />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section  data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" id="about" className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Projects Page!</h1>
      <p>This is the default page for your React app.</p>
      <p>Feel free to modify this component as needed.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo at justo vehicula dictum.</p>
      <p>Add more content here to see the scrolling effect...</p>
    </section>
  );
};

const Project = () => {
  return (
    <section id="projects" className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Projects Page!</h1>
      <p>This is the default page for your React app.</p>
      <p>Feel free to modify this component as needed.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo at justo vehicula dictum.</p>
      <p>Add more content here to see the scrolling effect...</p>
    </section>
  );
};

export default function App() {
  return (
    <>
      <div className="fixed inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="selection:text-white selection:bg-orange-500 text-xl">
        <div className="relative h-full w-full flex flex-col sm:flex-row">
          <Sidebar />
          <div className="w-full flex flex-col justify-center pl-52 overflow-hidden">
            <Home />
            <About />
            <Project />
          </div>
        </div>
      </div>
    </>
  );
}



<script>
AOS.init();
</script>