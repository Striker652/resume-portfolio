import { Code, Database, Cloud, Layers, Server, Cpu } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import Section from '../UI/Section';
import GlassCard from '../UI/GlassCard';
import SkillBadge from '../UI/SkillBadge';

const skillIcons = {
  "Programming Languages": Code,
  "Web Technologies": Server,
  "Web Frameworks": Layers,
  "Databases": Database,
  "Cloud Services": Cloud,
  "Technologies": Cpu
};

const About = () => {
  return (
    <Section id="about" title={<span>About <span className="text-accent">Me</span></span>}>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-textLight dark:text-slate-50 mb-6">Professional Summary</h3>
          <p className="text-textDim dark:text-slate-400 leading-relaxed text-lg">
            {resumeData.summary}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-textLight dark:text-slate-50 mb-6">Technical Expertise</h3>
          <div className="space-y-6">
            {resumeData.skills.map((skillGroup, groupIndex) => {
              const IconComponent = skillIcons[skillGroup.category] || Code;

              // Calculate starting index for this group to maintain stagger animation
              const startIdx = resumeData.skills
                .slice(0, groupIndex)
                .reduce((acc, group) => acc + group.items.length, 0);

              return (
                <GlassCard key={skillGroup.category} className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent size={20} className="text-accent" />
                    <h4 className="text-textLight dark:text-slate-50 font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIndex) => (
                      <SkillBadge key={skill} skill={skill} index={startIdx + sIndex} />
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
