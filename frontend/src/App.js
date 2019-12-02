// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
import AppHeader from './components/AppHeader';


class App extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                {this.props.children}
            </div>
        );
    }
};
        
//     let options = {
//       sectionClassName:     'section',
//       anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
//       scrollBar:            false,
//       navigation:           true,
//       verticalAlign:        true,
//     //   sectionPaddingTop:    '50px',
//     //   sectionPaddingBottom: '50px',
//       arrowNavigation:      true
//     };
 
//     return (
//       <div>
//         <Header>
//             <HeaderMenu/>
//         </Header>
//         {/* <Footer>
//           <a href="">Dcoumentation</a>
//           <a href="">Example Source</a>
//           <a href="">About</a>
//         </Footer> */}
        
//         <SectionsContainer className="container" {...options}>
//           <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
//           <Section color="#A7DBD8">Page 2</Section>
//           <Section color="#E0E4CC">Page 3</Section>
//         </SectionsContainer>
//       </div>
//     );
  
//     }
// }

export default App;