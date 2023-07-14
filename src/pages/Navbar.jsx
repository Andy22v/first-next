import styles from "../styles/Navbar.module.scss";
import { Link } from "next/link";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Login">Log in</Link>
        </li>
      </ul>
    </div>
  );
}
