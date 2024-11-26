// src/pages/Home.jsx

function Home() {
  return (
    <div>
      <h1 className="text-textPrimary text-6xl font-sans">Kieran Hodgson</h1>
      <p className="text-textPrimary font-sans">Actor - Comedian- Writer.</p>
        <img
          src="/images/KH_Big_Scotland_2_with_quote.png"
          alt="Kieran Hodgson performing his Big in Scotland show"
          className="w-2/3 sticky left-0 object-cover rounded-lg shadow-lg"
        />
    </div>
  );
}

export default Home;
