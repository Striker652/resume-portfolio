import React from 'react';
import { ExternalLink, Cpu, Globe, Database } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Section from '../UI/Section';
import Reveal from '../UI/Reveal';
import GlassCard from '../UI/GlassCard';

const tw = (...input) => twMerge(clsx(input));

const ProjectCard = ({ project, index, IconComponent }) => {
  const isClickable = !!project.link;
  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <IconComponent
            size={24}
            className="text-accent group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <h3 className="text-xl font-bold text-textLight dark:text-slate-50">{project.name}</h3>
        </div>
        {isClickable && <ExternalLink size={20} className="text-textDim dark:text-slate-400 group-hover:text-accent transition-colors duration-300" />}
      </div>

      <div className="text-xs text-accent/80 font-medium mb-3">
        {project.techStack}
      </div>

      <p className="text-textDim dark:text-slate-400 leading-relaxed mb-4">
        {project.description}
      </p>

      <ul className="space-y-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="text-textDim dark:text-slate-400 text-sm flex items-start gap-2">
            <span className="text-accent mt-1">✓</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <Reveal index={index}>
      <GlassCard className={tw("h-full w-full", isClickable ? "cursor-pointer" : "cursor-default")}>
        {isClickable ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
            {CardContent}
          </a>
        ) : (
          CardContent
        )}
      </GlassCard>
    </Reveal>
  );
};

const Projects = () => {
  const projectIcons = [Cpu, Globe, Database];

  return (
    <Section id="projects" title={<span>Featured <span className="text-accent">Projects</span></span>}>
      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            IconComponent={projectIcons[index % projectIcons.length]}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
