import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className="flex justify-between items-center text-slate-700 py-2 border-b-2 relative sm:mx-3 lg:mx-0">
      <h1 className="text-3xl uppercase">
        <Link to="/">Nadim</Link>
      </h1>

      <div className="block text-[26px] cursor-pointer" onClick={handleShow}>
        <AiOutlineMenu />
      </div>

      <div
        className={
          show
            ? "text-lg absolute flex flex-col right-0 top-16 bg-white border-2 rounded"
            : "hidden"
        }
      >
        <Link
          to="/"
          className="px-2 py-1 hover:bg-slate-100 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="px-2 py-1 hover:bg-slate-100 transition duration-300"
        >
          Projects
        </Link>
        <Link
          to="/certificates"
          className="px-2 py-1 hover:bg-slate-100 transition duration-300"
        >
          Certificates
        </Link>
      </div>
    </header>
  );
}
