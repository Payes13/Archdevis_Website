import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

// THIS FUNCTION IS GOING TO RETURN ANOTHER FUNCTION CALLED HOC()
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2022 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;


// function AppWrap(Component, idName, className){
//   function HOC(){
//     return (
//       <div id={idName} className={`app__container ${classNames}`}>
//         <SocialMedia />
        
//         <div className="app__wrapper app__flex">
//           <Component />
  
//           <div className="copyright">
//             <p className="p-text">@2022 MICHAEL</p>
//             <p className="p-text">All rights reserved</p>
//           </div>
//         </div>
        
//         <NavigationDots active={idName} />
//       </div>
//     );
//   }
// }