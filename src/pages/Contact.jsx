//VERSION FIXING OFF CENTRE LINK

function Contact() {
  return (
    <div className="container mx-auto px-8 h-screen pt-24 lg:pt-38 pb-20">
      {/* Header Section */}
      <div className="flex justify-center mb-8 text-center">
        <h1 className="text-4xl font-sub">
          Get in Touch at{" "}
          <a
            href="https://www.unitedagents.co.uk/kieran-hodgson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-red-900 hover:underline transition duration-300 cursor-pointer"
          >
            United Agents
          </a>
        </h1>
      </div>

      {/* Image Link */}
      <div className="flex justify-center">
        <a
          href="https://www.unitedagents.co.uk/kieran-hodgson"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/images/United_Agents.jpg"
            alt="United Agents Logo"
            className="rounded-lg object-contain max-w-[90vw] lg:max-w-[600px] shadow-lg hover:shadow-xl transition duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;


// SAFE VERSION 05-12-24 15:37

// function Contact() {
//   return (
//     <div className="container mx-auto px-8 h-screen pt-24 lg:pt-38 pb-20">
//       {/* Header Section */}
//       <div className="flex justify-center mb-8 text-center">
//         <h1 className="text-4xl font-sub">
//           Get in Touch at{" "}
//           <a
//             href="https://www.unitedagents.co.uk/kieran-hodgson"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-textSecondary hover:text-red-900 hover:underline transition duration-300 cursor-pointer"
//           >
//             United Agents
//           </a>
//         </h1>
//       </div>

//       {/* Image Link */}
//       <div className="flex justify-center">
//         <a
//           href="https://www.unitedagents.co.uk/kieran-hodgson"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="/images/United_Agents.jpg"
//             alt="United Agents Logo"
//             className="rounded-lg object-contain max-w-[90%] lg:max-w-[600px] shadow-lg hover:shadow-xl transition duration-300"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;
