import Link from "next/link";
import logoImg from "../assets/logo.png";

import MainHeaderBackground from "./main-header-backgorund";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
