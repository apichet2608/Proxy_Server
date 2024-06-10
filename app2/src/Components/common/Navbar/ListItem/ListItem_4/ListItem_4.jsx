import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ListItem_4({
  iconPaths,
  title,
  links,
  closeDrawer,

  mainTitle,
}) {
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
          {mainTitle}
        </summary>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              {link.sublabel ? (
                <>
                  <details>
                    <summary className="group">
                      <span>
                        <img
                          key={index}
                          src={link.iconSub}
                          alt="icon"
                          width={"24px"}
                          height={"24px"}
                        />
                      </span>
                      {title}
                    </summary>
                    {link.sublabel && (
                      <ul>
                        {link.sublabel.map((sublink, index) => (
                          <li key={index}>
                            <Link
                              to={sublink.path}
                              onClick={closeDrawer}
                              className={
                                currentPath === sublink.path
                                  ? "bg-primary text-primary-content hover:bg-base-content hover:text-base-100"
                                  : " "
                              }
                            >
                              <span>
                                <img
                                  key={index}
                                  src={sublink.icon}
                                  alt="icon"
                                  width={"24px"}
                                  height={"24px"}
                                />
                              </span>
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </details>
                </>
              ) : (
                <>
                  <Link
                    to={link.path}
                    onClick={closeDrawer}
                    className={
                      currentPath === link.path
                        ? "bg-primary text-primary-content hover:bg-base-content hover:text-base-100"
                        : " "
                    }
                  >
                    {link.label}
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}

export default ListItem_4;
