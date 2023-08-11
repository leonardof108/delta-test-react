import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [openToggle, setOpenToggle] = useState(false);

  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const updateScreenSize = () => {
    setSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    setOpenToggle(false);
  }, [size]);

  return (
    <nav className={style.navbar_container}>
      <div className={style.navbar_container_left}>
        <Link href="#">
          <Image
            src="/assets/Delta_logo.png"
            className={style.navbar_logo}
            width={300}
            height={200}
            alt="Imagem logo delta"
          />
        </Link>
        <div className={style.navbar_menu}>
          <Link href="#">Primeiro Menu</Link>
          <Link href="#">Segundo Menu</Link>
          <Link href="#">Terceiro Menu</Link>
          <Link href="#">Quarto Menu</Link>
        </div>
      </div>
      <div className={style.navbar_container_right}>
        <form action="get" className={style.navbar_search}>
          <button type="button">
            <MagnifyingGlass size={32} />
          </button>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Procurar..."
          />
        </form>
        {openToggle ? (
          <div className={style.sidenav_menu}>
            <div className={style.navbar_menu_burger_close}>
              <button type="button" onClick={() => setOpenToggle(false)}>
                <X size={32} color="#ffffff" />
              </button>
            </div>
            <Link href="#">Primeiro Menu</Link>
            <Link href="#">Segundo Menu</Link>
            <Link href="#">Terceiro Menu</Link>
            <Link href="#">Quarto Menu</Link>
          </div>
        ) : null}
        <div className={style.navbar_menu_burger}>
          <button type="button" onClick={() => setOpenToggle(true)}>
            <List size={32} />
          </button>
        </div>
      </div>
    </nav>
  );
}
