import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav dir="rtl" className="bg-blue-700 text-white shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* اسم الموقع */}

        <h1 className="text-lg md:text-xl font-bold">

          التغذية والنشاط البدني

        </h1>


        {/* زر القائمة للموبايل */}

        <button

          className="md:hidden text-2xl"

          onClick={() => setMenuOpen(!menuOpen)}

        >

          ☰

        </button>


        {/* القائمة الأساسية للكمبيوتر */}

        <div className="hidden md:flex gap-6 text-lg">

          <Link to="/" className="hover:text-yellow-300">
            الرئيسية
          </Link>

          <Link to="/protein" className="hover:text-yellow-300">
            البروتين
          </Link>

          <Link to="/fat" className="hover:text-yellow-300">
            الدهون
          </Link>

          <Link to="/exercise" className="hover:text-yellow-300">
            النشاط البدني
          </Link>

          <Link to="/tips" className="hover:text-yellow-300">
            نصائح غذائية
          </Link>

          <Link to="/references" className="hover:text-yellow-300">
            المراجع
          </Link>

        </div>

      </div>


      {/* قائمة الموبايل */}

      {menuOpen && (

        <div className="md:hidden bg-blue-600 flex flex-col items-center gap-4 pb-4 text-lg">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            الرئيسية
          </Link>

          <Link to="/protein" onClick={() => setMenuOpen(false)}>
            البروتين
          </Link>

          <Link to="/fat" onClick={() => setMenuOpen(false)}>
            الدهون
          </Link>

          <Link to="/exercise" onClick={() => setMenuOpen(false)}>
            النشاط البدني
          </Link>

          <Link to="/tips" onClick={() => setMenuOpen(false)}>
            نصائح غذائية
          </Link>

          <Link to="/references" onClick={() => setMenuOpen(false)}>
            المراجع
          </Link>

        </div>

      )}

    </nav>

  )
}

export default Navbar