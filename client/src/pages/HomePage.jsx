import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Command,
  Database,
  Fingerprint,
  Gauge,
  Headphones,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  Moon,
  MoveUpRight,
  Play,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  TrendingUp,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import Brand from "../components/Brand.jsx";
import AuthModal from "../components/AuthModal.jsx";
import AdminPage from "./AdminPage.jsx";
import Chart from "../components/Chart.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";
import Notification from "../components/Notification.jsx";
import {
  AboutSection,
  ContactSection,
  JournalSection,
  ManifestoSection,
  NewsletterSection,
  PlatformSection,
  PrinciplesSection,
  PricingSection,
  ReviewsSection,
} from "../components/sections/index.jsx";
import { api } from "../services/api.js";

const initialUser = (() => {
  try {
    return JSON.parse(localStorage.getItem("st-user") || "null");
  } catch {
    return null;
  }
})();

export default function HomePage() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("st-theme") === "dark",
  );
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState("");
  const [user, setUser] = useState(initialUser);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [admin, setAdmin] = useState(location.pathname === "/admin");
  const [adminData, setAdminData] = useState(null);
  const [notifyOpen, setNotifyOpen] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("st-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 4200);
    return () => clearTimeout(t);
  }, [notice]);
  useEffect(() => {
    if (admin && user?.role === "admin")
      api
        .adminOverview()
        .then(setAdminData)
        .catch(() => {});
  }, [admin, user]);
  const submit = async (e, route, success) => {
    e.preventDefault();
    setBusy(true);
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const body = Object.fromEntries(form.entries());
    try {
      const result =
        route === "contact"
          ? await api.submitContact(body)
          : route === "newsletter"
            ? await api.subscribe(body)
            : route === "auth/register"
              ? await api.register(body)
              : await api.login(body);
      if (result.token) {
        localStorage.setItem("st-token", result.token);
        localStorage.setItem("st-user", JSON.stringify(result.user));
        setUser(result.user);
        setAdmin(
          location.pathname === "/admin" && result.user.role === "admin",
        );
      }
      setNotice(success || result.message || "Welcome to Star Technovation.");
      setModal("");
      formElement.reset();
    } catch (err) {
      setNotice(err.message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };
  const openAuth = (mode) => {
    setModal(mode);
    setMenu(false);
  };
  const choosePlan = () => setModal("booking");
  if (admin)
    return (
      <AdminPage
        user={user}
        data={adminData}
        onLogin={() => {
          setAdmin(false);
          openAuth("login");
        }}
        onHome={() => {
          history.pushState({}, "", "/");
          setAdmin(false);
        }}
      />
    );
  return (
    <main className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true"></span> MARKET NOTE 07{" "}
        <span className="announcement-divider">/</span> Discipline is a
        strategy, too.{" "}
        <a href="#journal">
          Read the letter <ArrowRight size={12} />
        </a>
        <button
          onClick={() => setNotifyOpen(!notifyOpen)}
          aria-label="Notifications"
        >
          <Radio size={14} />
        </button>
        {notifyOpen && (
          <div className="notification-pop">
            <b>On your radar</b>
            <p>
              <span aria-hidden="true"></span> New: May market letter is here.
            </p>
            <p>
              <span aria-hidden="true"></span> Explore our automated strategy plans.
            </p>
          </div>
        )}
      </div>
      <header className="header">
        <Brand />
        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>
          <a href="#products" onClick={() => setMenu(false)}>
            Platform
          </a>
          <a href="#portfolio" onClick={() => setMenu(false)}>
            Portfolio
          </a>
          <a href="#journal" onClick={() => setMenu(false)}>
            Journal
          </a>
          <a href="#pricing" onClick={() => setMenu(false)}>
            Pricing
          </a>
          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Switch colour theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          {user ? (
            <button
              className="user-pill"
              onClick={() => {
                setNotice(`Welcome back, ${user.name}.`);
              }}
            >
              {user.name?.split(" ")[0]} <ChevronDown size={13} />
            </button>
          ) : (
            <button className="login-link" onClick={() => openAuth("login")}>
              Log in
            </button>
          )}
          <a className="button button-dark header-cta" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <SectionEyebrow>ALGORITHMIC TRADING, WITH INTENTION</SectionEyebrow>
          <h1>
            Less noise.
            <br />
            <span>More conviction.</span>
          </h1>
          <p className="hero-lead">
            Thoughtfully built trading systems for people who believe good
            decisions start long before the market opens.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#products">
              Explore the platform <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href="#about">
              <span className="play-button">
                <Play size={12} fill="currentColor" />
              </span>{" "}
              Meet our approach
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <i>R</i>
              <i>A</i>
              <i>M</i>
              <i>+</i>
            </div>
            <div>
              <strong>Built for a thoughtful crowd</strong>
              <span>People before positions.</span>
            </div>
          </div>
          <div className="hero-footnote">
            <span>01—04</span> SYSTEMATIC BY DESIGN
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-noise"></div>
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-sun"></div>
          <div className="crosshair crosshair-a" aria-hidden="true"></div>
          <div className="crosshair crosshair-b" aria-hidden="true"></div>
          <div className="visual-label label-top">
            <span>ST / 01</span>
            <span>LIVE SYSTEMS</span>
          </div>
          <div className="visual-label label-bottom">
            <span>DISCIPLINE / 26°</span>
            <span>EST. 2020</span>
          </div>
          <div className="floating-card market-card">
            <div className="market-card-head">
              <div>
                <small>STRATEGY SNAPSHOT</small>
                <strong>
                  NIFTY 50{" "}
                  <span className="live-chip">
                    <i></i> LIVE
                  </span>
                </strong>
              </div>
              <button aria-label="Open strategy details">
                <MoveUpRight size={15} />
              </button>
            </div>
            <div className="market-numbers">
              <strong>21,647.30</strong>
              <span className="positive">
                +1.24% <ArrowUpRight size={13} />
              </span>
            </div>
            <Chart
              bars={[25, 39, 34, 52, 44, 65, 58, 72, 64, 83, 74, 96]}
              tone="purple"
            />
            <div className="card-footer">
              <span>ORBIT / OPENING RANGE</span>
              <span>09:15 — 15:30 IST</span>
            </div>
          </div>
          <div className="floating-card note-card">
            <span className="note-icon">
              <Zap size={16} />
            </span>
            <div>
              <b>Risk, by design.</b>
              <small>Guardrails are always on.</small>
            </div>
            <Check size={15} />
          </div>
          <div className="ring-stamp">
            ST<span>TRADE WITH INTENTION</span>
          </div>
        </div>
      </section>

      <PrinciplesSection />

      <AboutSection />

      <PlatformSection />

      <ManifestoSection />

      <PricingSection
        choosePlan={choosePlan}
      />

      <ReviewsSection />

      <JournalSection />

      <NewsletterSection submit={submit} />

      <ContactSection submit={submit} busy={busy} />

      <footer className="footer" id="legal">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              A more considered way
              <br />
              to meet the markets.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>THE STUDIO</span>
              <a href="#about">About us</a>
              <a href="#products">Platform</a>
              <a href="#pricing">Pricing</a>
              <a href="#journal">Field notes</a>
            </div>
            <div>
              <span>THE DETAILS</span>
              <a href="/privacy">Privacy policy</a>
              <a href="/terms">Terms of use</a>
              <a href="/risk-disclosure">Risk disclosure</a>
              <a href="mailto:hello@startechnovation.com">Get in touch</a>
              <span className="footer-contact-detail">Noida, Sector 63</span>
              <a href="tel:+919682445183">Compliance: +91 96824 45183</a>
            </div>
            <div>
              <span>FIND US</span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 STAR TECHNOVATION. BUILT WITH INTENTION.</span>
          <span className="risk-copy">
            Trading involves risk. Past performance does not guarantee future
            results.
          </span>
          <button
            onClick={() => {
              history.pushState({}, "", "/admin");
              setAdmin(true);
              window.scrollTo(0, 0);
            }}
          >
            ADMIN <ArrowUpRight size={11} />
          </button>
          <span>
            MADE FOR THE LONG GAME <i className="footer-dot" aria-hidden="true"></i>
          </span>
        </div>
      </footer>

      {notice && <Notification>{notice}</Notification>}
      {modal && (
        <AuthModal
          mode={modal}
          setMode={setModal}
          onClose={() => setModal("")}
          onSubmit={submit}
          busy={busy}
        />
      )}
    </main>
  );
}
