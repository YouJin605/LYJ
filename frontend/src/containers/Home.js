import React from 'react';
import BigText from '../components/BigText';
import PageObject from '../components/PageObject';

const Home = () => {
    return (
        <div>
            <BigText>홈</BigText>
        </div>
    );
};

export default Home;


//-----------
// import BigText from '../components/BigText';
// import React from "react";
// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";
// import {ScrollToTopOnMount,SectionsContainer, Section, Header, Footer} from '@fullpage/react-fullpage';
// // import ReactFullpage from '@fullpage/react-fullpage-umd';
// import HeaderMenu from '../components/HeaderMenu';
// // import "./styles.css";

// const fullpageOptions = {
//   anchors: ["firstPage", "secondPage", "thirdPage"],
//   sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
//   callbacks: ["onLeave"],
//   scrollOverflow: true
// };

// const Home = fullpageProps => (
//   <ReactFullpage
//     {...fullpageProps}
//     render={({ state, fullpageApi }) => {
//       console.log("render prop change", state); // eslint-disable-line no-console

//       return (
        
//         <div id="fullpage-wrapper"{...fullpageOptions}>
//           <div className="section">
//             <BigText>1page</BigText>
//           </div>

//           <div className="section">
            
//             <div className="slide">
              
//               <BigText>2page</BigText>
//               <div
//                 style={{
//                   overflow: "scroll",
//                   height: 200,
//                   backgroundColor: "#EEE"
//                 }}
//               >
//                 <ul>
//                   {Array(100)
//                     .fill(1)
//                     .map((_, index) => <li>{index}</li>)}
//                 </ul>
//                 PS: Once you edit code - this will be scrollable, but full page
//                 will die.
//               </div>
//             </div>
//           </div>


//           <div className="section">
//             <BigText>3page </BigText>
//           </div>


//         </div>
//       );
//     }}
//   />
// );

// // ReactDOM.render(
// //   <Home {...fullpageOptions} />,
// //   document.getElementById("react-root")
// // );

// export default Home;
