import React from 'react';

 class ThemedDecorations extends React.Component {
   render() {
     const childrenProps = React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            className: this.props.theme
          });
        });
     return (
       <div>
         {childrenProps}
       </div>
     );
   }
 }

 module.exports = ThemedDecorations;
