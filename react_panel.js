'use strict'; //With strict mode, you can not, for example, use undeclared variables.

const e = React.createElement;

class RSindbad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.state = { count: 0 };
  }

  clickBut() {
    this.setState({ liked: !this.state.liked });
    this.setState({ count: this.state.count + 1 });
  }

  getMainElement(xprops) {

    /* ====== STYLE ========= */
    const jStyleImg = {
      height: "60px",
      paddingRight: "0px",
      float: "right"
    }

    /* ====== HTML elements ========= */
    const DivStart = React.createElement("div", 
        {style: { fontSize: '10pt', textAlign: 'left', marginBottom: '6px' }},
        'This is React element "RSindbad" from the "react_panel.js" file: ' + xprops.toWhat
      );


    const newButton = React.createElement(
      'button', { onClick: this.clickBut.bind(this) }, 'Change me'
    );
    const text2 = this.state.liked ? '_ON' :"OFF";
    const text3 = ' Count: ' + this.state.count;
    const newH1 = React.createElement('h3',null,'Value is ', text2, text3);
    
    const newDiv = React.createElement("div",
        { id: 'someId', 
          className: 'div_main_',
          style: {
            textAlign: 'left' //"justify"
          }
        }, 
        newButton, newH1 
      );

    const newImg = React.createElement("img", { alt: "Person's image", src: "React_logoA.svg",
      style: jStyleImg
    });

    const aColor1 = xprops.xColor1;
    const newDivMain = React.createElement("div",
        { id: 'IdDivMain', 
          className: 'div_main',
          style: {
            textAlign: "justify",
            backgroundColor: aColor1
          }
            }, 
            DivStart, newImg, newDiv );

    return (newDivMain);
  }

  render() {
    const newDivMain = this.getMainElement(this.props);
    return (newDivMain);
  }
}

class RTimeStart extends React.Component {
  render() {
    const elapsed = Math.round(this.props.elapsed  / 100);
    const seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    const message = 'React class [RTimeStart] has been successfully running for ' + seconds + ' seconds.';

    /* ====== STYLE ========= */
    const jStyleImg = {
      height: "60px",
      paddingRight: "0px",
      float: "right",
      //width: "220px",
    }

    /* ====== HTML elements ========= */
    const newImg = React.createElement("img", { alt: "Person's image", 
            src: "React_logoA.svg", style: jStyleImg
    });

    const newDiv = React.createElement("div",
        { id: 'someId', 
          className: 'div_main_',
          style: {
            textAlign: 'left' //"justify"
          }
        }, 
        message, 
      );

    //const aColor1 = xprops.xColor1;
    const newDivMain = React.createElement("div",
        { id: 'IdDivMain', 
          className: 'div_main',
          style: {
            textAlign: "justify",
            backgroundColor: '#57d95b',
            width: '250px'
          }
        }, 
        newImg, newDiv   
      );

    return (newDivMain);

  }
}

//export default RButton;
