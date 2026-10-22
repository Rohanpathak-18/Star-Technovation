import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  LockKeyhole,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";
import Chart from "../Chart.jsx";
import SectionEyebrow from "../SectionEyebrow.jsx";
import { articles, plans, strategies } from "../../data/siteContent.js";

export function PrinciplesSection() {
  return (
    <section className="ticker-strip" aria-label="Platform principles">
      <div>
        <span className="ticker-dot" aria-hidden="true"></span> CLARITY OVER COMPLEXITY
      </div>
      <i className="ticker-dot" aria-hidden="true"></i>
      <div>
        <span className="ticker-dot" aria-hidden="true"></span> SYSTEMS WITH SOUL
      </div>
      <i className="ticker-dot" aria-hidden="true"></i>
      <div>
        <span className="ticker-dot" aria-hidden="true"></span> BUILT FOR THE LONG GAME
      </div>
      <i className="ticker-dot" aria-hidden="true"></i>
      <div className="ticker-last">
        <span className="ticker-dot" aria-hidden="true"></span> CLARITY OVER COMPLEXITY
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section intro-section" id="about">
      <div className="section-aside">
        <SectionEyebrow>A BETTER WAY TO PARTICIPATE</SectionEyebrow>
        <span className="vertical-note">
          THOUGHTFUL TOOLS. CLEARER DECISIONS.
        </span>
      </div>
      <div className="intro-content">
        <h2>
          The market moves fast.
          <br />
          Your process <em>shouldn’t wobble.</em>
        </h2>
        <div className="intro-bottom">
          <p>
            We build calm, considered algorithmic tools for traders who know
            that the work behind a decision matters just as much as the decision
            itself.
          </p>
          <a className="underlined-link" href="#products">
            A little about us <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section className="section product-section" id="products">
      <div className="section-heading">
        <div>
          <SectionEyebrow>THE STUDIO / YOUR TOOLKIT</SectionEyebrow>
          <h2>
            A desk that thinks
            <br />
            <em>alongside you.</em>
          </h2>
        </div>
        <p>
          Intuitive tools, transparent signals and a steady pulse on your risk.
          The things you need to do your best thinking.
        </p>
      </div>
      <div className="strategy-grid" id="portfolio">
        {strategies.map((s, i) => (
          <article className={`strategy-card strategy-${i}`} key={s.symbol}>
            <div className="strategy-top">
              <div>
                <span className="strategy-code">ST / 0{i + 1}</span>
                <h3>{s.name}</h3>
                <small>{s.tag}</small>
              </div>
              <button aria-label={`Open ${s.name} strategy`}>
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="strategy-chart">
              <Chart bars={s.bars} tone={s.tone} />
            </div>
            <div className="strategy-bottom">
              <div>
                <small>{s.symbol} / PAPER SIGNAL</small>
                <strong>{s.value}</strong>
              </div>
              <span className="gain">{s.delta}</span>
            </div>
            <div className="strategy-index">
              <span>0{i + 1}</span>
              <span>
                VIEW STRATEGY <ArrowUpRight size={12} />
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="product-foot">
        <span>
          <ShieldCheck size={17} /> Every signal comes with a risk context.
        </span>
        <a className="underlined-link" href="#contact">
          Take a closer look <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

export function ManifestoSection() {
  return (
    <section className="feature-wrap">
      <div className="feature-block">
        <div className="feature-kicker">
          <span>NOT ANOTHER BLACK BOX</span>
          <span>ST / MANIFESTO 01</span>
        </div>
        <div className="feature-main">
          <div className="feature-copy">
            <SectionEyebrow>OUR POINT OF VIEW</SectionEyebrow>
            <h2>
              Good systems
              <br />
              leave room for
              <br />
              <em>good sense.</em>
            </h2>
            <p>
              Automation should make you more thoughtful, not less. Every Star
              Technovation tool is designed to put context first and keep you in
              the loop.
            </p>
            <a className="button button-light" href="#about">
              How we think <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="feature-illustration">
            <div className="feature-grid"></div>
            <div className="feature-orbit big"></div>
            <div className="feature-orbit small"></div>
            <div className="feature-disc">
              <span>ST</span>
              <small>THOUGHT OVER THRUST</small>
            </div>
            <div className="feature-dot" aria-hidden="true"></div>
            <div className="feature-caption">FIG 01. / HUMAN × SYSTEM</div>
            <div className="floating-stat">
              <span>RISK EXPOSURE</span>
              <b>
                In your hands <i>↗</i>
              </b>
              <small>Guardrails on · Position open</small>
            </div>
          </div>
        </div>
        <div className="feature-footer">
          <span>BUILT ON THREE THINGS</span>
          <div>
            <i>01</i> Clarity
          </div>
          <div>
            <i>02</i> Context
          </div>
          <div>
            <i>03</i> Control
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ choosePlan }) {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading pricing-heading">
        <div>
          <SectionEyebrow>STRAIGHT TALK. CLEAR NUMBERS.</SectionEyebrow>
          <h2>
            A plan for how
            <br />
            <em>you think.</em>
          </h2>
        </div>
        <div className="pricing-side">
          <p>Choose a strategy plan with clear pricing. GST is additional.</p>
        </div>
      </div>
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <article
            key={p.name}
            className={`plan-card ${p.featured ? "featured" : ""}`}
          >
            <div className="plan-top">
              <span>{p.code}</span>
              {p.featured && <span className="popular">THE SWEET SPOT</span>}
            </div>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <div className="plan-price">
              <strong>{p.price}</strong>
            </div>
            <button
              className={`button ${p.featured ? "button-lime" : "button-outline"}`}
              type="button"
              onClick={() => choosePlan(p.name)}
            >
              {p.action}
              <ArrowUpRight size={15} />
            </button>
            <div className="plan-rule"></div>
            <small className="includes">WHAT’S INCLUDED</small>
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <Check size={14} />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        <LockKeyhole size={13} /> Prices are before 18% GST. Contact us to get
        started.
      </p>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="review-section">
      <div className="review-mark">“</div>
      <div className="review-content">
        <SectionEyebrow>A NOTE FROM THE COMMUNITY</SectionEyebrow>
        <blockquote>
          It’s the first time a trading tool has made me feel{" "}
          <em>more present,</em> not less. The guardrails alone changed how I
          show up to the market.
        </blockquote>
        <div className="review-by">
          <div className="review-avatar">SK</div>
          <div>
            <b>Shreya K.</b>
            <span>Independent trader · Bengaluru</span>
          </div>
          <span className="review-rating">★★★★★</span>
        </div>
      </div>
      <div className="review-side">
        <span>
          01 <i>/</i> 03
        </span>
        <div className="review-arrows">
          <button aria-label="Previous review">←</button>
          <button aria-label="Next review">→</button>
        </div>
      </div>
    </section>
  );
}

export function JournalSection() {
  return (
    <section className="section journal-section" id="journal">
      <div className="section-heading journal-heading">
        <div>
          <SectionEyebrow>THOUGHTS FROM THE DESK</SectionEyebrow>
          <h2>
            Worth a <em>pause.</em>
          </h2>
        </div>
        <a className="underlined-link" href="#contact">
          All field notes <ArrowRight size={15} />
        </a>
      </div>
      <div className="article-grid">
        {articles.map((a, i) => (
          <a key={a.slug} className="article-card" href={`/journal/${a.slug}`}>
            <div className={`article-art ${a.art}`}>
              <span className="article-art-number">0{i + 1}</span>
              {i === 0 ? (
                <div className="art-rings">
                  <i></i>
                  <i></i>
                  <i></i>
                  <b>ST</b>
                </div>
              ) : i === 1 ? (
                <div className="art-grid">
                  <b>
                    RISK
                    <br />
                    MAP
                  </b>
                  <i>↗</i>
                </div>
              ) : (
                <div className="art-sun">
                  <span>
                    VOLATILITY
                    <br />
                    IS A SIGNAL
                  </span>
                </div>
              )}
              <span className="article-art-mark" aria-hidden="true"></span>
            </div>
            <div className="article-meta">
              <span>{a.category}</span>
              <span>{a.date}</span>
            </div>
            <h3>{a.title}</h3>
            <span className="article-link">
              READ THE NOTE <ArrowUpRight size={13} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function NewsletterSection({ submit }) {
  return (
    <section className="newsletter-section">
      <div className="newsletter-stamp">
        <Mail size={18} />
      </div>
      <div className="newsletter-copy">
        <SectionEyebrow>A LETTER, NOT ANOTHER ALERT</SectionEyebrow>
        <h2>
          More signal in
          <br />
          your <em>inbox.</em>
        </h2>
        <p>
          One considered note on markets, systems and showing up with a plan.
          Never noise for the sake of it.
        </p>
      </div>
      <form
        className="newsletter-form"
        onSubmit={(e) => submit(e, "newsletter")}
      >
        <label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label>
        <div>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="you@somewhere.com"
            required
          />
          <button type="submit" aria-label="Subscribe">
            <ArrowRight size={18} />
          </button>
        </div>
        <small>
          By subscribing, you agree to our <a href="#legal">privacy policy</a>.
          Unsubscribe any time.
        </small>
      </form>
      <div className="newsletter-flower" aria-hidden="true"></div>
    </section>
  );
}

export function ContactSection({ submit, busy }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <SectionEyebrow>THE FIRST CONVERSATION IS ON US</SectionEyebrow>
        <h2>
          Start with
          <br />
          <em>a question.</em>
        </h2>
        <p>
          Curious about the platform? Have a specific use case in mind? Tell us
          a little about what you’re working on.
        </p>
        <div className="contact-direct">
          <a href="mailto:hello@startechnovation.com">
            <Mail size={15} /> hello@startechnovation.com
          </a>
          <a
            href="https://wa.me/910000000000?text=Hello%20Star%20Technovation"
            target="_blank"
            rel="noreferrer"
          >
            <span className="whatsapp-icon">◔</span> WhatsApp us{" "}
            <ArrowUpRight size={13} />
          </a>
          <span>
            <Clock3 size={14} /> Monday—Friday, 10:00—18:00 IST
          </span>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e) => submit(e, "contact")}>
        <div className="form-title">
          <span>01 / SAY HELLO</span>
          <span>~ 2 MINUTES</span>
        </div>
        <div className="form-row">
          <label>
            YOUR NAME
            <input
              name="name"
              placeholder="What should we call you?"
              required
            />
          </label>
          <label>
            EMAIL ADDRESS
            <input
              name="email"
              type="email"
              placeholder="you@somewhere.com"
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            PHONE <span>(OPTIONAL)</span>
            <input name="phone" placeholder="+91 00000 00000" />
          </label>
          <label>
            WHAT’S ON YOUR MIND?
            <select name="subject">
              <option>Platform enquiry</option>
              <option>Book a consultation</option>
              <option>Partnership</option>
              <option>Something else</option>
            </select>
          </label>
        </div>
        <label className="full-label">
          A LITTLE MORE CONTEXT
          <textarea
            name="message"
            rows="3"
            placeholder="A sentence or two is plenty…"
            required
          ></textarea>
        </label>
        <div className="form-submit">
          <span>
            <LockKeyhole size={13} /> Your details stay with us.
          </span>
          <button className="button button-dark" type="submit" disabled={busy}>
            {busy ? "Sending…" : "Send the note"} <Send size={14} />
          </button>
        </div>
      </form>
    </section>
  );
}
