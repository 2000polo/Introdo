import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./veiws/Home";

function App() {
  return (
    <main className="font-poppins">
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
