import { HomeIcon } from "./Icons";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">

      <div className="nav-links">
        <NavButton
          page="home"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          icon={<HomeIcon size={40} />}
        />

        <NavButton
          label="Recipes"
          page="recipes"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <NavButton
          label="Plan"
          page="plan"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <NavButton
          label="Shopping List"
          page="shopping"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </nav>
  );
}


function NavButton({ label, icon, page, currentPage, setCurrentPage }) {
  const isActive = currentPage === page;

  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`nav-button ${isActive ? "active" : ""}`}
      aria-label={label || page}
    >
      {icon && <span className="nav-icon">{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
}