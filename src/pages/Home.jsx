// src/pages/Home.jsx
import Quotation from '../components/Quotation.jsx'

function Home() {
  return (
    <div>
      <h1 className="text-textPrimary text-6xl font-sans">Kieran Hodgson</h1>
      <p className="text-textPrimary font-sans">Actor - Comedian- Writer.</p>
      <div className="flex">
        <img
          src="/images/KH_Big_Scotland_2_with_quote.png"
          alt="Kieran Hodgson performing his Big in Scotland show"
          className="flex-1 sticky left-0 object-cover rounded-lg shadow-lg"
        />
          <div className="flex-1 min-w-24 bg-white">
          <Quotation style={{ border: '1px solid red' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
