import { useTheme } from "next-themes";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NightsStayIcon from "@mui/icons-material/NightsStay";

// Do NOT use this! It will throw a hydration mismatch error.
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div onChange={(e) => setTheme(e.target.value)} className="dropdown mx-4">
        <div tabIndex={0} role="button" className="btn">
          Theme
          <svg
            width="12px"
            height="12px"
            className="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl bg-primary-content text-primary rounded-box grid gap-2"
        >
          <li>
            <label>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
                checked={theme === "default"}
              />
            </label>
          </li>
          <div className="divider divider-accent text-accent text-xs font-bold">
            <Brightness4Icon />
          </div>
          <li>
            <label>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Light"
                value="light"
                checked={theme === "light"}
              />
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark"
                value="dark"
                checked={theme === "dark"}
              />
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ThemeSwitch;
