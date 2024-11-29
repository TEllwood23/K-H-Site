function About() {
  return (
    <div className="container mx-auto px-8 h-screen pt-20 lg:pt-40">
      <h1 className="text-4xl pb-4 font-sub">Bio...</h1>
      <div className="flex flex-col lg:flex-row text-sm md:text-xl h-48 text-wrap">
        <p className="flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nulla a libero egestas commodo. Phasellus eu turpis et massa tincidunt sodales a non erat. Aliquam pretium sapien at lacinia egestas. Pellentesque bibendum ultricies auctor. Morbi facilisis tempus mauris eget efficitur. Vivamus id ex id odio efficitur venenatis.
        </p>
        <div className="flex flex-1 justify-center items-start">
          <img
            src="/images/Kieran_headshot.jpeg"
            alt="Kieran Hodgson"
            className="rounded-lg flex-grow max-h-[50vh] h-auto w-auto object-contain mx-auto mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default About;



// src/pages/About.jsx

// function About() {
//   return (
//     <div className="container mx-auto px-8 h-screen pt-20">
//       <h1 className="text-4xl pb-4 font-sub">Bio...</h1>
//       <div className="flex flex-col lg:flex-row text-sm md:text-xl h-48 text-wrap">
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nulla a libero egestas commodo. Phasellus eu turpis et massa tincidunt sodales a non erat. Aliquam pretium sapien at lacinia egestas. Pellentesque bibendum ultricies auctor. Morbi facilisis tempus mauris eget efficitur. Vivamus id ex id odio efficitur venenatis. </p>
//         <div className="flex">
//           <img
//               src="/images/Kieran_headshot.jpeg"
//               alt="Kieran Hodgson"
//               className="sticky right-0 rounded-lg m-auto mt-4 mb-20 h-auto w-auto"
//             />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
