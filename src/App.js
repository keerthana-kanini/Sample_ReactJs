// import { Header } from "./components/Header";
import { LearnComponent } from "./components/LearnComponent";
import { QrCode } from "./components/QrCode";
// import '../src/CSS/Header.css';
// import { Student } from "./components/Student";
// import '../src/CSS/Student.css';
// import { ChildComponent } from "./components/ChildComponent";
// import{ArraySample} from "../src/components/ArraySample";
// import { ColorSample } from "./components/ColorSample";

function App() {
  // const items =[
  //   {id:1, name:"Item 1"},
  //   {id:2, name:"Item 2"},
  //   {id:3, name:"Item 3"},

  // ];

  const handleClick = () =>{
    alert("Button Clicked");
  }
  return (
    <frameElement>
   {/* <LearnComponent/> */}
    {/* <Header/>
    <Student studentID={1} studentName="Keerthana" studentAge={17} studentPA={true}/>
    <Student studentID={2} studentName="Saravana" studentAge={17} studentPA={false}/>
    <Student studentID={3} studentName="Rajendran" studentAge={15} studentPA={true}/>
    <Student studentID={4} studentName="Rajini" studentAge={12} studentPA={false}/>
    <Student/>
    <ChildComponent>
      <p>Props 1</p>
      <p>Props 2</p>
      <p>Props 3</p>
    </ChildComponent> */}
    {/* <ArraySample items={items}/>
    <ColorSample color="blue"/> */}
    {/* <div>
      <h1>Parent components</h1>
      <LearnComponent handleClick={handleClick}/>

    </div> */}
    <QrCode/>

    </frameElement>
  );
}

export default App;
