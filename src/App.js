
import "./App.css";
import './styles.css'
import myWonderfulImage from "./420-500x300.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}> 
        <h1 className="title red">Adem frigui</h1>
        <div className="spacepls">{"\n"}</div>
        <img src="/756-500x300.jpg" alt="profile1" />
        <div className="spacepls">{"\n"}</div>
        <img src={myWonderfulImage} alt ='profile2' />
      </div>
      <video width="320" height="240" controls>
 <source src="myVideo.mp4" type="video/mp4" />
            </video>
      </header>
    </div>
  );
}

export default App;
