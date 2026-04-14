import { useEffect, useState } from "react"

function ScrollTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)

  }, [])


  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }


  return (

    visible && (

      <button

        onClick={scrollToTop}

        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-lg transition duration-300 hover:scale-110"

      >

        ↑

      </button>

    )

  )

}

export default ScrollTop