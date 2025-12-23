import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./AnimatedButton";

const Layout = ({ children, activePage, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkHeader = scrolled || activePage !== "home";

  return (
    <div className="font-sans text-black">
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all ${
          darkHeader ? "bg-white shadow" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex justify-center items-center gap-2">
          <img src="/logo.png" className="h-7" /><div
            onClick={() => navigate("home")}
            className={`font-montserrat font-bold text-2xl cursor-pointer ${
              darkHeader ? "text-black" : "text-rose"
            }`}
          >
            PIRO<span className="text-[#ED206F]">.</span>
          </div></div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase">
            {["home", "menu", "locations", "about", "franchise"].map((p) => (
              <button
                key={p}
                onClick={() => navigate(p)}
                className={`hover:text-[#ED206F] ${
                  darkHeader ? "text-black" : "text-rose"
                }`}
              >
                {p}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => navigate("menu")}>Order Online</Button>
          </div>

          <button
            className={`md:hidden ${darkHeader ? "text-black" : "text-white"}`}
            onClick={() => setMobileOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center gap-8">
          <button className="absolute top-6 right-6" onClick={() => setMobileOpen(false)}>
            <X />
          </button>
          {["home", "menu", "locations", "about", "franchise"].map((p) => (
            <button
              key={p}
              onClick={() => {
                navigate(p);
                setMobileOpen(false);
              }}
              className="text-2xl font-bold uppercase hover:text-[#ED206F]"
            >
              {p}
            </button>
          ))}
          <Button onClick={() => navigate("menu")}>Order Online</Button>
        </div>
      )}

      <main className="pt-20">{children}</main>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              PIRO<span className="text-[#ED206F]">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Global flavours. Indian soul.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li onClick={() => navigate("menu")} className="cursor-pointer">
                Menu
              </li>
              <li onClick={() => navigate("locations")} className="cursor-pointer">
                Locations
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li onClick={() => navigate("about")} className="cursor-pointer">
                About
              </li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
