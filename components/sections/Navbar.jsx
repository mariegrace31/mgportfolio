"use client";

import { useEffect, useState } from "react";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

const links = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Blog", "blog"], ["Contact", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: "-35% 0px -55% 0px" });
    links.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <>
    <header className="navbar">
      <div className="container-shell nav-inner">
        <a href="#home" className="brand" aria-label={`${site.name} home`}><span className="brand-mark"><Code2 size={18}/></span>{site.name}<span className="brand-period">.</span></a>
        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation" id="main-navigation">
          {links.map(([label, id]) => <a key={id} className={active === id ? "nav-link active" : "nav-link"} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button-gradient nav-hire" href="#contact" onClick={() => setOpen(false)}>Hire Me <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
    <button className={`mobile-nav-backdrop ${open ? "is-visible" : ""}`} type="button" aria-label="Close navigation menu" aria-hidden={!open} disabled={!open} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}/>
  </>;
}
