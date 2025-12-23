import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "../src/pages/HomePage";
import MenuPage from "./pages/MenuPage";
import LocationsPage from "./pages/LocationsPage";
import AboutPage from "./pages/AboutPage";
import FranchisePage from "./pages/FranchisePage";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "menu":
        return <MenuPage />;
      case "locations":
        return <LocationsPage />;
      case "about":
        return <AboutPage />;
      case "franchise":
        return <FranchisePage />;
      default:
        return <HomePage navigate={setPage} />;
    }
  };

  return (
    <Layout activePage={page} navigate={setPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
