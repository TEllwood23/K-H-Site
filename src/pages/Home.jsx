// src/pages/Home.jsx

function Home() {
  return (
    <div>
      <h1 className="text-textPrimary">Welcome to My Website- with new home page</h1>
      <p>This is the main landing page for the site.</p>

      {/* Move Vite logo, React logo, and counter here */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => alert('Count functionality can be added!')}>
          This is just a demo button
        </button>
        <p>
          Edit <code>src/pages/Home.jsx</code> to customize this page.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
