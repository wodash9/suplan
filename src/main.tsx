import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { goalLabels, supplements } from './domain/catalog';
import { generateRecommendation } from './domain/recommendation';
import type { DayMoment, GoalId, QuizInput, Supplement } from './domain/types';
import './styles.css';

const defaultInput: QuizInput = {
  age: 31,
  diet: 'omnivore',
  goals: ['daily-core', 'active-day'],
  allergies: [],
  isPregnantOrLactating: false,
  takesMedication: false,
  hasMedicalCondition: false,
  caffeineSensitive: false,
};

const packCards = [
  { name: 'Daily Base', desc: 'Una rutina simple para empezar con orden.', goals: ['daily-core'] as GoalId[], tag: 'más fácil' },
  { name: 'Active Day', desc: 'Para días con movimiento, gym o agenda larga.', goals: ['active-day'] as GoalId[], tag: 'rutina activa' },
  { name: 'Plant-Based', desc: 'Pensado para dietas veganas o flexitarianas.', goals: ['plant-based'] as GoalId[], tag: 'vegan friendly' },
  { name: 'Glow Routine', desc: 'Cuidado personal sin convertir tu baño en almacén.', goals: ['glow'] as GoalId[], tag: 'piel/cabello' },
  { name: 'Calm PM', desc: 'Una toma de tarde más tranquila y fácil de recordar.', goals: ['calm-pm'] as GoalId[], tag: 'PM' },
  { name: 'Custom Pro', desc: 'Elige objetivos y mueve cada cápsula entre AM y PM.', goals: ['daily-core', 'focus-flow'] as GoalId[], tag: 'configurable' },
];

function Toggle({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return <button className={active ? 'chip chip-active' : 'chip'} onClick={onClick} type="button">{label}</button>;
}

function App() {
  const [quiz, setQuiz] = useState<QuizInput>(defaultInput);
  const [overrides, setOverrides] = useState<Record<string, DayMoment>>({});
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const recommendation = useMemo(() => generateRecommendation(quiz, overrides), [quiz, overrides]);

  const toggleGoal = (goal: GoalId) => {
    setQuiz((current) => {
      const exists = current.goals.includes(goal);
      const goals = exists ? current.goals.filter((item) => item !== goal) : [...current.goals, goal].slice(0, 3);
      return { ...current, goals: goals.length > 0 ? goals : ['daily-core'] };
    });
  };

  const setMoment = (supplementId: string, moment: DayMoment) => {
    setOverrides((current) => ({ ...current, [supplementId]: moment }));
  };

  const usePack = (goals: GoalId[]) => {
    setQuiz((current) => ({ ...current, goals }));
    document.getElementById('configurador')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Suplan inicio"><span className="brand-mark">S</span>Suplan</a>
        <nav>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#packs">Packs</a>
          <a href="#configurador">Configurador</a>
          <a href="#confianza">Confianza</a>
        </nav>
        <a className="nav-cta" href="#configurador">Armar mi Suplan</a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">beta privada · suplementos en sobres diarios</p>
              <h1>Tu rutina diaria de suplementos, lista en sobres de mañana y tarde.</h1>
              <p className="hero-subtitle">Configura vitaminas, minerales y suplementos según tus preferencias. Suplan los organiza en sobres diarios para que tu rutina sea simple, clara y fácil de seguir.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#configurador">Armar mi Suplan</a>
                <a className="button button-ghost" href="#como-funciona">Ver cómo funciona</a>
              </div>
              <p className="microcopy">Sin promesas mágicas. Solo más orden para tu día. Demo informativa, sin compra real todavía.</p>
            </div>
            <div className="hero-card" aria-label="Vista previa de sobres Suplan">
              <div className="sachet sachet-morning">
                <span>Sobre mañana</span>
                <strong>Daily Base</strong>
                <small>D3 · B12 · Zinc</small>
              </div>
              <div className="sachet sachet-afternoon">
                <span>Sobre tarde</span>
                <strong>Calm PM</strong>
                <small>Magnesio · L-teanina</small>
              </div>
              <div className="capsule capsule-one" />
              <div className="capsule capsule-two" />
              <div className="pack-box">
                <span>30 días</span>
                <strong>AM / PM</strong>
                <small>caja mensual personalizable</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section problem-strip">
          <div className="container strip-grid">
            <h2>Cuidarse no debería requerir 6 botes y 20 pestañas abiertas.</h2>
            <div className="strip-points">
              <span>No sabes qué tomar.</span>
              <span>Se te olvida a mitad de semana.</span>
              <span>No tienes claro qué va por la mañana o por la tarde.</span>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">cómo funciona</p>
              <h2>Tu rutina en 3 pasos</h2>
            </div>
            <div className="steps">
              <article className="card step-card"><span>01</span><h3>Configura tu mix</h3><p>Elige objetivos generales, dieta y preferencias. Si hay señales de riesgo, la demo marca revisión profesional.</p></article>
              <article className="card step-card"><span>02</span><h3>Divide mañana y tarde</h3><p>Organiza tus cápsulas por momento del día. Puedes mover cada suplemento antes de guardar.</p></article>
              <article className="card step-card"><span>03</span><h3>Únete a la beta</h3><p>Deja tu email si quieres entrar en el piloto. Antes de vender, toca cerrar proveedor, QA y claims.</p></article>
            </div>
          </div>
        </section>

        <section id="packs" className="section packs-section">
          <div className="container">
            <div className="section-heading row-heading">
              <div><p className="eyebrow">puntos de partida</p><h2>Packs base, editables</h2></div>
              <p>No son diagnósticos ni tratamientos. Son formas simples de ordenar una rutina.</p>
            </div>
            <div className="pack-grid">
              {packCards.map((pack) => (
                <article className="card pack-card" key={pack.name}>
                  <span className="pill">{pack.tag}</span>
                  <h3>{pack.name}</h3>
                  <p>{pack.desc}</p>
                  <button className="text-button" onClick={() => usePack(pack.goals)} type="button">Usar como base</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="configurador" className="section configurator-section">
          <div className="container configurator-grid">
            <div>
              <p className="eyebrow">demo configurador</p>
              <h2>Arma tu Suplan</h2>
              <p className="muted">Completa una versión mínima del quiz. La recomendación es informativa y prioriza seguridad: si declaras medicación, embarazo/lactancia o condición médica, marcamos revisión.</p>

              <div className="control-card card">
                <label>Edad</label>
                <input type="number" min="16" max="90" value={quiz.age} onChange={(event) => setQuiz({ ...quiz, age: Number(event.target.value) })} />
                <label>Dieta</label>
                <div className="chip-row">
                  <Toggle active={quiz.diet === 'omnivore'} label="Omnívora" onClick={() => setQuiz({ ...quiz, diet: 'omnivore' })} />
                  <Toggle active={quiz.diet === 'vegetarian'} label="Vegetariana" onClick={() => setQuiz({ ...quiz, diet: 'vegetarian' })} />
                  <Toggle active={quiz.diet === 'vegan'} label="Vegana" onClick={() => setQuiz({ ...quiz, diet: 'vegan' })} />
                </div>
                <label>Objetivos generales (máx. 3)</label>
                <div className="chip-row">
                  {(Object.keys(goalLabels) as GoalId[]).map((goal) => (
                    <Toggle key={goal} active={quiz.goals.includes(goal)} label={goalLabels[goal]} onClick={() => toggleGoal(goal)} />
                  ))}
                </div>
                <label>Flags de seguridad</label>
                <div className="check-grid">
                  <label><input checked={quiz.isPregnantOrLactating} onChange={(e) => setQuiz({ ...quiz, isPregnantOrLactating: e.target.checked })} type="checkbox" /> Embarazo/lactancia</label>
                  <label><input checked={quiz.takesMedication} onChange={(e) => setQuiz({ ...quiz, takesMedication: e.target.checked })} type="checkbox" /> Tomo medicación</label>
                  <label><input checked={quiz.hasMedicalCondition} onChange={(e) => setQuiz({ ...quiz, hasMedicalCondition: e.target.checked })} type="checkbox" /> Condición médica</label>
                  <label><input checked={quiz.caffeineSensitive} onChange={(e) => setQuiz({ ...quiz, caffeineSensitive: e.target.checked })} type="checkbox" /> Sensible a estimulantes</label>
                </div>
              </div>
            </div>

            <div className="routine-panel card">
              <div className="routine-status">
                <span className={`status-dot ${recommendation.status}`} />
                <strong>{recommendation.statusLabel}</strong>
              </div>
              <p className="selected-goals">{recommendation.selectedGoalLabels.join(' · ')}</p>
              {recommendation.warnings.length > 0 && (
                <div className="warning-box">
                  {recommendation.warnings.map((warning) => <p key={warning}>{warning}</p>)}
                </div>
              )}
              <div className="sachet-columns">
                <RoutineColumn title="Sobre mañana" moment="morning" items={recommendation.morning.map((item) => item.supplement)} onMove={setMoment} />
                <RoutineColumn title="Sobre tarde" moment="afternoon" items={recommendation.afternoon.map((item) => item.supplement)} onMove={setMoment} />
              </div>
              <div className="ingredient-list">
                <h3>Catálogo demo</h3>
                {supplements.slice(0, 5).map((supplement) => <SupplementMini key={supplement.id} supplement={supplement} />)}
              </div>
              <form className="waitlist" onSubmit={(event) => { event.preventDefault(); setJoined(email.includes('@')); }}>
                <label htmlFor="email">Quiero entrar en la beta privada</label>
                <div className="email-row">
                  <input id="email" placeholder="tu@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                  <button className="button button-primary" type="submit">Unirme</button>
                </div>
                {joined && <p className="success-message">Listo. Lead demo capturado localmente para esta sesión.</p>}
                <small>Consentimiento marketing separado en la versión con backend. No enviamos datos sensibles a analítica en esta demo.</small>
              </form>
            </div>
          </div>
        </section>

        <section id="confianza" className="section trust-section">
          <div className="container trust-grid">
            <div>
              <p className="eyebrow">confianza</p>
              <h2>Transparente desde el primer clic.</h2>
              <p>Suplan debe vender orden y rutina, no milagros. La plataforma final tendrá biblioteca de claims aprobados, trazabilidad lote-cliente y revisión regulatoria antes de venta real.</p>
            </div>
            <div className="trust-list">
              <span>Ingredientes y dosis visibles.</span>
              <span>Claims conservadores por nutriente.</span>
              <span>Flags para medicación, embarazo y condiciones médicas.</span>
              <span>Proveedor + QC antes de piloto físico.</span>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <h2>Preguntas rápidas</h2>
            <details open><summary>¿Suplan es un medicamento?</summary><p>No. Suplan trabaja con complementos alimenticios. No diagnostica, trata, cura ni previene enfermedades.</p></details>
            <details><summary>¿La demo vende producto real?</summary><p>No todavía. Esta web valida la propuesta, el configurador y captación de beta. Para venta real hacen falta proveedor, QA, etiquetado y revisión regulatoria.</p></details>
            <details><summary>¿Qué pasa si tomo medicación?</summary><p>La demo marca “requiere revisión” y recomienda consultar a un profesional sanitario antes de consumir complementos.</p></details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <strong>Suplan</strong>
          <p>Demo MVP para validar suplementos diarios en sobres mañana/tarde. Dominio previsto: suplan.etharlia.com</p>
          <a href="#configurador">Armar mi Suplan</a>
        </div>
      </footer>
    </>
  );
}

function RoutineColumn({ title, moment, items, onMove }: { title: string; moment: DayMoment; items: Supplement[]; onMove: (id: string, moment: DayMoment) => void }) {
  const opposite: DayMoment = moment === 'morning' ? 'afternoon' : 'morning';
  return (
    <div className={`routine-column ${moment}`}>
      <h3>{title}</h3>
      {items.length === 0 ? <p className="empty">Este sobre está vacío.</p> : items.map((supplement) => (
        <div className="routine-item" key={supplement.id}>
          <strong>{supplement.name}</strong>
          <small>{supplement.claim}</small>
          <button onClick={() => onMove(supplement.id, opposite)} type="button">Mover a {opposite === 'morning' ? 'mañana' : 'tarde'}</button>
        </div>
      ))}
    </div>
  );
}

function SupplementMini({ supplement }: { supplement: Supplement }) {
  return (
    <div className="supplement-mini">
      <span>{supplement.name}</span>
      <small>{supplement.summary}</small>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
