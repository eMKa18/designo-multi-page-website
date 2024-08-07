import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Footer } from "./components/Footer";
import { LetsTalk } from "./components/LetsTalk";
import "./tailwind.css";

import logoDark from "/shared/desktop/logo-dark.png";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <div className="lg:w-[80%] md:w-[90%] w-full flex flex-col items-center mx-auto">
        <div className="flex justify-center w-full pt-10 pb-10">
          <nav className="flex justify-between items-center w-full">
            <div>
              <Link to={"/"}>
                <img className="scale-75" src={logoDark} alt="Logo" />
              </Link>
            </div>
            <div className="flex items-center justify-between w-1/4 uppercase text-sm tracking-wider">
              <Link to={"/about"}>
                <span>Our company</span>
              </Link>
              <div>Locations</div>
              <div>Contact</div>
            </div>
          </nav>
        </div>
        <div className="bg-hero-pattern-leaf bg-repeat-space bg-right">
          <div className="">
            <Outlet />
          </div>
          <LetsTalk />
        </div>
      </div>
      <Footer />
    </div>
  );
}
