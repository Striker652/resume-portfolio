import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, ExternalLink } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import Section from '../UI/Section';
import Reveal from '../UI/Reveal';
import GlassCard from '../UI/GlassCard';
import SkillBadge from '../UI/SkillBadge';

const Certification = () => {
  return (
    <Section
      id="certifications"
      title={
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <Trophy size={48} className="text-accent mx-auto" />
          </motion.div>
          <div className="text-4xl font-bold text-textLight dark:text-slate-50 mb-4">
            Certifications <span className="text-accent">& Achievements</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-textDim dark:text-slate-400 text-sm">
            <Star size={14} className="fill-accent text-accent" />
            <span>Validated Professional Credentials</span>
            <Star size={14} className="fill-accent text-accent" />
          </div>
        </div>
      }
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {resumeData.certifications.map((cert, index) => (
          <Reveal key={cert.title} index={index} className="h-full">
            <GlassCard className="group flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-textLight dark:text-slate-50 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-accent"
                    title="View Certificate"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-textDim dark:text-slate-400 mb-4">
                <span className="font-medium">{cert.issuer}</span>
                <span className="flex items-center gap-1 opacity-70">
                  <Trophy size={12} className="text-accent" />
                  {cert.period}
                </span>
              </div>
              <p className="text-textDim dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                {cert.description}
              </p>
              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-auto pt-4 border-t border-slate-700/50">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sIndex) => (
                      <SkillBadge key={skill} skill={skill} index={(index * 10) + sIndex} />
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Certification;
