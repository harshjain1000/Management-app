// import React from "react";
// import Button from "./common/Button";

// const Navbar = () => {
//   return (
//     <div className="flex pl-20 pr-20 p-10 justify-between ">
//       <div className="flex items-center justify-between">Logo</div>
//       <div className="flex justify-between gap-10 items-center">
//         <p>Home </p>
//         <p>About</p>
//         <p>Services</p>
//         <p>Contact</p>
//         <Button
//           text="CONTACT"
//           bgColor="bg-red-500"
//           textColor="text-white"
//           width="w-40"
//           height="h-12"
//           onClick={() => console.log("Button clicked!")}
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";
const Navbar() {
  return (
    <div className="flex justify-between px-32 tracking-tight py-1">
      <Link to="/home" className="py-2">
        <img loading="lazy" src="/icons/logo.svg" className="w-auto h-10" />
      </Link>
      <div className="flex gap-10 items-center">
        <div>
          <Link to="/home" className="uppercase hover:opacity-70 font-[500]">
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/services"
            className="uppercase hover:opacity-70 font-[500]"
          >
            Services
          </Link>
        </div>
        <div>
          <Link
            to="/projects"
            className="uppercase hover:opacity-70 font-[500]"
          >
            About Projects
          </Link>
        </div>
        <div>
          <Link
            to="/testimonials"
            className="uppercase hover:opacity-70 font-[500]"
          >
            Testimonials
          </Link>
        </div>
        <div>
          <Link
            to="/contact"
            className="uppercase font-[500] bg-[#f46d21] text-white px-6 py-2 rounded-md hover:opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Navbar;