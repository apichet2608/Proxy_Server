import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ListiTem_2({ iconPaths, title, links, closeDrawer }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <li className="">
      <details>
        <summary className="group">
          <span>
            {iconPaths.map((path, index) => (
              <img
                key={index}
                src={path.img}
                alt="icon"
                width={"24px"}
                height={"24px"}
              />
            ))}
          </span>
          {title}
        </summary>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={closeDrawer}
                className={
                  currentPath === link.path
                    ? "bg-primary text-primary-content hover:bg-base-content hover:text-base-100"
                    : " "
                }
              >
                <span>
                  <img
                    src={link.icon}
                    alt="icon"
                    width={"24px"}
                    height={"24px"}
                  />
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default ListiTem_2;
