import {
  ArrowUpRight,
  Command,
  Database,
  Fingerprint,
  Gauge,
  Layers3,
  Mail,
  Sparkles,
  WalletCards,
} from "lucide-react";
import Brand from "../components/Brand.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";

export default function AdminPage({ user, data, onLogin, onHome }) {
  if (!user)
    return (
      <div className="admin-gate">
        <div className="admin-card">
          <Brand />
          <SectionEyebrow>STUDIO CONTROL ROOM</SectionEyebrow>
          <h1>
            Make the
            <br />
            <em>work visible.</em>
          </h1>
          <p>The admin workspace is available to authorised studio accounts.</p>
          <button className="button button-dark" onClick={onLogin}>
            Sign in to continue <ArrowUpRight size={15} />
          </button>
          <button className="back-home" onClick={onHome}>
            ← Return to the site
          </button>
        </div>
      </div>
    );
  if (user.role !== "admin")
    return (
      <div className="admin-gate">
        <div className="admin-card">
          <Brand />
          <SectionEyebrow>PRIVATE WORKSPACE</SectionEyebrow>
          <h1>
            This corner is
            <br />
            <em>for the team.</em>
          </h1>
          <p>Your account is signed in, but it does not have admin access.</p>
          <button className="back-home" onClick={onHome}>
            ← Return to the site
          </button>
        </div>
      </div>
    );
  return (
    <div className="admin-app">
      <aside className="admin-sidebar">
        <Brand />
        <span className="admin-overline">WORKSPACE</span>
        <button className="admin-nav active">
          <Gauge size={16} /> Overview
        </button>
        <button className="admin-nav">
          <Database size={16} /> Enquiries <b>{data?.leads?.length || 0}</b>
        </button>
        <button className="admin-nav">
          <WalletCards size={16} /> Subscriptions
        </button>
        <button className="admin-nav">
          <Layers3 size={16} /> Content
        </button>
        <div className="admin-side-bottom">
          <div className="admin-profile">
            <span>{user.name?.slice(0, 1)}</span>
            <div>
              <b>{user.name}</b>
              <small>Studio administrator</small>
            </div>
          </div>
          <button className="back-home" onClick={onHome}>
            ← View public site
          </button>
        </div>
      </aside>
      <main className="admin-main">
        <div className="admin-topbar">
          <span>
            MONDAY, 19 OCTOBER 2026 <i>·</i> STUDIO OVERVIEW
          </span>
          <button>
            <Command size={15} /> {user.name}
          </button>
        </div>
        <div className="admin-heading">
          <div>
            <SectionEyebrow>THE CONTROL ROOM / 01</SectionEyebrow>
            <h1>
              Good morning,
              <br />
              <em>{user.name?.split(" ")[0]}.</em>
            </h1>
          </div>
          <span className="admin-live">
            <i aria-hidden="true"></i> ALL SYSTEMS NOMINAL
          </span>
        </div>
        <div className="admin-metrics">
          <div>
            <span>OPEN ENQUIRIES</span>
            <b>{data?.leads?.length ?? "—"}</b>
            <small>
              <ArrowUpRight size={13} /> Your latest conversations
            </small>
          </div>
          <div>
            <span>NEWSLETTER READERS</span>
            <b>{data?.subscribers ?? "—"}</b>
            <small>
              <Mail size={13} /> Thoughtful people, one list
            </small>
          </div>
          <div>
            <span>MEMBER ACCOUNTS</span>
            <b>{data?.users ?? "—"}</b>
            <small>
              <Fingerprint size={13} /> Studio members
            </small>
          </div>
        </div>
        <section className="admin-table">
          <div className="table-head">
            <div>
              <span>THE INBOX</span>
              <h2>Latest enquiries</h2>
            </div>
            <span className="table-source">
              <Database size={13} /> {data?.database || "Connecting…"}
            </span>
          </div>
          <div className="table-columns">
            <span>FROM</span>
            <span>SUBJECT</span>
            <span>TYPE</span>
            <span>RECEIVED</span>
          </div>
          {data?.leads?.length ? (
            data.leads.map((l, i) => (
              <div className="table-row" key={l._id || i}>
                <div>
                  <b>{l.name}</b>
                  <small>{l.email}</small>
                </div>
                <span>{l.subject}</span>
                <span className="lead-tag">{l.type || "enquiry"}</span>
                <span>{new Date(l.createdAt).toLocaleDateString()}</span>
              </div>
            ))
          ) : (
            <div className="empty-inbox">
              <span className="empty-inbox-dot" aria-hidden="true"></span>
              <b>The inbox is quiet.</b>
              <p>New enquiries and booking requests will appear here.</p>
            </div>
          )}
        </section>
        <div className="admin-note">
          <Sparkles size={15} />
          <span>
            <b>One practical note:</b> online checkout and live market data are
            ready to connect once you choose a provider. Demo subscriptions are
            not charged.
          </span>
        </div>
        <div className="admin-footer">
          STAR TECHNOVATION <span>PRIVATE STUDIO / ADMIN</span>
        </div>
      </main>
    </div>
  );
}
