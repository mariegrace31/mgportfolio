import Link from "next/link";
export default function Button({ children, href = "#contact", variant = "gradient", className = "", ...props }) {
  const classes = `button button-${variant} ${className}`;
  return href ? <Link href={href} className={classes} {...props}>{children}</Link> : <button className={classes} {...props}>{children}</button>;
}
