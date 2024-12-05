
// GRID VERSION 02/12/24

import ReviewGrid from '../components/ReviewGrid'; // Import the grid component

function Reviews() {
  return (
    <div className="container mx-auto px-4 pt-0 lg:pt-10">
      {/* <h1 className="text-textPrimary text-4xl md:text-6xl font-bold mb-6 text-center">
        Reviews
      </h1> */}
      <div className="flex justify-center items-center">
        <ReviewGrid />
      </div>
    </div>
  );
}

export default Reviews;



// VERSION WITH SCROLLING 29/11 13:48

// import QuotationWriter from '../components/QuotationWriter.jsx';
// import QuotationActor from '../components/QuotationActor.jsx';
// import QuotationLive from '../components/QuotationLive.jsx';
// import QuotationComedian from '../components/QuotationComedian.jsx';

// function Home() {
//   return (
//     <div className="container mx-auto px-7 pb-4 sticky">
//       {/* Title Section */}
//       {/* <div className="flex flex-col md:flex-row items-center justify-center">
//         <h1 className="flex-1 text-textPrimary text-border-thick text-3xl md:text-4xl lg:text-5xl font-sans lg:ml-10 drop-shadow-2xl font-bold">Kieran Hodgson.</h1>
//         <p className="flex-1 text-textPrimary text-xl md:text-2xl lg:text-3xl font-sans lg:ml-12">Actor - Comedian - Writer.</p>
//       </div> */}

//       <div className="flex flex-col lg:flex-row gap-4 mt-6">
//         {/* Quotations Section */}
//         <div className="flex-1 p-4 rounded-lg lg:pt-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <QuotationWriter className="p-2 text-xl sm:text-xl md:text-2xl lg:text-4xl"/>
//             <QuotationActor className="p-2 text-xl sm:text-xl md:text-2xl lg:text-4xl" />
//             <QuotationLive className="p-2 text-xl sm:text-xl md:text-2xl lg:text-4xl" />
//             <QuotationComedian className="p-2 text-xl sm:text-xl md:text-2xl lg:text-4xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// SAFE version with styling

// import QuotationWriter from '../components/QuotationWriter.jsx';
// import QuotationActor from '../components/QuotationActor.jsx';
// import QuotationLive from '../components/QuotationLive.jsx';
// import QuotationComedian from '../components/QuotationComedian.jsx';

// function Home() {
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-textPrimary text-6xl font-sans">Kieran Hodgson</h1>
//       <p className="text-textPrimary text-3xl font-sans">Actor - Comedian - Writer</p>
//       <div>
//         <img
//           src="/images/KH_Big_Scotland_2_with_quote.png"
//           alt="Kieran Hodgson performing his Big in Scotland show"
//           className="sticky left-0 object-cover rounded-lg shadow-lg"
//         />
//         <div className="flex-1 p-4 rounded-lg lg:pt-10 md:pt-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <QuotationWriter className="p-2 text-lg sm:text-base font-sans text-textSecondary" />
//             <QuotationActor className="p-2 text-lg sm:text-base font-sans text-textSecondary" />
//             <QuotationLive className="p-2 text-lg sm:text-base font-sans text-textSecondary" />
//             <QuotationComedian className="p-2 text-lg sm:text-base font-sans text-textSecondary" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



// SAFE VERSION- responsive layout 29/11/2024 13:48

// import QuotationWriter from '../components/QuotationWriter.jsx';
// import QuotationActor from '../components/QuotationActor.jsx';
// import QuotationLive from '../components/QuotationLive.jsx';
// import QuotationComedian from '../components/QuotationComedian.jsx';

// function Home() {
//   return (
//     <div className="container mx-auto px-7 pb-4 sticky">
//       {/* Title Section */}
//       {/* <div className="flex flex-col md:flex-row items-center justify-center">
//         <h1 className="flex-1 text-textPrimary text-border-thick text-3xl md:text-4xl lg:text-5xl font-sans lg:ml-10 drop-shadow-2xl font-bold">Kieran Hodgson.</h1>
//         <p className="flex-1 text-textPrimary text-xl md:text-2xl lg:text-3xl font-sans lg:ml-12">Actor - Comedian - Writer.</p>
//       </div> */}

//       <div className="flex flex-col lg:flex-row gap-4 mt-6">
//         {/* Image Section */}
//           <div className="flex-1">
//             <img
//               src="/images/KH_Big_Scotland_2_with_quote.png"
//               alt="Kieran Hodgson performing his Big in Scotland show"
//               className="w-full object-cover rounded-lg shadow-lg lg:pt-10 bg-black"
//             />
//           </div>

//         {/* Quotations Section */}
//         <div className="flex-1 p-4 rounded-lg lg:pt-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <QuotationWriter className="p-2 text-l sm:text-l md:text-l lg:text-xl"/>
//             <QuotationActor className="p-2 text-l sm:text-l md:text-l lg:text-xl" />
//             <QuotationLive className="p-2 text-l sm:text-l md:text-l lg:text-xl" />
//             <QuotationComedian className="p-2 text-l sm:text-l md:text-l lg:text-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



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
