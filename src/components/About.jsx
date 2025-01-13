
const About = () => {
    return (
        <section data-aos="fade-up" data-aos-duration="1000" id="about" className="w-full h-screen flex items-center justify-center">
            <div className="w-full sm:w-3/4 lg:w-2/3 md:w-full flex flex-col items-start text-left px-8 py-12">
            <h1 className="text-2xl font-extrabold mb-6 text-orange-500">/about_me</h1>
            
            <div className="w-full mb-6">
                <p className="text-lg text-black leading-relaxed">
                Hello World! I’m <span className="font-semibold text-orange-500">Nur-hamin Pendatun Mustapha (npm)</span>, a fresh graduate with a Bachelor’s degree in Information Technology from the Philippines.
                </p>
                <p className="text-lg text-black leading-relaxed mt-4">
                I have a strong interest in web development, software engineering, and exploring new technologies. I’m passionate about building efficient and user-friendly applications that solve real-world problems.
                </p>
            </div>
            
            <div className="w-full mb-6">
                <pre className="text-xs text-white bg-gray-900 p-4 rounded-md font-mono">
                {`
                    {
                        "socials": {
                            "Twitter": "https://twitter.com/npmdev",
                            "GitHub": "https://github.com/npmxdev",
                            "LinkedIn": "https://linkedin.com/in/npmdev",
                            "Instagram": "https://instagram.com/npmdev"
                        }
                    }
                `}
                </pre>
            </div>
        
            <p className="mt-2 text-sm text-gray-500 italic">
                “Code is like humor. When you have to explain it, it’s bad.” – Cory House
            </p>
            </div>
        </section>
    );
  };

  
  export default About;