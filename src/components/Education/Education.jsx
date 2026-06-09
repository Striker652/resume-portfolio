import React from 'react';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import Section from '../UI/Section';
import Reveal from '../UI/Reveal';
import GlassCard from '../UI/GlassCard';

const Education = () => {
  return (
    <Section id="education" title={<span>Education <span className="text-accent">& Qualifications</span></span>}>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {resumeData.education.map((edu, index) => (
          <Reveal key={`${edu.degree}-${edu.university}`} index={index} className="h-full">
            <GlassCard className="text-center h-full flex flex-col items-center justify-center">
              <GraduationCap size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-textLight dark:text-slate-50 mb-2">
                {edu.degree}
              </h3>
              <p className="text-textDim dark:text-slate-400 mb-1">{edu.university}</p>
              <p className="text-accent font-medium text-sm">{edu.period}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Education;
