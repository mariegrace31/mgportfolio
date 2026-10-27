import { BriefcaseBusiness, Heart, Layers3, UsersRound } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import IconTile from "@/components/ui/IconTile";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

const icons={briefcase:BriefcaseBusiness,layers:Layers3,users:UsersRound,heart:Heart};

export default function About(){
  return <section id="about" className="section section-about"><Container className="about-grid">
    <Reveal><SectionTitle eyebrow="A LITTLE ABOUT ME" title={<>I'm a tech-loving <span className="gradient-text">software engineer</span></>} description="I'm passionate about coding, problem-solving, and collaborating with global peers to build innovative solutions. I strongly believe in lifelong learning, which is why I'm always excited to learn new things and improve myself. Feel free to explore my portfolio to see my work and experience. If you like what you see and have a project in mind, don't hesitate to reach out. Let's create something amazing together!"/></Reveal>
    <div className="stats-grid">{stats.map((s,i)=>{const Icon=icons[s.icon];return <Reveal key={s.label} delay={i*.07}><Card className="stat-card"><IconTile><Icon size={20}/></IconTile><strong>{s.value}</strong><span>{s.label}</span></Card></Reveal>})}</div>
  </Container></section>;
}
