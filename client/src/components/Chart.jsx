export default function Chart({ bars, tone = "purple" }) {
  const points = bars
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"}${index * (240 / (bars.length - 1))} ${78 - point * 0.72}`,
    )
    .join(" ");
  return (
    <div className={`sparkline ${tone}`} aria-hidden="true">
      <svg viewBox="0 0 240 82" preserveAspectRatio="none">
        <path
          className="chart-fill"
          d={`M0 75 ${points.replace("M", "L")} L240 82 L0 82 Z`}
        />
        <path className="chart-line" d={points} />
      </svg>
    </div>
  );
}
