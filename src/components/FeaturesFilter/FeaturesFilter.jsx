import "./FeaturesFilter.css";
import { motion } from "framer-motion";

function FeaturesFilter({ group, setGroup }) {
  const tabs = [
    { id: 0, label: "Online Banking" },
    { id: 1, label: "Financial Tools" },
    { id: 2, label: "Customer Support" },
  ];

  return (
    <div className="aa-features-filter">
      <div className="aa-filter LexendRegular" style={{ position: "relative", display: "inline-flex", gap: 12 }}>
        {tabs.map((t) => {
          const isActive = group === t.id;
          return (
            <button
              key={t.id}
              className={`aa-filter-button ${isActive ? "is-active" : ""}`}
              onClick={() => setGroup(t.id)}
              style={{ position: "relative" }}
            >
              <span>{t.label}</span>
              {isActive && (
                <motion.span
                  layoutId="aa-filter-underline"
                  style={{
                    position: "absolute",
                    left: 8,
                    right: 8,
                    bottom: -6,
                    height: 2,
                    borderRadius: 2,
                    background: "var(--button-keyworld-color)",
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 40 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default FeaturesFilter;
