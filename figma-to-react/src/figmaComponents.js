import React, { PureComponent } from 'react';
import { CButtonBackground } from './components/CButtonBackground';
import { CButtonText } from './components/CButtonText';
import { CButton } from './components/CButton';
import { CField } from './components/CField';
import { CText } from './components/CText';
import { CInput } from './components/CInput';
import { CLabel } from './components/CLabel';
import { CImage } from './components/CImage';
import { CContainer } from './components/CContainer';
import { CCardEditor } from './components/CCardEditor';
import { CCardSender } from './components/CCardSender';
import { CComponents } from './components/CComponents';
import { CGenerateArtCard } from './components/CGenerateArtCard';
import { CSendCard } from './components/CSendCard';

export class MainComponents extends PureComponent {
  render() {
    return <div className="main" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CComponents {...this.props} nodeId="1:2" />
    </div>
  }
}

export class MainGenerateArtCard extends PureComponent {
  render() {
    return <div className="main" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CGenerateArtCard {...this.props} nodeId="1:27" />
    </div>
  }
}

export class MainSendCard extends PureComponent {
  render() {
    return <div className="main" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CSendCard {...this.props} nodeId="9:38" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "1:3") return CButtonBackground1D3;
  if (id === "1:4") return CButtonText1D4;
  if (id === "1:6") return CButton1D6;
  if (id === "1:10") return CField1D10;
  if (id === "1:11") return CText1D11;
  if (id === "1:14") return CInput1D14;
  if (id === "9:49") return CLabel9D49;
  if (id === "9:104") return CLabel9D104;
  if (id === "1:15") return Cimage1D15;
  if (id === "1:16") return CImage1D16;
  if (id === "9:126") return CContainer9D126;
  if (id === "9:169") return CContainer9D169;
  if (id === "I9:170;9:126") return CContainerI9D170S9D126;
  if (id === "9:170") return CContainer9D170;
  if (id === "I9:172;1:15") return CimageI9D172S1D15;
  if (id === "9:172") return CImage9D172;
  if (id === "I9:174;1:10") return CFieldI9D174S1D10;
  if (id === "I9:174;1:11") return CTextI9D174S1D11;
  if (id === "9:174") return CInput9D174;
  if (id === "I9:177;1:3") return CButtonBackgroundI9D177S1D3;
  if (id === "I9:177;1:4") return CButtonTextI9D177S1D4;
  if (id === "9:177") return CButton9D177;
  if (id === "9:180") return CCardEditor9D180;
  if (id === "I9:192;9:126") return CContainerI9D192S9D126;
  if (id === "9:192") return CContainer9D192;
  if (id === "I9:194;1:15") return CimageI9D194S1D15;
  if (id === "9:194") return CImage9D194;
  if (id === "I9:196;9:49") return CLabelI9D196S9D49;
  if (id === "9:196") return CLabel9D196;
  if (id === "I9:198;1:3") return CButtonBackgroundI9D198S1D3;
  if (id === "I9:198;1:4") return CButtonTextI9D198S1D4;
  if (id === "9:198") return CButton9D198;
  if (id === "9:201") return CCardSender9D201;
  if (id === "1:2") return CComponents1D2;
  if (id === "I9:181;9:170;9:126") return CContainerI9D181S9D170S9D126;
  if (id === "I9:181;9:170") return CContainerI9D181S9D170;
  if (id === "I9:181;9:172;1:15") return CimageI9D181S9D172S1D15;
  if (id === "I9:181;9:172") return CImageI9D181S9D172;
  if (id === "I9:181;9:174;1:10") return CFieldI9D181S9D174S1D10;
  if (id === "I9:181;9:174;1:11") return CTextI9D181S9D174S1D11;
  if (id === "I9:181;9:174") return CInputI9D181S9D174;
  if (id === "I9:181;9:177;1:3") return CButtonBackgroundI9D181S9D177S1D3;
  if (id === "I9:181;9:177;1:4") return CButtonTextI9D181S9D177S1D4;
  if (id === "I9:181;9:177") return CButtonI9D181S9D177;
  if (id === "9:181") return CCardEditor9D181;
  if (id === "1:27") return CGenerateArtCard1D27;
  if (id === "I9:202;9:192;9:126") return CContainerI9D202S9D192S9D126;
  if (id === "I9:202;9:192") return CContainerI9D202S9D192;
  if (id === "I9:202;9:194;1:15") return CimageI9D202S9D194S1D15;
  if (id === "I9:202;9:194") return CImageI9D202S9D194;
  if (id === "I9:202;9:196;9:49") return CLabelI9D202S9D196S9D49;
  if (id === "I9:202;9:196") return CLabelI9D202S9D196;
  if (id === "I9:202;9:198;1:3") return CButtonBackgroundI9D202S9D198S1D3;
  if (id === "I9:202;9:198;1:4") return CButtonTextI9D202S9D198S1D4;
  if (id === "I9:202;9:198") return CButtonI9D202S9D198;
  if (id === "9:202") return CCardSender9D202;
  if (id === "9:38") return CSendCard9D38;
  return null;
}

class CButtonBackground1D3 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CButtonText1D4 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Button Text</span>
      </div>
    );
  }
}

class CButton1D6 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="1:3"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(159, 235, 176, 1)","borderRadius":"30px 30px 30px 30px"}}
            className="innerDiv"
          >
            <CButtonBackground {...this.props} nodeId="1:3" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="1:4"
            style={{"marginLeft":17,"marginRight":17,"flexGrow":1,"marginTop":7,"marginBottom":8,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CButtonText {...this.props} nodeId="1:4" />
          </div>
        </div>
      </div>
    );
  }
}

class CField1D10 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CText1D11 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Text Field</span>
      </div>
    );
  }
}

class CInput1D14 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="1:10"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(0, 0, 0, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CField {...this.props} nodeId="1:10" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="1:11"
            style={{"marginLeft":10,"marginRight":185,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CText {...this.props} nodeId="1:11" />
          </div>
        </div>
      </div>
    );
  }
}

class CLabel9D49 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Label</span>
      </div>
    );
  }
}

class CLabel9D104 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="9:49"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CLabel {...this.props} nodeId="9:49" />
          </div>
        </div>
      </div>
    );
  }
}

class Cimage1D15 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CImage1D16 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="1:15"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-alpha-sig.figma.com/img/5efd/651c/b258cb19c9d66f21ee25ef8ef278c77d?Expires=1664150400&Signature=FRkvHK5RR0ZCRn7poi9xJBqypL~9vPEHUIIqurUZ45rhsF9bKC9HU5RQQGEO2gg5k~tCtR-Xz6pjofWQ3nHgUhi5ZwedkFfeZDWTTNtC4CyL1s7coY5WIRxvfkAlwG~1My3ZrkUH0F7G9Ldd1INS4m3KHQJx-NyFRwVsFEer8SuD-F5D2RJ1cA2OdFCFyoB~kwpWC-rjwpc9sJkuuuJ1vCgUcbYX5fW~PB4hTIm3JkHcsTAqRmMDdjTQ72F5rjz8BRrITG1YBFo-pQu5iMrl6lkNnLJwvysSx-2FEypxQ~k32S6sZxlILLqVgxuG6czZ7SbnyF0wbUZFL88AkSexJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)","backgroundSize":"cover","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="1:15" />
          </div>
        </div>
      </div>
    );
  }
}

class CContainer9D126 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CContainer9D169 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="9:126"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"1px solid rgba(208, 208, 208, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="9:126" />
          </div>
        </div>
      </div>
    );
  }
}

class CContainerI9D170S9D126 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CContainer9D170 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:170;9:126"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"1px solid rgba(208, 208, 208, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="I9:170;9:126" />
          </div>
        </div>
      </div>
    );
  }
}

class CimageI9D172S1D15 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CImage9D172 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:172;1:15"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-alpha-sig.figma.com/img/5efd/651c/b258cb19c9d66f21ee25ef8ef278c77d?Expires=1664150400&Signature=FRkvHK5RR0ZCRn7poi9xJBqypL~9vPEHUIIqurUZ45rhsF9bKC9HU5RQQGEO2gg5k~tCtR-Xz6pjofWQ3nHgUhi5ZwedkFfeZDWTTNtC4CyL1s7coY5WIRxvfkAlwG~1My3ZrkUH0F7G9Ldd1INS4m3KHQJx-NyFRwVsFEer8SuD-F5D2RJ1cA2OdFCFyoB~kwpWC-rjwpc9sJkuuuJ1vCgUcbYX5fW~PB4hTIm3JkHcsTAqRmMDdjTQ72F5rjz8BRrITG1YBFo-pQu5iMrl6lkNnLJwvysSx-2FEypxQ~k32S6sZxlILLqVgxuG6czZ7SbnyF0wbUZFL88AkSexJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)","backgroundSize":"cover","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="I9:172;1:15" />
          </div>
        </div>
      </div>
    );
  }
}

class CFieldI9D174S1D10 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CTextI9D174S1D11 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Text Field</span>
      </div>
    );
  }
}

class CInput9D174 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:174;1:10"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(0, 0, 0, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CField {...this.props} nodeId="I9:174;1:10" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:174;1:11"
            style={{"marginLeft":10,"marginRight":185,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CText {...this.props} nodeId="I9:174;1:11" />
          </div>
        </div>
      </div>
    );
  }
}

class CButtonBackgroundI9D177S1D3 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CButtonTextI9D177S1D4 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Button Text</span>
      </div>
    );
  }
}

class CButton9D177 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:177;1:3"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(159, 235, 176, 1)","borderRadius":"30px 30px 30px 30px"}}
            className="innerDiv"
          >
            <CButtonBackground {...this.props} nodeId="I9:177;1:3" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:177;1:4"
            style={{"marginLeft":17,"marginRight":17,"flexGrow":1,"marginTop":7,"marginBottom":8,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CButtonText {...this.props} nodeId="I9:177;1:4" />
          </div>
        </div>
      </div>
    );
  }
}

class CCardEditor9D180 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="9:170"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="9:170" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="9:172"
            style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":95.4375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="9:172" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="9:174"
            style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":187,"marginBottom":50,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CInput {...this.props} nodeId="9:174" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="9:177"
            style={{"marginLeft":85,"marginRight":85,"flexGrow":1,"marginTop":232,"marginBottom":10,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <CButton {...this.props} nodeId="9:177" />
          </div>
        </div>
      </div>
    );
  }
}

class CContainerI9D192S9D126 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CContainer9D192 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:192;9:126"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"1px solid rgba(208, 208, 208, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="I9:192;9:126" />
          </div>
        </div>
      </div>
    );
  }
}

class CimageI9D194S1D15 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CImage9D194 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:194;1:15"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-alpha-sig.figma.com/img/5efd/651c/b258cb19c9d66f21ee25ef8ef278c77d?Expires=1664150400&Signature=FRkvHK5RR0ZCRn7poi9xJBqypL~9vPEHUIIqurUZ45rhsF9bKC9HU5RQQGEO2gg5k~tCtR-Xz6pjofWQ3nHgUhi5ZwedkFfeZDWTTNtC4CyL1s7coY5WIRxvfkAlwG~1My3ZrkUH0F7G9Ldd1INS4m3KHQJx-NyFRwVsFEer8SuD-F5D2RJ1cA2OdFCFyoB~kwpWC-rjwpc9sJkuuuJ1vCgUcbYX5fW~PB4hTIm3JkHcsTAqRmMDdjTQ72F5rjz8BRrITG1YBFo-pQu5iMrl6lkNnLJwvysSx-2FEypxQ~k32S6sZxlILLqVgxuG6czZ7SbnyF0wbUZFL88AkSexJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)","backgroundSize":"cover","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="I9:194;1:15" />
          </div>
        </div>
      </div>
    );
  }
}

class CLabelI9D196S9D49 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Label</span>
      </div>
    );
  }
}

class CLabel9D196 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:196;9:49"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CLabel {...this.props} nodeId="I9:196;9:49" />
          </div>
        </div>
      </div>
    );
  }
}

class CButtonBackgroundI9D198S1D3 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CButtonTextI9D198S1D4 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Button Text</span>
      </div>
    );
  }
}

class CButton9D198 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:198;1:3"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(159, 235, 176, 1)","borderRadius":"30px 30px 30px 30px"}}
            className="innerDiv"
          >
            <CButtonBackground {...this.props} nodeId="I9:198;1:3" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:198;1:4"
            style={{"marginLeft":17,"marginRight":17,"flexGrow":1,"marginTop":7,"marginBottom":8,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CButtonText {...this.props} nodeId="I9:198;1:4" />
          </div>
        </div>
      </div>
    );
  }
}

class CCardSender9D201 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="9:192"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="9:192" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="9:194"
            style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":95.4375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="9:194" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="9:196"
            style={{"marginLeft":119,"marginRight":120,"flexGrow":1,"marginTop":187,"marginBottom":70,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CLabel {...this.props} nodeId="9:196" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="9:198"
            style={{"marginLeft":85,"marginRight":85,"flexGrow":1,"marginTop":232,"marginBottom":10,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <CButton {...this.props} nodeId="9:198" />
          </div>
        </div>
      </div>
    );
  }
}

class CComponents1D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="1:6"
            style={{"marginLeft":10,"width":100,"minWidth":100,"height":null,"marginTop":9.999999999999886,"marginBottom":1103,"minHeight":30,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <CButton {...this.props} nodeId="1:6" />
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="1:14"
            style={{"marginLeft":10,"width":250,"minWidth":250,"height":null,"marginTop":-1093,"marginBottom":1058,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CInput {...this.props} nodeId="1:14" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="9:104"
            style={{"marginLeft":10,"width":31,"minWidth":31,"height":null,"marginTop":-1048,"marginBottom":1033,"minHeight":15,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CLabel {...this.props} nodeId="9:104" />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="1:16"
            style={{"marginLeft":10,"width":250,"minWidth":250,"height":null,"marginTop":-1023,"marginBottom":856.4375,"minHeight":166.5625,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="1:16" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="9:169"
            style={{"marginLeft":10,"width":270,"minWidth":270,"height":null,"marginTop":-846,"marginBottom":574,"minHeight":272,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="9:169" />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="9:180"
            style={{"marginLeft":10,"width":270,"minWidth":270,"height":null,"marginTop":-564,"marginBottom":292,"minHeight":272,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CCardEditor {...this.props} nodeId="9:180" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="9:201"
            style={{"marginLeft":10,"width":270,"minWidth":270,"height":null,"marginTop":-282,"marginBottom":10,"minHeight":272,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CCardSender {...this.props} nodeId="9:201" />
          </div>
        </div>
      </div>
    );
  }
}

class CContainerI9D181S9D170S9D126 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CContainerI9D181S9D170 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:181;9:170;9:126"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"1px solid rgba(208, 208, 208, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="I9:181;9:170;9:126" />
          </div>
        </div>
      </div>
    );
  }
}

class CimageI9D181S9D172S1D15 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CImageI9D181S9D172 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:181;9:172;1:15"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-alpha-sig.figma.com/img/5efd/651c/b258cb19c9d66f21ee25ef8ef278c77d?Expires=1664150400&Signature=FRkvHK5RR0ZCRn7poi9xJBqypL~9vPEHUIIqurUZ45rhsF9bKC9HU5RQQGEO2gg5k~tCtR-Xz6pjofWQ3nHgUhi5ZwedkFfeZDWTTNtC4CyL1s7coY5WIRxvfkAlwG~1My3ZrkUH0F7G9Ldd1INS4m3KHQJx-NyFRwVsFEer8SuD-F5D2RJ1cA2OdFCFyoB~kwpWC-rjwpc9sJkuuuJ1vCgUcbYX5fW~PB4hTIm3JkHcsTAqRmMDdjTQ72F5rjz8BRrITG1YBFo-pQu5iMrl6lkNnLJwvysSx-2FEypxQ~k32S6sZxlILLqVgxuG6czZ7SbnyF0wbUZFL88AkSexJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)","backgroundSize":"cover","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="I9:181;9:172;1:15" />
          </div>
        </div>
      </div>
    );
  }
}

class CFieldI9D181S9D174S1D10 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CTextI9D181S9D174S1D11 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Text Field</span>
      </div>
    );
  }
}

class CInputI9D181S9D174 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:181;9:174;1:10"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","border":"1px solid rgba(0, 0, 0, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CField {...this.props} nodeId="I9:181;9:174;1:10" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:181;9:174;1:11"
            style={{"marginLeft":10,"marginRight":185,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CText {...this.props} nodeId="I9:181;9:174;1:11" />
          </div>
        </div>
      </div>
    );
  }
}

class CButtonBackgroundI9D181S9D177S1D3 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CButtonTextI9D181S9D177S1D4 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Button Text</span>
      </div>
    );
  }
}

class CButtonI9D181S9D177 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:181;9:177;1:3"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(159, 235, 176, 1)","borderRadius":"30px 30px 30px 30px"}}
            className="innerDiv"
          >
            <CButtonBackground {...this.props} nodeId="I9:181;9:177;1:3" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:181;9:177;1:4"
            style={{"marginLeft":17,"marginRight":17,"flexGrow":1,"marginTop":7,"marginBottom":8,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CButtonText {...this.props} nodeId="I9:181;9:177;1:4" />
          </div>
        </div>
      </div>
    );
  }
}

class CCardEditor9D181 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:181;9:170"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="I9:181;9:170" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:181;9:172"
            style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":95.4375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="I9:181;9:172" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I9:181;9:174"
            style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":187,"marginBottom":50,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CInput {...this.props} nodeId="I9:181;9:174" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I9:181;9:177"
            style={{"marginLeft":85,"marginRight":85,"flexGrow":1,"marginTop":232,"marginBottom":10,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <CButton {...this.props} nodeId="I9:181;9:177" />
          </div>
        </div>
      </div>
    );
  }
}

class CGenerateArtCard1D27 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="9:181"
            style={{"width":270,"marginLeft":0,"height":null,"marginTop":32,"marginBottom":32,"minHeight":272,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CCardEditor {...this.props} nodeId="9:181" />
          </div>
        </div>
      </div>
    );
  }
}

class CContainerI9D202S9D192S9D126 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CContainerI9D202S9D192 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:202;9:192;9:126"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)","border":"1px solid rgba(208, 208, 208, 1)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="I9:202;9:192;9:126" />
          </div>
        </div>
      </div>
    );
  }
}

class CimageI9D202S9D194S1D15 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CImageI9D202S9D194 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:202;9:194;1:15"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundImage":"url(https://s3-alpha-sig.figma.com/img/5efd/651c/b258cb19c9d66f21ee25ef8ef278c77d?Expires=1664150400&Signature=FRkvHK5RR0ZCRn7poi9xJBqypL~9vPEHUIIqurUZ45rhsF9bKC9HU5RQQGEO2gg5k~tCtR-Xz6pjofWQ3nHgUhi5ZwedkFfeZDWTTNtC4CyL1s7coY5WIRxvfkAlwG~1My3ZrkUH0F7G9Ldd1INS4m3KHQJx-NyFRwVsFEer8SuD-F5D2RJ1cA2OdFCFyoB~kwpWC-rjwpc9sJkuuuJ1vCgUcbYX5fW~PB4hTIm3JkHcsTAqRmMDdjTQ72F5rjz8BRrITG1YBFo-pQu5iMrl6lkNnLJwvysSx-2FEypxQ~k32S6sZxlILLqVgxuG6czZ7SbnyF0wbUZFL88AkSexJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)","backgroundSize":"cover","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="I9:202;9:194;1:15" />
          </div>
        </div>
      </div>
    );
  }
}

class CLabelI9D202S9D196S9D49 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Label</span>
      </div>
    );
  }
}

class CLabelI9D202S9D196 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:202;9:196;9:49"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CLabel {...this.props} nodeId="I9:202;9:196;9:49" />
          </div>
        </div>
      </div>
    );
  }
}

class CButtonBackgroundI9D202S9D198S1D3 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class CButtonTextI9D202S9D198S1D4 extends PureComponent {
  render() {
    return (
      <div>
        <span style={{}} key="end">Button Text</span>
      </div>
    );
  }
}

class CButtonI9D202S9D198 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:202;9:198;1:3"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(159, 235, 176, 1)","borderRadius":"30px 30px 30px 30px"}}
            className="innerDiv"
          >
            <CButtonBackground {...this.props} nodeId="I9:202;9:198;1:3" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:202;9:198;1:4"
            style={{"marginLeft":17,"marginRight":17,"flexGrow":1,"marginTop":7,"marginBottom":8,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <CButtonText {...this.props} nodeId="I9:202;9:198;1:4" />
          </div>
        </div>
      </div>
    );
  }
}

class CCardSender9D202 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="I9:202;9:192"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CContainer {...this.props} nodeId="I9:202;9:192" />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv centerer">
          <div
            id="I9:202;9:194"
            style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":95.4375,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CImage {...this.props} nodeId="I9:202;9:194" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="I9:202;9:196"
            style={{"marginLeft":119,"marginRight":120,"flexGrow":1,"marginTop":187,"marginBottom":70,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CLabel {...this.props} nodeId="I9:202;9:196" />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv centerer">
          <div
            id="I9:202;9:198"
            style={{"marginLeft":85,"marginRight":85,"flexGrow":1,"marginTop":232,"marginBottom":10,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <CButton {...this.props} nodeId="I9:202;9:198" />
          </div>
        </div>
      </div>
    );
  }
}

class CSendCard9D38 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="9:202"
            style={{"width":270,"marginLeft":0,"height":null,"marginTop":32,"marginBottom":32,"minHeight":272,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CCardSender {...this.props} nodeId="9:202" />
          </div>
        </div>
      </div>
    );
  }
}

