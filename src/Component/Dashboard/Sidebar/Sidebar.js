import React, { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentAlt,
  faPlus,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { userContext } from "../../../App";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser] = useContext(userContext);

  fetch("https://fierce-stream-67522.herokuapp.com/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ admin: loggedInUser.email }),
  })
    .then((res) => res.json())
    .then((data) => {
    

      if (data) {
        setIsAdmin(data);

        sessionStorage.setItem("admin", loggedInUser.email);
      }
    });
  const getAdmin = sessionStorage.getItem("admin");

  return (
    <div className="d-flex justify-content-center sidebar ">
      <ul className="navbar-nav mt-5  ">
        {isAdmin || getAdmin ? (
           <div>
           <li className="nav-item nav-link mb-3  ">
             <Link to={"/orderList"} style={{ textDecoration: "none" }}>
               <span className=" text-light  book-btn text-bold">
                 <FontAwesomeIcon
                   style={{ fontSize: "20px" }}
                   className="me-3"
                   icon={faShoppingCart}
                 />
                 OderList
               </span>
             </Link>
           </li>

           <li className="nav-item nav-link mb-3 ">
             <Link to={"/addService"} style={{ textDecoration: "none" }}>
               <span className=" text-light  book-btn text-bold">
                 <FontAwesomeIcon
                   style={{ fontSize: "20px" }}
                   className="me-3"
                   icon={faPlus}
                 />{" "}
                 Add Service
               </span>
             </Link>
           </li>
           <li className="nav-item nav-link mb-3 ">
             <Link to={"/addAdmin"} style={{ textDecoration: "none" }}>
               <span className=" text-light  book-btn text-bold">
                 <FontAwesomeIcon
                   style={{ fontSize: "20px" }}
                   className="me-3"
                   icon={faUserPlus}
                 />{" "}
                 Add Admin
               </span>
             </Link>
           </li>
           <li className="nav-item nav-link mb-3 ">
             <Link to={"/manageServices"} style={{ textDecoration: "none" }}>
               <span className="text-light book-btn text-bold">
                 <FontAwesomeIcon
                   style={{ fontSize: "20px" }}
                   className="me-3"
                   icon={faWindows}
                 />{" "}
                 Manage Services
               </span>
             </Link>
           </li>
         </div>
          
        ) : (
          <div>
            <li className="nav-item nav-link mb-3  ">
              <Link to={"/bookingList"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faShoppingCart}
                  />
                  Booking list
                </span>
              </Link>
            </li>
            <li className="nav-item nav-link mb-3  ">
              <Link to={"/review"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faCommentAlt}
                  />
                  Review
                </span>
              </Link>
            </li>
          </div>
         
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
