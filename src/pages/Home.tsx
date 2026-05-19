// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { Trophy, Users, Play, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-brand"
          >
            <Star size={12} className="fill-current" />
            Real-time Cricket Ecosystem
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter text-white"
          >
            Play <br /> Like a <br /> <span className="text-brand underline decoration-4 underline-offset-8">Pro.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-lg text-text-dim font-medium"
          >
            The comprehensive platform for tournament management, live scoring, and career-tracking player statistics.
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/tournaments" className="bg-brand text-black px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-brand/20">
              Explore Tournaments <Trophy size={18} />
            </Link>
            <Link to="/login" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Join the League
            </Link>
          </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-5 pointer-events-none hidden lg:block">
          <div className="grid grid-cols-4 h-full border-l border-white/10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-r border-white/10 relative">
                <div className="absolute inset-0 flex items-center justify-center text-[10vw] font-black italic opacity-20 select-none text-white">
                  CRIC
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Play />}
          title="Live Scoring"
          desc="Professional level ball-by-ball scoring system with real-time updates."
        />
        <FeatureCard 
          icon={<Users />}
          title="Team Management"
          desc="Create teams, add players, and manage your squad performance."
        />
        <FeatureCard 
          icon={<Calendar />}
          title="Tournaments"
          desc="Organize league matches, knockouts, and keep track of points tables."
        />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 bg-bg-secondary border border-white/5 rounded-2xl hover:border-brand/40 transition-all group"
    >
      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand group-hover:text-black transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold uppercase mb-2 tracking-tight text-white">{title}</h3>
      <p className="text-text-dim text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
