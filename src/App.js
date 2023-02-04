import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="nav-title">
            <h1>My Portfolio</h1>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <h2>About Me</h2>
            </div>
            <div className="nav-item">
              <h2>Projects</h2>
            </div>
            <div className="nav-item">
              <h2>Contact</h2>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            viverra euismod odio, gravida pellentesque urna varius vitae.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:email@example.com">email@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">(123) 456-7890</a>
          </p>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
