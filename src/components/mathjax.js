import React from 'react';
import MathJax from 'react-mathjax';
// const tex = `f(x) = \\int_{-\\infty}^\\infty
//     \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
//     \\,d\\xi`
 
// module.exports = () => {
//     return (
//         <MathJax.Provider>
//             <div>
//                 This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
//                 And a block one:
 
//                 <MathJax.Node formula={tex} />
//             </div>
//         </MathJax.Provider>
//     );
// }
class MathJaxView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        // math: tex
        }
    }
    render () {
      return (
        <MathJax.Provider>
            {/* <div>
                This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
                And a block one:
 
                <MathJax.Node formula={tex} />
            </div> */}
            {/* <MathJax.Node formula={tex} /> */}
            <MathJax.Node inline formula={this.props.mathText} />
        </MathJax.Provider>
      );
    }
  }
  
export default MathJaxView;

