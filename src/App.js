import "./App.css";
import Header from "./components/Header/index.jsx";
import Main from './pages/main/index';
import Routes from "./routes"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes/>
    </div>
  );
}

export default App;
