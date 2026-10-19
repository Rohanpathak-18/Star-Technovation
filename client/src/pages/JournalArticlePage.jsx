import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Brand from "../components/Brand.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";
import { articles } from "../data/siteContent.js";

export default function JournalArticlePage({ slug }) {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="article-page">
        <header className="legal-header">
          <Brand />
          <a className="underlined-link" href="/#journal">
            Back to the journal
          </a>
        </header>
        <div className="article-not-found">
          <SectionEyebrow>FIELD NOTES / NOT FOUND</SectionEyebrow>
          <h1>That note has gone quiet.</h1>
          <a className="button button-dark" href="/#journal">
            Return to the journal <ArrowLeft size={15} />
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="article-page">
      <header className="legal-header">
        <Brand />
        <a className="underlined-link" href="/#journal">
          Back to the journal
        </a>
      </header>

      <article className="article-detail">
        <SectionEyebrow>{article.category}</SectionEyebrow>
        <p className="article-detail-date">{article.date}</p>
        <h1>{article.title}</h1>
        <div className={`article-detail-art ${article.art}`} aria-hidden="true">
          <span>STAR TECHNOVATION / FIELD NOTE</span>
          <i aria-hidden="true"></i>
        </div>
        <div className="article-detail-body">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="underlined-link" href="/#contact">
            Continue the conversation <ArrowUpRight size={15} />
          </a>
        </div>
        <a className="article-back" href="/#journal">
          <ArrowLeft size={14} /> More field notes
        </a>
      </article>
    </main>
  );
}
