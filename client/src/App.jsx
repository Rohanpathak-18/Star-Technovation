import HomePage from "./pages/HomePage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import JournalArticlePage from "./pages/JournalArticlePage.jsx";

export default function App() {
  const legalPage = location.pathname.slice(1);

  if (["privacy", "terms", "risk-disclosure"].includes(legalPage)) {
    return <LegalPage page={legalPage} />;
  }

  if (location.pathname.startsWith("/journal/")) {
    return <JournalArticlePage slug={location.pathname.split("/").pop()} />;
  }

  return <HomePage />;
}
