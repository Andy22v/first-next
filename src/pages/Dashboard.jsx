import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "./auth";
import "../styles/Dashboard.module.scss";

export default function Dashboard() {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <h1>Welcome to Dashboard</h1>
      <div className="info-user">
        <p>Nome: {auth.username}</p>
        <p>Email: {auth.email}</p>
        <p>Age: {auth.age}</p>
      </div>
    </div>
  ) : (
    <Link href="/Login"></Link>
  );
}
