import "./App.css";
import { BrowserRouter as Router, 
  Routes, 
  Route} 
  from "react-router-dom";
import MessageForm from "./components/form/MessageForm";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage";

function App() {
    return (
        <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={ <MessageForm /> }></Route>
                <Route path="/submitted" element={ <ConfirmationPage /> }></Route>
              </Routes>
            </Router>
        </div>
    );
}

export default App;
