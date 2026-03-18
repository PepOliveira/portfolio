export default function Hero() {

    return (
  
  <section className="mb-16 animate-fadeIn">
  
  <h1 className="text-5xl font-bold mb-4">
  
  Hi, I'm Pedro Oliveira
  
  </h1>
  
  
  <p className="text-gray-400 text-lg mb-6 max-w-xl">
  
  Fullstack Developer specialized in modern web applications,
  focused on performance, scalability and clean architecture.
  
  </p>
  
  
  <div className="flex gap-4">
  
  <a
  href="/cv.pdf"
  className="
  px-6 py-3
  bg-blue-600
  hover:bg-blue-700
  rounded-lg
  transition
  "
  >
  
  Download CV
  
  </a>
  
  
  <a
  href="https://github.com"
  className="
  px-6 py-3
  border border-gray-700
  hover:border-gray-500
  rounded-lg
  transition
  "
  >
  
  GitHub
  
  </a>
  
  </div>
  
  
  </section>
  
    )
  
  }