import './style.css';

const slides = [
  {
    eyebrow: 'Una pausa para mirar con honestidad',
    title: '¿Cuándo es momento<br />de <em>pedir ayuda</em>?',
    body: 'A veces el primer paso no es tener todas las respuestas. Es reconocer que algo merece atención.',
    kind: 'intro',
    accent: 'amber',
  },
  {
    eyebrow: 'Señal 01',
    title: 'No puedes<br /><em>parar</em>.',
    body: 'Cuando dejarlo “para después” se vuelve cada vez más difícil, no tienes que enfrentarlo a solas.',
    number: '01',
    accent: 'coral',
    image: 'https://theserenitycenterla.com/wp-content/uploads/Finding-Cocaine-Addiction-Rehab-Centers-in-Baton-Rouge.jpg',
    imageAlt: 'Centro de rehabilitación para la adicción a la cocaína',
  },
  {
    eyebrow: 'Señal 02',
    title: 'Tienes problemas<br />por el <em>consumo</em>.',
    body: 'En casa, en la escuela, en el trabajo o con otras personas. Los problemas son una señal, no una sentencia.',
    number: '02',
    accent: 'violet',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1CHwc6vG5aky0gAsI25_Cy8pbA0lH5SIC1JdJgLHypryKfUmt5zivtI&s=10',
    imageAlt: 'Imagen relacionada con las señales de la adicción a la cocaína',
  },
  {
    eyebrow: 'Señal 03',
    title: 'Sigues consumiendo<br />aunque te <em>hace daño</em>.',
    body: 'El daño físico o emocional importa. Pedir ayuda es una forma de cuidarse, nunca un motivo de vergüenza.',
    number: '03',
    accent: 'blue',
    image: 'https://cdn.rehabfiles.com/sites/recoverylighthouse/wp-content/uploads/2025/03/heroin-powder-and-injection.jpeg',
    imageAlt: 'Imagen de concientización sobre el consumo de sustancias',
  },
  {
    eyebrow: 'Señal 04',
    title: 'Necesitas cada vez<br /><em>más</em>.',
    body: 'Si la cantidad aumenta para sentir lo mismo, hablar con alguien puede prevenir que la situación se vuelva más difícil.',
    number: '04',
    accent: 'green',
    image: 'https://cdn.rehabfiles.com/sites/libertyhouse/wp-content/uploads/2025/02/LH-young-man-taking-cocaine.jpeg',
    imageAlt: 'Joven en una situación de consumo de cocaína',
  },
  {
    eyebrow: 'No tienes que esperar a tocar fondo',
    title: 'Hablar con un<br /><em>profesional</em> puede<br />ser el primer paso.',
    body: 'Una conversación confidencial puede abrir un camino. Para ti o para alguien que te importa.',
    kind: 'cta',
    accent: 'amber',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaAJA6Ya2UBmjDWD7B1nUP5l05vIzqIcxdYUrtmwmq1asLslGUlGg1j8&s=10',
    imageAlt: 'Apoyo profesional para el tratamiento de la adicción',
  },
  {
    eyebrow: 'Acompañamiento gratuito y confidencial',
    title: 'En México<br />puedes <em>llamar a:</em>',
    body: 'Línea de la Vida',
    phone: '800 911 2000',
    kind: 'hotline',
    accent: 'coral',
  },
];

const app = document.querySelector('#app');
let current = 0;

function render() {
  const slide = slides[current];
  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  app.innerHTML = `
    <main class="deck accent-${slide.accent}" aria-label="Presentación: momento de pedir ayuda">
      <div class="grain"></div>
      <header class="topbar">
        <div class="counter" aria-label="Slide ${current + 1} de ${slides.length}">
          <span>${String(current + 1).padStart(2, '0')}</span> / ${String(slides.length).padStart(2, '0')}
        </div>
      </header>

      <div class="orb orb-one"></div>
      <div class="orb orb-two"></div>

      <section class="slide ${slide.kind || ''}" aria-live="polite">
        ${slide.image ? `<div class="slide-image"><img src="${slide.image}" alt="${slide.imageAlt}" /></div>` : ''}
        <div class="slide-content">
          <p class="eyebrow"><span class="eyebrow-line"></span>${slide.eyebrow}</p>
          <h1>${slide.title}</h1>
          ${slide.body ? `<p class="body-copy">${slide.body}</p>` : ''}
          ${slide.number ? `<div class="signal-tag"><span class="tag-dot"></span> Señal para prestar atención <strong>${slide.number}</strong></div>` : ''}
          ${slide.kind === 'intro' ? `<button class="start-button" data-next>Comenzar <span>→</span></button>` : ''}
          ${slide.kind === 'cta' ? `<div class="cta-note"><span class="heart" aria-hidden="true">♡</span><span>Hablar también es una forma de cuidarte.</span></div>` : ''}
          ${slide.kind === 'hotline' ? `
            <a class="phone-card" href="tel:8009112000">
              <span class="phone-icon" aria-hidden="true">⌕</span>
              <span class="phone-number">${slide.phone}</span>
              <span class="call-label">Llamar ahora <b>↗</b></span>
            </a>
            <p class="privacy-note">Disponible todos los días · Atención confidencial</p>
            <div class="support-card" aria-label="Líneas adicionales de apoyo">
              <p class="support-heading">También puedes contactar:</p>
              <div class="support-row">
                <span>Línea de atención en crisis SALME</span>
                <span class="support-numbers"><a href="tel:3338333838">33 3833 3838</a> · <a href="tel:075">075</a></span>
              </div>
              <div class="support-row">
                <span>Línea TQueremos</span>
                <a class="support-numbers" href="tel:8008139500">800 813 9500</a>
              </div>
              <div class="support-row">
                <span>Emergencias</span>
                <a class="support-numbers" href="tel:911">911</a>
              </div>
            </div>
          ` : ''}
        </div>
        ${isFirst ? '<div class="side-word" aria-hidden="true">cocaína</div>' : ''}
      </section>

      <footer class="navigation">
        <button class="nav-arrow previous" data-prev aria-label="Slide anterior" ${isFirst ? 'disabled' : ''}>←</button>
        <div class="progress" role="tablist" aria-label="Navegación de slides">
          ${slides.map((_, index) => `<button class="progress-dot ${index === current ? 'active' : ''}" data-go="${index}" role="tab" aria-label="Ir al slide ${index + 1}" aria-selected="${index === current}"></button>`).join('')}
        </div>
        <button class="nav-arrow next" data-next aria-label="${isLast ? 'Volver al inicio' : 'Siguiente slide'}">${isLast ? '↺' : '→'}</button>
      </footer>
      <p class="hint">${isFirst ? 'Usa las flechas para avanzar' : '←  →  para navegar'}</p>
    </main>
  `;

  document.querySelectorAll('[data-next]').forEach((button) => button.addEventListener('click', () => goTo(isLast ? 0 : current + 1)));
  document.querySelectorAll('[data-prev]').forEach((button) => button.addEventListener('click', () => goTo(current - 1)));
  document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    goTo(Number(button.dataset.go));
  }));
}

function goTo(index) {
  current = (index + slides.length) % slides.length;
  render();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === ' ') goTo(current + 1);
  if (event.key === 'ArrowLeft') goTo(current - 1);
  if (event.key === 'Home') goTo(0);
  if (event.key === 'End') goTo(slides.length - 1);
});

render();
