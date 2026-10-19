import { Check, CircleHelp } from "lucide-react";

export default function Notification({ children, kind = "success" }) {
  return (
    <div className={`toast ${kind}`}>
      <span>
        {kind === "success" ? <Check size={15} /> : <CircleHelp size={15} />}
      </span>
      {children}
    </div>
  );
}
