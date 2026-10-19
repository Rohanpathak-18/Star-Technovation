import { ArrowUpRight, LockKeyhole, X } from "lucide-react";
import Brand from "./Brand.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function AuthModal({ mode, setMode, onClose, onSubmit, busy }) {
  const register = mode === "register";
  const booking = mode === "booking";
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="auth-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <Brand small />
        <SectionEyebrow>
          {booking
            ? "LET’S FIND A TIME"
            : register
              ? "YOUR NEXT CHAPTER"
              : "GOOD TO HAVE YOU BACK"}
        </SectionEyebrow>
        <h2>
          {booking ? (
            <>
              Book a <em>conversation.</em>
            </>
          ) : register ? (
            <>
              Make room for
              <br />
              <em>better decisions.</em>
            </>
          ) : (
            <>
              Welcome <em>back.</em>
            </>
          )}
        </h2>
        <p>
          {booking
            ? "Leave your details and we’ll suggest a few times to meet."
            : register
              ? "Create your account and find your rhythm."
              : "Sign in to your Star Technovation account."}
        </p>
        <form
          onSubmit={(e) =>
            onSubmit(
              e,
              booking ? "contact" : register ? "auth/register" : "auth/login",
              booking
                ? "Thanks — we’ll be in touch to arrange a time."
                : undefined,
            )
          }
        >
          {(register || booking) && (
            <label>
              FULL NAME
              <input name="name" placeholder="Your name" required />
            </label>
          )}
          <label>
            EMAIL ADDRESS
            <input
              type="email"
              name="email"
              placeholder="you@somewhere.com"
              required
            />
          </label>
          {!booking && (
            <label>
              PASSWORD
              <input
                type="password"
                name="password"
                minLength="8"
                placeholder="At least 8 characters"
                required
              />
            </label>
          )}
          {booking && (
            <>
              <input type="hidden" name="subject" value="Book a consultation" />
              <input type="hidden" name="type" value="booking" />
              <label>
                WHAT WOULD YOU LIKE TO DISCUSS?
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us what you’re exploring…"
                  required
                />
              </label>
            </>
          )}
          <button className="button button-dark modal-submit" disabled={busy}>
            {busy
              ? "One moment…"
              : booking
                ? "Request a time"
                : register
                  ? "Create my account"
                  : "Sign in"}{" "}
            <ArrowUpRight size={15} />
          </button>
        </form>
        {!booking && (
          <div className="modal-switch">
            {register ? "Already have an account?" : "New to the studio?"}{" "}
            <button onClick={() => setMode(register ? "login" : "register")}>
              {register ? "Sign in" : "Create an account"}
            </button>
          </div>
        )}
        {booking && (
          <small className="modal-helper">
            <LockKeyhole size={12} /> We’ll only use your details to arrange the
            conversation.
          </small>
        )}
      </div>
    </div>
  );
}
