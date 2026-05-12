import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Flame, 
  Zap, 
  Target, 
  Dumbbell, 
  Sparkles, 
  Brain, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  Star,
  ArrowRight,
  BookOpen,
  Apple,
  Trophy,
  Users
} from 'lucide-react';
import { TESTIMONIALS, FAQS, FEATURES, BONUSES } from './constants';

const TrustBar = () => (
  <div className="bg-[#0f121d] py-2 border-b border-white/5 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] md:text-xs font-badge uppercase tracking-widest text-brand-gold/80">
        <span className="flex items-center gap-1">🔥 2,445 mujeres ya están desinflando sus cuerpos</span>
        <span className="hidden md:inline text-white/20">|</span>
        <span className="flex items-center gap-1">⭐ Valoración 4.9/5</span>
        <span className="hidden md:inline text-white/20">|</span>
        <span className="flex items-center gap-1">🛡️ Garantía de 30 días</span>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-4">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
          <LeafIcon className="text-brand-bg w-6 h-6" />
        </div>
        <span className="font-heading font-bold text-xl tracking-tight hidden sm:block uppercase">SISTEMA <span className="text-brand-gold">ANTIINFLAMATORIO</span></span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-badge border border-brand-gold/20">
          EDICIÓN ESPECIAL 2024
        </span>
        <button className="cta-primary px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap">
                onClick={() => window.open("https://pay.hotmart.com/L105785496G", '_blank')}
        >
  QUIERO MI ACCESO
</button>
      </div>
    </div>
  </header>
);

const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3 2 7h-2c0-1.5-1.5-3-1.5-3-1.5 1-3.5 1-3.5 1M9 20a7 7 0 0 1-7-7c0-1.5 1.5-3 1.5-3 1.5 1 3.5 1 3.5 1M9 20c1.2-1.2 2-3 2-5s-.8-3.8-2-5" />
  </svg>
);

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-coral/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
    
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-gold text-brand-bg rounded-md text-xs font-bold font-badge mb-6 tracking-wide uppercase">
            EDICIÓN ESPECIAL
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-[1.1] headline-gradient">
            Desinflama Tu Cuerpo y Consigue un <span className="text-brand-gold">Abdomen Plano</span> en Solo 14 Días
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl">
            El Sistema de Nutrición Antiinflamatoria Progresiva que ayuda a mujeres a eliminar la hinchazón constante, recuperar su energía y volver a sentirse cómodas en su propio cuerpo.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              "Abdomen visiblemente menos hinchado",
              "Digestión perfecta sin gases ni malestar",
              "Energía constante durante todo el día",
              "Recetas deliciosas en menos de 20 minutos"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <button className="cta-primary w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3">
                  onClick={() => window.open("https://pay.hotmart.com/L105785496G", '_blank')}
            QUIERO DESINFLAMAR MI CUERPO AHORA
                  <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-8 flex items-center gap-4 text-xs text-brand-gold/60 font-badge">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Pago 100% Seguro</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> Garantía Total 30 Días</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 premium-card p-4 rounded-radius-premium transform lg:rotate-3 shadow-[0_30px_60px_-15px_rgba(244,196,48,0.2)]">
             <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop" 
              alt="Sistema Antiinflamatorio" 
              className="rounded-xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 -right-10 transform translate-y-[-50%] bg-[#2c3345]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hidden xl:block">
              <p className="text-brand-gold text-2xl font-bold mb-1">14 DÍAS</p>
              <p className="text-xs uppercase tracking-widest text-white/60">RETO ABODMEN PLANO</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-bg px-6 py-4 rounded-2xl shadow-2xl hidden xl:block">
              <p className="text-sm font-bold">ACCESO INMEDIATO</p>
            </div>
          </div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-24 h-24 bg-brand-gold/20 blur-2xl rounded-full"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const WhyDifferent = () => (
  <section id="features" className="py-32 bg-brand-secondary/30 relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">¿Por qué este sistema es <span className="text-brand-gold">diferente</span>?</h2>
        <p className="text-gray-400 text-lg italic">
          "La inflamación crónica es la raíz de la hinchazón y fatiga que experimentas. Hemos diseñado la solución para atacar la causa desde la raíz."
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Apple />, title: "Nutrición Real", desc: "Sin ingredientes exóticos o costosos. Todo lo encuentras en el mercado local.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&h=250&auto=format&fit=crop" },
          { icon: <Clock />, title: "Rapidez", desc: "Recetas preparadas en menos de 20 minutos, adaptadas a tu vida ocupada.", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&h=250&auto=format&fit=crop" },
          { icon: <BookOpen />, title: "Hoja de Ruta", desc: "Planificador de 14 días paso a paso. Sabrás exactamente qué hacer cada día.", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=400&h=250&auto=format&fit=crop" },
          { icon: <Target />, title: "Foco Científico", desc: "Basado en alimentos que desactivan las vías inflamatorias del cuerpo.", img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400&h=250&auto=format&fit=crop" },
          { icon: <Users />, title: "Comunidad", desc: "Más de 15,000 mujeres ya han transformado su relación con su cuerpo.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&h=250&auto=format&fit=crop" },
          { icon: <ShieldCheck />, title: "Seguridad", desc: "Sin suplementos riesgosos ni dietas extremas que dañen tu salud.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=250&auto=format&fit=crop" }
        ].map((feature, i) => (
          <div key={i} className="premium-card overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent" />
              <div className="absolute bottom-4 left-6 w-12 h-12 bg-brand-green/20 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-green border border-brand-green/30">
                {feature.icon}
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading font-bold text-xl mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsGrid = () => (
  <section className="py-32">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 leading-tight">
            Lograrás resultados que <span className="text-brand-gold">sentirás</span> desde la primera semana
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feat, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0">
                  {feat.icon === 'Flame' && <Flame size={20} />}
                  {feat.icon === 'Zap' && <Zap size={20} />}
                  {feat.icon === 'Target' && <Target size={20} />}
                  {feat.icon === 'Dumbbell' && <Dumbbell size={20} />}
                  {feat.icon === 'Sparkles' && <Sparkles size={20} />}
                  {feat.icon === 'Brain' && <Brain size={20} />}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gold mb-1">{feat.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden glass-effect p-2">
            <img 
              src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1000&auto=format&fit=crop" 
              alt="Salud Femenina" 
              className="rounded-xl w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:right-10 bg-brand-gold p-8 rounded-radius-premium shadow-2xl text-brand-bg max-w-[280px]">
            <p className="text-3xl font-bold mb-2">98%</p>
            <p className="text-sm font-semibold leading-tight">De las mujeres recomiendan este sistema a sus amigas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PriceSection = () => (
  <section className="py-32 bg-brand-secondary/50">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-4xl mb-6">¡No pierdas esta oportunidad!</h2>
        <p className="text-gray-400 italic font-medium uppercase tracking-widest text-xs">Únete a miles de mujeres latinas que ya están transformando su vida.</p>
      </div>
      
      <div className="premium-card rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(244,196,48,0.1)]">
        <div className="md:w-1/2 p-10 lg:p-16">
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-gold w-6 h-6" />
              <span className="text-lg font-medium">Planificador 14 Días (Full)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-gold w-6 h-6" />
              <span className="text-lg font-medium">Recetario Base Integral</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-gold w-6 h-6" />
              <span className="text-lg font-medium">3 Bonos Premium Gratuitos</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-gold w-6 h-6" />
              <span className="text-lg font-medium">Acceso de por vida</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-gray-500 line-through text-2xl font-badge">US$ 47.00</span>
            <span className="text-brand-gold text-6xl font-bold font-heading">US$ 12</span>
          </div>
          <p className="text-brand-gold/60 text-sm font-badge mb-10">PAGO ÚNICO • ACCESO INMEDIATO</p>
          
          <button className="cta-primary w-full py-6 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 group">
                  onClick={() => window.open("https://pay.hotmart.com/L105785496G", '_blank')}
          > 
            QUIERO MI ACCESO AHORA
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="md:w-1/2 bg-white/5 relative flex items-center justify-center p-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" 
            alt="Grupo de mujeres saludables" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center">
            <ShieldCheck className="w-16 h-16 text-brand-gold mx-auto mb-6" />
            <p className="text-3xl font-bold text-white mb-2">30 DÍAS</p>
            <p className="text-xs font-badge uppercase tracking-[4px] mb-8 text-brand-gold">Garantía Total</p>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
            <p className="mt-8 text-gray-400 text-sm max-w-[240px] leading-relaxed mx-auto italic">
              Si no ves resultados en 30 días, te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

interface TestimonialCardProps {
  testi: typeof TESTIMONIALS[0];
  index: number;
  key?: number | string;
}

const TestimonialCard = ({ testi, index }: TestimonialCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="premium-card p-10 rounded-radius-premium relative group border-white/5 flex flex-col h-full"
  >
    <div className="flex gap-1 mb-6">
      {[...Array(testi.rating)].map((_, i) => (
        <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
      ))}
    </div>
    <p className="text-gray-300 italic mb-8 leading-relaxed flex-grow">"{testi.text}"</p>
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
      <img 
        src={testi.image} 
        alt={testi.name} 
        className="w-14 h-14 rounded-full border-2 border-brand-green/30 object-cover shadow-lg"
        referrerPolicy="no-referrer"
      />
      <div>
        <p className="font-bold text-white text-lg">{testi.name}, {testi.age}</p>
        <p className="text-xs text-brand-gold/60 font-badge font-bold uppercase tracking-widest">{testi.location}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <span className="text-brand-gold font-badge text-sm tracking-[5px] uppercase mb-4 block">Lo que dicen nuestras clientas</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl">Resultados que inspiran</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testi, i) => (
          <TestimonialCard key={i} testi={testi} index={i} />
        ))}
      </div>
      
      <div className="mt-20 premium-card p-10 text-center rounded-[40px] max-w-4xl mx-auto border-brand-gold/20 bg-brand-gold/5">
        <p className="text-2xl md:text-3xl font-heading font-semibold leading-relaxed text-white">
          "Más de <span className="text-brand-gold underline decoration-brand-gold/30 underline-offset-8 font-bold">15,000 mujeres</span> ya han transformado su relación con la comida y su cuerpo"
        </p>
      </div>
    </div>
  </section>
);

const IdealForYou = () => (
  <section className="py-32 bg-brand-bg relative">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center sm:justify-start">
          <div className="p-3 bg-brand-gold/10 rounded-2xl border border-brand-gold/20 flex items-center justify-center">
            <Star className="text-brand-gold w-8 h-8 fill-brand-gold/20" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl">Ideal para ti si quieres:</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Vida sin inflamación", desc: "Acabar con esa pesadez constante después de cada comida de forma natural." },
            { title: "Abdomen plano", desc: "Reducir medidas sin recurrir a fajas o cirugías invasivas." },
            { title: "Energía explosiva", desc: "Despertar descansada y mantener el ritmo todo el día sin fatiga." },
            { title: "Digestión ligera", desc: "Eliminar el estreñimiento y los gases de forma inmediata." },
            { title: "Salud a largo plazo", desc: "Un sistema sostenible que puedas seguir sin esfuerzo ni restricciones." },
            { title: "Confianza total", desc: "Sentirte orgullosa de cómo te ves frente al espejo cada mañana." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-brand-gold/30 hover:bg-white/[0.05] transition-all group">
              <div className="w-8 h-8 rounded-full border-2 border-brand-gold flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg transition-colors shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ValueStack = () => (
  <section className="py-32 relative overflow-hidden bg-brand-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">¿Qué recibirás al unirte?</h2>
        <p className="text-gray-400 font-medium">Todo el arsenal necesario para desinflamar tu cuerpo de forma definitiva.</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="premium-card p-10 rounded-[32px] border-brand-gold/20 shadow-none">
          <h3 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
             <BookOpen className="text-brand-gold" /> Lo que aprenderás
          </h3>
          <div className="space-y-6">
            {[
              "Fundamentos de la nutrición antiinflamatoria real",
              "Los 5 alimentos 'veneno' que debes evitar hoy mismo",
              "Timing metabólico: Cuándo comer para optimizar tu digestión",
              "Superalimentos locales con poder curativo real",
              "Gestión de antojos y hambre emocional",
              "Protocolo de mantenimiento post-14 días"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(244,196,48,0.5)]" />
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-8 rounded-[32px] bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20 flex gap-6 items-center group hover:from-brand-gold/20 transition-all cursor-default">
            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-bg shrink-0 shadow-lg">
              <Trophy size={32} />
            </div>
            <div>
              <p className="text-brand-gold font-badge text-[10px] uppercase tracking-widest mb-1 font-bold">ESTRELLA DEL SISTEMA</p>
              <h4 className="text-xl md:text-2xl font-bold">Planificador 14 Días Imprimible</h4>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {BONUSES.map((bonus) => (
              <div key={bonus.id} className="premium-card rounded-2xl border-white/5 relative overflow-hidden group hover:border-brand-green/40 transition-all flex flex-col">
                <div className="h-32 relative overflow-hidden">
                  <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent" />
                  <div className="absolute top-2 right-2 bg-brand-coral px-3 py-1 text-[10px] font-bold text-white uppercase tracking-tighter rounded shadow-lg">GRATIS</div>
                </div>
                <div className="p-6">
                  <h5 className="font-bold mb-1 text-brand-green font-badge text-[10px] uppercase tracking-widest">BONO #{bonus.id}</h5>
                  <p className="text-sm font-bold mb-2 leading-tight min-h-[40px]">{bonus.title}</p>
                  <p className="text-[10px] text-gray-500 mb-4 line-clamp-2">{bonus.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <p className="text-white/40 text-[10px] line-through uppercase tracking-widest font-badge">VALOR ${bonus.value}</p>
                    <span className="text-brand-green text-[10px] font-bold font-badge uppercase tracking-widest">Incluido</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section className="py-32 bg-brand-secondary/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4 flex items-center justify-center gap-4">
            <span className="text-brand-gold">❓</span> Preguntas Frecuentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/5 bg-brand-secondary/40">
              <button 
                onClick={() => setOpenIndex(prev => prev === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between group transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className={`font-heading font-bold transition-colors ${openIndex === i ? 'text-brand-gold' : 'text-gray-200'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`transition-transform duration-300 text-brand-gold ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-brand-gold/40 ml-1 mb-4 mx-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState(172800); // 48 hours
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
  };
  
  const time = formatTime(timeLeft);
  
  return (
    <section className="py-32 text-center relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 bg-brand-coral/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral rounded-md text-xs font-bold font-badge mb-8 tracking-[2px] border border-brand-coral/20 uppercase">
          🚨 Oferta por tiempo limitado
        </span>
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-12 max-w-4xl mx-auto">
          Consigue hoy tu acceso completo por solo <span className="text-brand-gold underline decoration-brand-gold/20">$12 USD</span>
        </h2>
        
        <div className="flex justify-center gap-3 md:gap-8 mb-16">
          {[
            { label: 'Días', val: time.d },
            { label: 'Horas', val: time.h },
            { label: 'Minutos', val: time.m },
            { label: 'Segundos', val: time.s }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 md:w-32 h-16 md:h-32 premium-card rounded-2xl md:rounded-3xl flex items-center justify-center font-heading text-xl md:text-5xl font-bold shadow-2xl border-white/10">
                {String(item.val).padStart(2, '0')}
              </div>
              <span className="mt-3 text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-badge font-bold">{item.label}</span>
            </div>
          ))}
        </div>
        
        <button className="cta-primary px-12 py-7 rounded-[32px] text-2xl font-bold shadow-[0_20px_60px_rgba(244,196,48,0.3)] group">
                onClick={() => window.open("https://pay.hotmart.com/L105785496G", '_blank')}
         > 
          SÍ, QUIERO ACCESO INMEDIATO →
        </button>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs text-white/40 font-badge uppercase tracking-widest">
          <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-gold w-4 h-4" /> Acceso de por vida</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-gold w-4 h-4" /> Actualizaciones gratuitas</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-gold w-4 h-4" /> Garantía de 30 días</span>
        </div>
      </div>
    </section>
  );
};

const ScienceSection = () => (
  <section className="py-32 bg-brand-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-10 text-[200px] font-bold text-white/[0.03] pointer-events-none select-none">
      CELL
    </div>
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-brand-gold font-badge text-xs tracking-[5px] block mb-4 font-bold uppercase">Base Científica</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 leading-tight">Cómo funciona la <span className="text-brand-gold italic font-medium underline underline-offset-8 decoration-brand-gold/10">biobiología</span> de la inflamación</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            La inflamación crónica no es solo hinchazón; es una respuesta sistémica a alimentos ultra-procesados que bloquean tu metabolismo. Nuestro sistema desbloquea tu capacidad natural de recuperación en 3 etapas:
          </p>
          <div className="space-y-8">
            {[
              { phase: "FASE 1", title: "Eliminación (Días 1-5)", desc: "Limpieza profunda de toxinas acumuladas y reducción de la respuesta inmunitaria." },
              { phase: "FASE 2", title: "Reparación (Días 6-10)", desc: "Inyección de fitonutrientes que sellan la barrera intestinal y optimizan la digestión." },
              { phase: "FASE 3", title: "Optimización (Días 11-14)", desc: "Consolidación de un ecosistema interno resistente a la inflamación futura." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 font-bold font-heading text-lg group-hover:bg-brand-gold group-hover:text-brand-bg transition-all">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 tracking-tight text-lg">{item.phase}: {item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="premium-card p-4 rounded-[40px] transform lg:rotate-6 bg-brand-gold shadow-[0_0_80px_rgba(244,196,48,0.15)] overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Ciencia de la salud" 
              className="rounded-[32px] w-full aspect-[4/5] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-32 bg-brand-bg">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="bg-brand-secondary/40 p-12 md:p-24 rounded-[64px] border border-white/5 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-10 leading-tight">
          No dejes que la inflamación controle <span className="text-brand-gold">tu felicidad</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Has llegado hasta aquí porque sabes que mereces sentirte mejor. El Sistema Antiinflamatorio Progresivo es tu pasaporte a una nueva vida.
        </p>
        <button className="cta-primary px-16 py-8 rounded-[36px] text-2xl font-bold w-full sm:w-auto shadow-[0_30px_70px_rgba(0,0,0,0.6)] group">
                onClick={() => window.open("https://pay.hotmart.com/L105785496G", '_blank')}
         > 
          SÍ, QUIERO TRANSFORMAR MI CUERPO HOY
          <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
        </button>
        <div className="mt-16 space-y-4">
          <p className="text-sm text-gray-500 italic font-medium">"Mi compromiso es que mañana te despiertes sintiéndote más ligera que hoy."</p>
          <div className="flex items-center justify-center gap-3 text-brand-gold/60 text-[10px] font-bold font-badge uppercase tracking-[3px]">
            <span className="w-8 h-[1px] bg-brand-gold/30" />
             El Equipo de Nutrición Antiinflamatoria
            <span className="w-8 h-[1px] bg-brand-gold/30" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-[#07090e] border-t border-white/5">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="w-8 h-8 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold">
          <LeafIcon className="w-5 h-5" />
        </div>
        <span className="font-heading font-bold text-lg tracking-widest text-white uppercase">SISTEMA <span className="text-brand-gold">PROGRESIVO</span></span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 text-gray-500 hover:text-gray-400 font-badge text-xs uppercase tracking-widest transition-colors">
        <a href="#" className="hover:text-brand-gold transition-colors">Políticas de Privacidad</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Términos de Servicio</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Soporte y Contacto</a>
        <a href="#" className="hover:text-brand-gold transition-colors">Descargo Médico</a>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-6 text-[10px] md:text-xs text-gray-600 leading-relaxed">
        <p>© 2024 Nutrición Progresiva LLC. Todos los derechos reservados.</p>
        <p className="opacity-60 px-6">
          ESTE SITIO NO ES PARTE DE FACEBOOK NI FACEBOOK INC. TAMBIÉN, ESTE SITIO NO ESTÁ RESPALDADO POR FACEBOOK DE NINGUNA MANERA. 
          FACEBOOK ES UNA MARCA REGISTRADA DE FACEBOOK, INC. LA INFORMACIÓN PROPORCIONADA EN ESTE PROGRAMA TIENE FINES EDUCATIVOS ÚNICAMENTE.
        </p>
        <div className="flex justify-center gap-8 pt-6 grayscale opacity-30">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-4" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-gold selection:text-brand-bg font-sans subpixel-antialiased">
      <TrustBar />
      <Header />
      
      <main className="relative">
        {/* Ambient background glows */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-brand-gold/2 blur-[150px] rounded-full" />
          <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-brand-coral/2 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10">
          <Hero />
          <WhyDifferent />
          <BenefitsGrid />
          <PriceSection />
          <Testimonials />
          <IdealForYou />
          <ValueStack />
          <ScienceSection />
          <FAQAccordion />
          <UrgencySection />
          <FooterCTA />
        </div>
      </main>
      
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: scrolled ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-50 bg-brand-bg/95 backdrop-blur-xl border-t border-white/10"
      >
        <button className="cta-primary w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg shadow-2xl">
                onClick={() => window.open("https://pay.hotmart.com/L105785496G", '_blank')}
         > 
          ¡QUIERO MI TRANSFORMACIÓN! <ArrowRight size={20} />
        </button>
      </motion.div>
    </div>
  );
}
