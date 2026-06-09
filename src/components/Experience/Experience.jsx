import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import Section from '../UI/Section';
import GlassCard from '../UI/GlassCard';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experience" title={<span>Work <span className="text-accent">Experience</span></span>}>
      <div ref={containerRef} className="relative">
        {/* Animated Timeline Line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary dark:to-slate-950 rounded-full z-10"
        />

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + 0.2 }}
                  className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent border-4 border-primary dark:border-slate-950 z-20"
                />
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <Briefcase size={24} className="text-accent" />
                      <h3 className="text-xl font-bold text-textLight dark:text-slate-50">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-textDim dark:text-slate-400 text-sm">
                      <MapPin size={16} /> {exp.location} • {exp.period}
                    </div>
                  </div>
                  <p className="text-accent font-medium mb-4 flex items-center gap-2">
                    <Building2 size={16} /> {exp.company}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="text-textDim dark:text-slate-400 leading-relaxed flex items-start gap-3">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
