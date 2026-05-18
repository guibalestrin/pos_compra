import { useEffect, useRef, useState } from 'react';
import { Download, Mail, MessageCircle, CheckCircle, Clock, Cpu, Unlock } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const GoldDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8962E] to-transparent opacity-40" />
    <div className="w-1 h-1 rounded-full bg-[#B8962E] opacity-60" />
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8962E] to-transparent opacity-40" />
  </div>
);

const GoldLabel = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium"
    style={{ color: '#B8962E', fontFamily: 'Jost, sans-serif', letterSpacing: '0.25em' }}
  >
    {children}
  </span>
);

export default function App() {
  const hero = useInView(0.1);
  const rollout = useInView(0.1);
  const immediate = useInView(0.1);
  const timeline = useInView(0.1);
  const support = useInView(0.1);
  const closing = useInView(0.1);

  const timelineSteps = [
    { icon: CheckCircle, label: 'Compra Confirmada', status: 'done' },
    { icon: CheckCircle, label: 'Processamento de Membro Fundador', status: 'done' },
    { icon: Cpu, label: 'Preparando a plataforma de acesso', status: 'active' },
    { icon: Unlock, label: 'Liberação de Acesso Completo', status: 'pending' },
  ];

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: '#0A0A0B', fontFamily: 'Jost, sans-serif' }}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(184,150,46,0.04) 0%, transparent 70%)',
        }}
      />

      {/* HEADER */}
      <header
        className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6 border-b"
        style={{ borderColor: 'rgba(184,150,46,0.12)' }}
      >
        <div className="flex items-center gap-3">
          <img src="/Insta.png" alt="Caverna de Alexandria" className="w-9 h-9 object-contain opacity-90" />
          <span
            className="text-xs tracking-[0.2em] uppercase opacity-60"
            style={{ color: '#D4D4DC', fontFamily: 'Jost, sans-serif' }}
          >
            Caverna de Alexandria
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#B8962E] animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#B8962E', fontFamily: 'Jost, sans-serif' }}>
            Liberação Fundadora
          </span>
        </div>
      </header>

      {/* SECTION 1 — HERO */}
      <section
        ref={hero.ref}
        className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 pt-24 pb-28"
        style={{
          opacity: hero.visible ? 1 : 0,
          transform: hero.visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1.1s ease, transform 1.1s ease',
        }}
      >
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(184,150,46,0.06) 0%, transparent 70%)',
          }}
        />

        <GoldLabel>Liberação Fundadora — Acesso Privado</GoldLabel>

        <h1
          className="mt-8 font-light leading-tight"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: '#F5F5F0',
            fontWeight: 300,
            letterSpacing: '-0.01em',
          }}
        >
          Seu acesso foi confirmado.
        </h1>

        <p
          className="mt-5 text-lg font-light tracking-wide"
          style={{ color: '#9B9BA4', fontFamily: 'Jost, sans-serif', fontWeight: 300, letterSpacing: '0.06em' }}
        >
          Você entrou na Founding Release do{' '}
          <span style={{ color: '#D4AE4A' }}>AI PHOTO MYSTERY</span>.
        </p>

        <GoldDivider className="mt-10 mb-10 w-full max-w-xs mx-auto" />

        <p
          className="max-w-xl text-base leading-relaxed font-light"
          style={{ color: '#9B9BA4', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: '1.85' }}
        >
          Como parte do grupo inicial de membros fundadores, seu acesso está sendo preparado
          dentro da nova arquitetura visual da plataforma — atualmente em fase final de
          implementação.
        </p>
      </section>

      <GoldDivider className="relative z-10 max-w-4xl mx-auto px-8" />

      {/* SECTION 2 — SYSTEM ROLLOUT */}
      <section
        ref={rollout.ref}
        className="relative z-10 px-6 md:px-16 py-28 max-w-4xl mx-auto"
        style={{
          opacity: rollout.visible ? 1 : 0,
          transform: rollout.visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
        }}
      >
        <GoldLabel>Implantação do Sistema</GoldLabel>

        <h2
          className="mt-6 font-light leading-snug"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#F5F5F0',
            fontWeight: 300,
          }}
        >
          O acesso está sendo liberado progressivamente.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Infraestrutura descontinuada',
              body: 'A arquitetura visual anterior foi formalmente descontinuada. A nova infraestrutura foi projetada do zero para suportar a engine de IA de nova geração.',
            },
            {
              title: 'Nova arquitetura em finalização',
              body: 'O sistema de otimização visual baseado em inteligência artificial está em fase final de implantação. Cada módulo está sendo calibrado individualmente antes da liberação.',
            },
            {
              title: 'Integração progressiva',
              body: 'Os membros estão sendo integrados em sequência controlada para garantir a integridade da experiência. Não existe acesso em massa simultâneo.',
            },
            {
              title: 'Membros fundadores com prioridade',
              body: 'Seu onboarding possui prioridade máxima dentro do pipeline de liberação. Fundadores são os primeiros a receber acesso completo ao sistema.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-sm p-6 group"
              style={{
                background: '#141416',
                border: '1px solid rgba(184,150,46,0.1)',
                transition: 'border-color 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,46,0.22)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,46,0.1)';
              }}
            >
              <div
                className="w-5 h-px mb-4"
                style={{ background: '#B8962E', opacity: 0.7 }}
              />
              <h3
                className="text-sm font-medium tracking-wide mb-3"
                style={{ color: '#D4D4DC', fontFamily: 'Jost, sans-serif', letterSpacing: '0.04em' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', lineHeight: '1.8' }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Estimated Access Window card */}
        <div
          className="mt-12 inline-flex flex-col items-start rounded-sm px-8 py-6"
          style={{
            background: '#1C1C1F',
            border: '1px solid rgba(184,150,46,0.25)',
            boxShadow: '0 0 40px rgba(184,150,46,0.04)',
          }}
        >
          <GoldLabel>Janela de Acesso Estimada</GoldLabel>
          <div
            className="mt-3"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '3.2rem',
              fontWeight: 300,
              color: '#D4AE4A',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            2–5 dias
          </div>
          <p
            className="mt-3 text-xs font-light tracking-wide"
            style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', letterSpacing: '0.06em' }}
          >
            A partir da confirmação da compra
          </p>
        </div>
      </section>

      <GoldDivider className="relative z-10 max-w-4xl mx-auto px-8" />

      {/* SECTION 3 — IMMEDIATE ACCESS */}
      <section
        ref={immediate.ref}
        className="relative z-10 px-6 md:px-16 py-28 max-w-4xl mx-auto"
        style={{
          opacity: immediate.visible ? 1 : 0,
          transform: immediate.visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
        }}
      >
        <GoldLabel>Acesso Imediato</GoldLabel>

        <h2
          className="mt-6 font-light leading-snug"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#F5F5F0',
            fontWeight: 300,
          }}
        >
          Seu arquivo exclusivo para membros já está disponível.
        </h2>

        {/* PDF Download Card */}
        <div
          className="mt-12 rounded-sm overflow-hidden cursor-pointer"
          style={{
            background: '#141416',
            border: '1px solid rgba(184,150,46,0.15)',
            boxShadow: '0 0 0 rgba(184,150,46,0)',
            transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(184,150,46,0.07)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,46,0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 rgba(184,150,46,0)';
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,46,0.15)';
          }}
        >
          <div className="p-8 md:p-10">
            <div className="max-w-xl">
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ color: '#B8962E', fontFamily: 'Jost, sans-serif' }}
              >
                Arquivo disponibilizado para membros
              </p>

              <img
                src="/7-erros-capa.png"
                alt="Capa do ebook 7 ERROS que estão destruindo o seu perfil"
                className="mt-5 mb-6 w-full rounded-sm object-cover"
                style={{
                  border: '1px solid rgba(184,150,46,0.16)',
                  boxShadow: '0 18px 50px rgba(0,0,0,0.28)',
                }}
              />

              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', lineHeight: '1.8' }}
              >
                Material em PDF com os principais erros que podem estar enfraquecendo
                sua presença e o impacto do seu perfil, para você revisar com clareza
                e aplicar imediatamente.
              </p>

              <a
                className="mt-8 inline-flex items-center gap-3 px-7 py-3 rounded-sm text-sm font-light tracking-widest uppercase"
                href="/7-erros-ebook.pdf"
                download="7 Erros - Ebook.pdf"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(184,150,46,0.5)',
                  color: '#D4AE4A',
                  fontFamily: 'Jost, sans-serif',
                  letterSpacing: '0.15em',
                  fontSize: '11px',
                  transition: 'background 0.4s ease, border-color 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(184,150,46,0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,174,74,0.7)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(184,150,46,0.5)';
                }}
              >
                <Download size={13} strokeWidth={1.5} />
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider className="relative z-10 max-w-4xl mx-auto px-8" />

      {/* SECTION 4 — TIMELINE */}
      <section
        ref={timeline.ref}
        className="relative z-10 px-6 md:px-16 py-28 max-w-4xl mx-auto"
        style={{
          opacity: timeline.visible ? 1 : 0,
          transform: timeline.visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
        }}
      >
        <GoldLabel>Sequência de Implantação</GoldLabel>

        <h2
          className="mt-6 font-light leading-snug mb-16"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#F5F5F0',
            fontWeight: 300,
          }}
        >
          O processo de liberação.
        </h2>

        <div className="relative">
          <div
            className="absolute left-5 top-5 bottom-5 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(184,150,46,0.3), rgba(184,150,46,0.05))' }}
          />

          <div className="flex flex-col">
            {timelineSteps.map((step, i) => {
              const Icon = step.icon;
              const isDone = step.status === 'done';
              const isActive = step.status === 'active';
              return (
                <div
                  key={step.label}
                  className="flex items-start gap-6 relative"
                  style={{
                    paddingBottom: i < timelineSteps.length - 1 ? '2rem' : '0',
                    opacity: timeline.visible ? 1 : 0,
                    transform: timeline.visible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `opacity 0.8s ease ${0.1 + i * 0.12}s, transform 0.8s ease ${0.1 + i * 0.12}s`,
                  }}
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: isDone
                        ? 'rgba(184,150,46,0.15)'
                        : isActive
                        ? 'rgba(184,150,46,0.08)'
                        : '#141416',
                      border: isDone
                        ? '1px solid rgba(184,150,46,0.5)'
                        : isActive
                        ? '1px solid rgba(184,150,46,0.35)'
                        : '1px solid rgba(107,107,114,0.3)',
                      boxShadow: isActive ? '0 0 16px rgba(184,150,46,0.12)' : 'none',
                    }}
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      style={{
                        color: isDone ? '#D4AE4A' : isActive ? '#B8962E' : '#6B6B72',
                      }}
                    />
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: 'rgba(184,150,46,0.08)' }}
                      />
                    )}
                  </div>

                  <div className="pt-2">
                    <p
                      className="text-sm font-light tracking-wide"
                      style={{
                        color: isDone ? '#D4D4DC' : isActive ? '#F5F5F0' : '#6B6B72',
                        fontFamily: 'Jost, sans-serif',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {step.label}
                    </p>
                    {isDone && (
                      <p
                        className="mt-1 text-[10px] tracking-[0.15em] uppercase"
                        style={{ color: '#8A6E1E', fontFamily: 'Jost, sans-serif' }}
                      >
                        Concluído
                      </p>
                    )}
                    {isActive && (
                      <p
                        className="mt-1 text-[10px] tracking-[0.15em] uppercase"
                        style={{ color: '#B8962E', fontFamily: 'Jost, sans-serif' }}
                      >
                        Em andamento
                      </p>
                    )}
                    {step.status === 'pending' && (
                      <p
                        className="mt-1 text-[10px] tracking-[0.15em] uppercase"
                        style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif' }}
                      >
                        Aguardando
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <GoldDivider className="relative z-10 max-w-4xl mx-auto px-8" />

      {/* SECTION 5 — SUPPORT */}
      <section
        ref={support.ref}
        className="relative z-10 px-6 md:px-16 py-28 max-w-4xl mx-auto"
        style={{
          opacity: support.visible ? 1 : 0,
          transform: support.visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1s ease 0.15s, transform 1s ease 0.15s',
        }}
      >
        <GoldLabel>Canal de Suporte</GoldLabel>

        <h2
          className="mt-6 font-light leading-snug"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#F5F5F0',
            fontWeight: 300,
          }}
        >
          Caso precise de assistência, nossa equipe está disponível.
        </h2>

        <p
          className="mt-7 max-w-2xl text-sm font-light leading-relaxed"
          style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', lineHeight: '1.9' }}
        >
          Durante o período de preparação da sua liberação completa, nossa equipe de suporte
          permanece disponível para auxiliar membros fundadores em qualquer necessidade
          relacionada ao onboarding, acesso ou recursos iniciais.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Mail,
              label: 'Suporte por Email',
              value: 'cavernadealexandria@gmail.com',
              description: 'Canal recomendado para suporte estratégico e questões relacionadas ao acesso.',
              href: 'mailto:cavernadealexandria@gmail.com',
            },
            {
              icon: MessageCircle,
              label: 'Suporte WhatsApp',
              value: '(11) 98695-5476',
              description: 'Suporte direto para membros fundadores durante a implementação da plataforma.',
              href: 'https://wa.me/5511986955476',
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="block rounded-sm p-8 no-underline"
                style={{
                  background: '#1C1C1F',
                  border: '1px solid rgba(184,150,46,0.1)',
                  boxShadow: '0 0 0 rgba(184,150,46,0)',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.boxShadow = '0 0 32px rgba(184,150,46,0.06)';
                  el.style.borderColor = 'rgba(184,150,46,0.25)';
                  el.style.background = '#242428';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.boxShadow = '0 0 0 rgba(184,150,46,0)';
                  el.style.borderColor = 'rgba(184,150,46,0.1)';
                  el.style.background = '#1C1C1F';
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-sm"
                    style={{ background: 'rgba(184,150,46,0.08)', border: '1px solid rgba(184,150,46,0.2)' }}
                  >
                    <Icon size={14} strokeWidth={1.5} style={{ color: '#B8962E' }} />
                  </div>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: '#B8962E', fontFamily: 'Jost, sans-serif' }}
                  >
                    {card.label}
                  </span>
                </div>
                <p
                  className="text-base font-light mb-3"
                  style={{ color: '#D4D4DC', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                >
                  {card.value}
                </p>
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', lineHeight: '1.8' }}
                >
                  {card.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <GoldDivider className="relative z-10 max-w-4xl mx-auto px-8" />

      {/* SECTION 6 — CLOSING */}
      <section
        ref={closing.ref}
        className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 py-36"
        style={{
          opacity: closing.visible ? 1 : 0,
          transform: closing.visible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1.2s ease 0.15s, transform 1.2s ease 0.15s',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,150,46,0.03) 0%, transparent 70%)',
          }}
        />
        <p
          className="font-light italic leading-snug"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: '#F5F5F0',
            fontWeight: 300,
            maxWidth: '700px',
            lineHeight: '1.4',
          }}
        >
          O dating moderno recompensa homens otimizados.
          <br />
          <span style={{ color: '#D4AE4A' }}>Você está dentro do sistema.</span>
        </p>

        <div className="mt-12 flex items-center gap-3">
          <Clock size={12} strokeWidth={1.5} style={{ color: '#B8962E', opacity: 0.6 }} />
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif' }}
          >
            Liberação Fundadora — 2025
          </span>
        </div>
      </section>

      <GoldDivider className="relative z-10 max-w-4xl mx-auto px-8" />

      {/* FOOTER */}
      <footer
        className="relative z-10 px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ borderTop: '1px solid rgba(184,150,46,0.06)' }}
      >
        <div className="flex items-center gap-3">
          <img src="/Insta.png" alt="Caverna de Alexandria" className="w-7 h-7 object-contain opacity-60" />
          <div className="flex flex-col">
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', lineHeight: '1.2' }}
            >
              AI Photo Mystery
            </span>
            <span
              className="text-[10px] tracking-[0.1em]"
              style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', opacity: 0.6 }}
            >
              Caverna de Alexandria
            </span>
          </div>
        </div>

        <p
          className="text-[10px] tracking-widest uppercase text-center"
          style={{ color: '#6B6B72', fontFamily: 'Jost, sans-serif', opacity: 0.5, letterSpacing: '0.12em' }}
        >
          &copy; {new Date().getFullYear()} Caverna de Alexandria. Todos os direitos reservados.
        </p>


        <div
          className="w-5 h-px"
          style={{ background: '#B8962E', opacity: 0.3 }}
        />
      </footer>
    </div>
  );
}
