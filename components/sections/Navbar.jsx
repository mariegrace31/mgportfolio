"use client";
import { useEffect, useState } from "react";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
const links = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Blog", "blog"], ["Contact", "contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-35% 0px -55% 0px" });
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <header className="navbar"><div className="container-shell nav-inner"><a href="#home" className="brand" aria-label={`${site.name} home`}><span className="brand-mark"><Code2 size={18}/></span>{site.name}<span className="brand-period">.</span></a><nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">{links.map(([label,id])=><a key={id} className={active===id?"nav-link active":"nav-link"} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}<a className="button button-gradient nav-hire" href="#contact" onClick={()=>setOpen(false)}>Hire Me <ArrowUpRight size={15}/></a></nav><button className="menu-toggle" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}
