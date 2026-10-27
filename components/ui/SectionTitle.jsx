export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return <div className={`section-title ${center ? "text-center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
