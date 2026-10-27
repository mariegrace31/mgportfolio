import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import yetuImage from "@/app/assets/yetuqahwah.png";
import evogymImage from "@/app/assets/evogym.png";
import lkRecruitmentImage from "@/app/assets/lkrecruitment.png";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import BrandIcon from "@/components/ui/BrandIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

const projectImages = {
  yetu: yetuImage,
  evogym: evogymImage,
  lk: lkRecruitmentImage,
};

export default function Projects() {
  return <section id="projects" className="section section-projects"><Container>
    <div className="projects-heading"><SectionTitle eyebrow="SELECTED PROJECTS" title={<>Some of My <span className="gradient-text">Recent Work</span></>} description="A selection of projects shaped by collaboration, curiosity, and care."/></div>
    <p className="projects-note">These are selected projects I worked on as a freelancer; projects I built as part of an organization team are not included.</p>
    <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * .09}>
      <Card className="project-card">
        <div className={`project-visual visual-${project.visual}`}>
          <div className="project-image-frame"><Image src={projectImages[project.visual]} alt={`Screenshot of the ${project.title} website`} fill sizes="(max-width: 650px) 70vw, (max-width: 900px) 36vw, 28vw" className="project-image"/></div>
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-actions">
            <Button href={project.demo} className="project-action" target="_blank" rel="noreferrer">Demo <ArrowUpRight size={14}/></Button>
            <Button href={project.github} variant="outline" className="project-action" target="_blank" rel="noreferrer"><BrandIcon name="github" size={14}/> GitHub</Button>
          </div>
        </div>
      </Card>
    </Reveal>)}</div>
    <div className="carousel-dots" aria-label="Project slides"><span className="current"/><span/><span/></div>
  </Container></section>;
}
