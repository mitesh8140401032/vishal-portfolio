
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { useTypewriter } from 'react-simple-typewriter';
import Aboout from './Aboout';
import Skils from './Skils';
import Contect from './Contect';



function App() {
  const { text } = useTypewriter({
    words: ["WebDevloper", "Webdiginer"],
    loop:{},
  })
  return (
   
    <>
      < Header />
      < Home />
      < Aboout />
      < Skils />
      <Contect />
    </>
  );
}

export default App;
