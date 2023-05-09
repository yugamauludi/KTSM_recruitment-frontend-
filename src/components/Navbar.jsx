import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const buttonLogout = () => {    
    localStorage.clear()
    navigate('/login')
}
  return (
    /* Navbar */
    <nav className="container flex justify-around py-6 mx-auto bg-white header sticky sticky top-0 z-[10]">
      <div className="flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png?20220802235851" className="w-12" />
        <h3 className="text-2xl font-medium text-green-800 pl-6">AdobePDF User Side</h3>
      </div>
      {/* <!-- left header section --> */}
      <div className="items-center hidden space-x-8 lg:flex">
        <Link to="/" href=''>PDF</Link>
      </div>
      {/* <!-- right header section --> */}
      <div className="flex items-center space-x-2">
      <div onClick={buttonLogout} className="flex gap-x-4 cursor-pointer pb-2 items-center ml-2 mb-2 group">
        <button className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
          Logout
        </button>
      </div>
      </div>
    </nav>
    /* end of navbar */
  )
}