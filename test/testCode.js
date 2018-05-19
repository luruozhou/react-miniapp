const testClz = "Class A extends Page{}"

//测试标签attr
const testJSX1 =  "class A extends Component {"+
"render() {"+
  "let { msg } = this.props.hello"+
  "return ("+
    '<div className="app">'+
      '<img className="logo" src={msg}/>'+
    '</div>'+
  ')'+
'}'+
'}'

const testJSXEvent = "class A extends Component {"+
"onClick(){console.log('test click')}"+
"render() {"+
  "let { msg } = this.props.hello"+
  "return ("+
    '<div className="app" onClick={this.onClick} style={{posistion:"relative"}}>'+
      '<img className="logo" src={msg}/>'+
    '</div>'+
  ')'+
'}'+
'}'

//测试纯JSX编译
const testPureJSX = "<template></template>"

//
var testJSX = "class A extends Component {"+
  "render() {"+
    "let { msg } = this.props.hello"+
    "return ("+
    '<div className="app">'+
        '<img className="logo" src={LogoWithTitileImg}/>'+
        '<div className="helloworld">'+
        '<h1>Welcome to Restackx for React</h1>'+
          "Let's begin in <code>demo/index.jsx</code>, change the <i>{msg}</i>."+
          '</div>'+
        '</div>'+
    ')'+
  '}'+
'}'

module.exports = {
  testClz,
  testJSX,
  testJSX1,
  testPureJSX,
  testJSXEvent
}