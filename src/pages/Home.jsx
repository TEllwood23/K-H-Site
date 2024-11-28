// src/pages/Home.jsx


// responsive layout

import Quotation from '../components/Quotation.jsx';

function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Title Section */}
      <h1 className="text-textPrimary text-6xl sm:text-5xl font-sans">Kieran Hodgson</h1>
      <p className="text-textPrimary text-3xl sm:text-2xl font-sans">Actor - Comedian - Writer.</p>

      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/images/KH_Big_Scotland_2_with_quote.png"
            alt="Kieran Hodgson performing his Big in Scotland show"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Quotations Section */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Quotation className="p-2 text-lg sm:text-base" />
            <Quotation className="p-2 text-lg sm:text-base" />
            <Quotation className="p-2 text-lg sm:text-base" />
            <Quotation className="p-2 text-lg sm:text-base" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



// import Quotation from '../components/Quotation.jsx'

// function Home() {
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-textPrimary text-6xl font-sans">Kieran Hodgson</h1>
//       <p className="text-textPrimary text-3xl font-sans">Actor - Comedian- Writer.</p>
//       <div>
//         <img
//           src="/images/KH_Big_Scotland_2_with_quote.png"
//           alt="Kieran Hodgson performing his Big in Scotland show"
//           className="sticky left-0 object-cover rounded-lg shadow-lg"
//         />
//           <div className="bg-white p-4">
//             <div className="flex justify-between px-4">
//               <Quotation style={{ border: '1px solid red'}} className='mx-2' />
//               <Quotation style={{ border: '1px solid red' }} className='mx-2'  />
//               <Quotation style={{ border: '1px solid red' }} className='mx-2'  />
//               <Quotation style={{ border: '1px solid red' }} className='mx-2' />
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// function Home() {
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-textPrimary text-6xl font-sans">Kieran Hodgson</h1>
//       <p className="text-textPrimary font-sans">Actor - Comedian- Writer.</p>
//       <div className="flex">
//         <img
//           src="/images/KH_Big_Scotland_2_with_quote.png"
//           alt="Kieran Hodgson performing his Big in Scotland show"
//           className="flex-1 sticky left-0 object-cover rounded-lg shadow-lg"
//         />
//           <div className="flex-1 bg-white p-4">
//           <Quotation style={{ border: '1px solid red' }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
