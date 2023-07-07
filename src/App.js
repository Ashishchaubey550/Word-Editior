import Navbar from './Components/Navbar';
import './App.css';
import Textarea from './Components/Textarea';
import About from './Components/About';
function App() {
  return (
        <>
        <Navbar title = "TEXTEDIT"/>
        <div className="container mb-3">
        <Textarea heading = "Enter your text to analyze"/>
        </div>
        </>
  );
}

export default App;
