import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import PlanPage from "./pages/PlanPage";
import ShoppingPage from "./pages/ShoppingPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="main">
        {currentPage === "home" && <HomePage/>}
        {currentPage === "recipes" && <RecipesPage/>}
        {currentPage === "plan" && <PlanPage/>}
        {currentPage === "shopping" && <ShoppingPage/>}
      </main>
    </div>
  );
}
