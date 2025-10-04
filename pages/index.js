import Link from "next/link";
import Counter from "../components/Counter";
import Greeting from "../components/Greeting";

// Home Page: The main index page of the application.
export default function Home() {
  return (
    <main className="page-container">
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Welcome to my Next.js App</h1>
      {/* PROPS USAGE: The Greeting component receives the 'name' prop */}
      <Greeting name="Everyone" />

      <section className="about-project">
        <h2>About this Project</h2>
        <p>
          This project was built with Next.js and demonstrates the use of components, state management, and conditional rendering.
        </p>
      </section>

    {/*COMPONENT WITH STATE: Includes the interactive Counter component */}
      <Counter />
    </main>
  );
}
