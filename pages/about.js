import ToggleMessage from "../components/ToggleMessage";
import Link from "next/link";

//About page: Includes the ToggleMessage component to demonstrate state and interactivity.
export default function About() {
  return (
    <main className="page-container">
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>About Me</h1>
      <p>
        Hi! My name is Sofia. I'm a Humber College student, in the process of training as a programmer, exploring the world of programming
         with great enthusiasm and dedication. In this space, I'll share a bit about my journey through technology, what I've learned, and my projects.
      </p>
      {/*COMPONENT WITH STATE: Includes the ToggleMessage component which handles its own state and conditional rendering*/}
      <ToggleMessage />
    </main>
  );
}
