export default function Brand({ small = false }) {
  return (
    <a
      className={`brand ${small ? "brand-small" : ""}`}
      href="#home"
      aria-label="Star Technovation home"
    >
      <span className="brand-mark">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16 1.5 19.8 12.2 30.5 16l-10.7 3.8L16 30.5l-3.8-10.7L1.5 16l10.7-3.8L16 1.5Z" />
        </svg>
      </span>
      <span className="brand-name">
        STAR<span>TECHNOVATION</span>
      </span>
    </a>
  );
}
