const templates = {
    event: {
        html: `<main class="event-page">
 <nav>
  <b>ШКОЛА / СОБЫТИЯ</b>
  <span>22 НОЯБРЯ · ВХОД СВОБОДНЫЙ</span>
 </nav>
 <section class="hero">
  <div class="eyebrow">✦ ОДИН ДЕНЬ, МНОГО ВОЗМОЖНОСТЕЙ</div>
  <h1>Фестиваль<br/><em>идей</em></h1>
  <p class="lead">Попробуй новое, найди свою команду и создай то, чего ещё не было.</p>
  <a class="cta" href="#program">Смотреть программу <span>↓</span></a>
  <div class="event-meta">
   <div>
    <small>КОГДА</small>
    <strong>22 ноября · 16:00</strong>
   </div>
   <div>
    <small>ГДЕ</small>
    <strong>Актовый зал школы</strong>
   </div>
  </div>
  <div class="orb">✳</div>
 </section>
 <section class="program" id="program">
  <div class="section-title">
   <small>ПЛАН НА ВЕЧЕР</small>
   <h2>Будет интересно</h2>
  </div>
  <div class="cards">
   <article>
    <span>01 / 🎨</span>
    <h3>Творческая зона</h3>
    <p>Придумываем, рисуем и собираем идеи в команды.</p>
   </article>
   <article>
    <span>02 / ⚡</span>
    <h3>Челлендж</h3>
    <p>Проверяем себя в коротком и весёлом командном задании.</p>
   </article>
   <article>
    <span>03 / 🎤</span>
    <h3>Большой финал</h3>
    <p>Показываем результаты и выбираем любимый проект.</p>
   </article>
  </div>
 </section>
 <footer>Бери друзей и приходи. До встречи!</footer>
</main>`, css: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f7f5ef;
  color: #171919;
  font-family: 'DM Sans', Arial, sans-serif;
}

.event-page {
  max-width: 1100px;
  margin: auto;
  padding: 0 54px;
}

nav {
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9d8d1;
  font-size: 11px;
  letter-spacing: .1em;
}

nav b {
  font-size: 12px;
}

nav span {
  color: #777;
}

.hero {
  position: relative;
  padding: 75px 0 55px;
  overflow: hidden;
}

.eyebrow,
.section-title small {
  font-size: 11px;
  letter-spacing: .15em;
  font-weight: 700;
  color: #6a55d9;
}

h1 {
  position: relative;
  font: 700 clamp(64px, 10vw, 118px)/.88 'Space Grotesk', Arial, sans-serif;
  letter-spacing: -.08em;
  margin: 24px 0;
  z-index: 1;
}

h1 em {
  color: #725be5;
  font-style: normal;
}

.lead {
  max-width: 420px;
  font-size: 19px;
  line-height: 1.55;
  color: #565a58;
}

.cta {
  display: inline-flex;
  gap: 26px;
  align-items: center;
  padding: 15px 20px;
  margin: 18px 0 30px;
  background: #7059dc;
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 3px;
}

.cta span {
  font-size: 19px;
}

.event-meta {
  display: flex;
  gap: 55px;
  border-top: 1px solid #d9d8d1;
  padding-top: 22px;
  max-width: 460px;
}

.event-meta div {
  display: grid;
  gap: 8px;
}

.event-meta small {
  font-size: 10px;
  color: #888;
  letter-spacing: .13em;
}

.event-meta strong {
  font-size: 14px;
}

.orb {
  position: absolute;
  right: 10%;
  top: 110px;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: #f4c85b;
  color: #725be5;
  display: grid;
  place-items: center;
  font-size: 120px;
  transform: rotate(-15deg);
}

.program {
  padding: 40px 0 58px;
  border-top: 1px solid #d9d8d1;
}

h2 {
  font: 700 38px 'Space Grotesk', Arial, sans-serif;
  letter-spacing: -.05em;
  margin: 10px 0 28px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.cards article {
  padding: 22px;
  background: #eeece5;
  min-height: 175px;
}

.cards article span {
  font-size: 12px;
  color: #725be5;
  font-weight: 700;
}

h3 {
  font: 700 19px 'Space Grotesk', Arial, sans-serif;
  margin: 25px 0 8px;
}

.cards p {
  font-size: 13px;
  line-height: 1.5;
  color: #626462;
  margin: 0;
}

footer {
  border-top: 1px solid #d9d8d1;
  padding: 21px 0 30px;
  font-weight: 700;
  font-size: 14px;
}

@media (max-width: 700px) {
  .event-page {
    padding: 0 22px;
  }

  nav {
    font-size: 9px;
  }

  nav b {
    font-size: 10px;
  }

  .hero {
    padding-top: 55px;
  }

  .orb {
    width: 100px;
    height: 100px;
    font-size: 55px;
    right: 0;
    top: 100px;
    opacity: .8;
  }

  .lead {
    font-size: 16px;
    max-width: 80%;
  }

  .event-meta {
    gap: 22px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .cards article {
    min-height: 0;
  }

  h3 {
    margin-top: 14px;
  }

  h2 {
    font-size: 32px;
  }
}`},
    portfolio: {
        html: `<main class="portfolio">
 <nav>
  <b>
   АЛИСА СМИРНОВА
  </b>
  <a href="#works">
   МОИ РАБОТЫ ↘
  </a>
 </nav>
 <section class="intro">
  <p class="label">
   ПРИВЕТ! Я УЧУСЬ СОЗДАВАТЬ
  </p>
  <h1>
   Дизайн
   <br/>
   с
   <span>
    характером.
   </span>
  </h1>
  <p class="bio">
   Мне нравится превращать идеи в яркие постеры, иллюстрации и цифровые проекты.
  </p>
  <a class="contact" href="mailto:hello@example.com">
   Написать мне ↗
  </a>
  <div class="spark">
   ✳
  </div>
 </section>
 <section class="works" id="works">
  <div class="works-head">
   <h2>
    Избранные работы
   </h2>
   <span>
    2025 — 2026
   </span>
  </div>
  <div class="work-grid">
   <article class="work w1">
    <div class="poster">
     НЕО
     <br/>
     ОБЫЧНОЕ
     <br/>
     <i>
      ✳
     </i>
    </div>
    <p>
     01 — Афиша фестиваля
    </p>
   </article>
   <article class="work w2">
    <div class="poster poster2">
     <span>
      fresh
      <br/>
      ideas
     </span>
     <b>
      ↗
     </b>
    </div>
    <p>
     02 — Упаковка лимонада
    </p>
   </article>
   <article class="work w3">
    <div class="poster poster3">
     ТИШИНА
     <br/>
     <small>
      тоже музыка
     </small>
    </div>
    <p>
     03 — Обложка плейлиста
    </p>
   </article>
  </div>
 </section>
 <footer>
  Сделано с любопытством и чашкой чая ☕
 </footer>
</main>`, css: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f4f0e8;
  color: #21211f;
  font-family: 'DM Sans', Arial, sans-serif;
}

.portfolio {
  max-width: 1050px;
  padding: 0 55px;
  margin: auto;
}

nav {
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d2c5;
  font-size: 12px;
  letter-spacing: .1em;
}

a {
  color: inherit;
  text-decoration: none;
}

.intro {
  position: relative;
  padding: 85px 0 75px;
  border-bottom: 1px solid #d9d2c5;
}

.label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .16em;
  color: #7a53df;
}

h1 {
  font: 700 clamp(58px, 9vw, 105px)/.94 'Space Grotesk', Arial, sans-serif;
  letter-spacing: -.08em;
  margin: 23px 0;
}

h1 span {
  color: #7a53df;
}

.bio {
  font-size: 18px;
  line-height: 1.55;
  color: #666;
  max-width: 430px;
}

.contact {
  display: inline-block;
  margin-top: 15px;
  padding: 13px 18px;
  background: #21211f;
  color: #fff;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
}

.spark {
  position: absolute;
  right: 13%;
  top: 100px;
  color: #f1ae46;
  font-size: 140px;
}

.works {
  padding: 40px 0 65px;
}

.works-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

h2 {
  font: 700 32px 'Space Grotesk', Arial, sans-serif;
  letter-spacing: -.05em;
}

.works-head span {
  font-size: 12px;
  color: #777;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.poster {
  height: 230px;
  background: #e2cdff;
  display: grid;
  align-content: center;
  padding: 25px;
  color: #31214b;
  font: 700 34px/.9 'Space Grotesk', Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.poster i {
  position: absolute;
  right: 18px;
  bottom: 15px;
  font-size: 60px;
  color: #ee794e;
  font-style: normal;
}

.poster2 {
  background: #ffcf63;
  color: #e85238;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 37px;
}

.poster2 b {
  position: absolute;
  right: 17px;
  top: 15px;
  font-size: 24px;
}

.poster3 {
  background: #244b47;
  color: #e6e2cf;
  font-size: 28px;
  line-height: 1.05;
}

.poster3 small {
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
}

.work p {
  font-size: 12px;
  color: #64625d;
}

footer {
  border-top: 1px solid #d9d2c5;
  padding: 22px 0 30px;
  font-size: 13px;
  color: #666;
}

@media (max-width: 680px) {
  .portfolio {
    padding: 0 22px;
  }

  .intro {
    padding: 60px 0;
  }

  .spark {
    right: 3%;
    top: 105px;
    font-size: 75px;
    opacity: .8;
  }

  .bio {
    max-width: 80%;
    font-size: 16px;
  }

  .work-grid {
    grid-template-columns: 1fr;
  }

  .poster {
    height: 250px;
  }

  h2 {
    font-size: 26px;
  }
}`},
    cafe: {
        html: `<main class="cafe">
 <nav>
  <a class="brand" href="#top">КОФЕ / ПАУЗА</a>
  <div class="nav-links">
   <a href="#menu">МЕНЮ</a>
   <a href="#visit">КАК НАЙТИ</a>
  </div>
 </nav>
 <section class="hero" id="top">
  <div class="hero-copy">
   <p class="eyebrow">КОФЕЙНЯ У ТВОЕЙ ШКОЛЫ</p>
   <h1>Хороший<br/>день начинается<br/><i>с паузы.</i></h1>
   <p class="desc">Горячий кофе, свежая выпечка и место, где можно выдохнуть.</p>
   <a class="button" href="#menu">Что у нас есть? ↓</a>
  </div>
  <div class="cup">
   ☕
   <small>take a<br/>little break</small>
  </div>
 </section>
 <section class="menu" id="menu">
  <div class="heading">
   <p class="eyebrow">ПРОСТО И ВКУСНО</p>
   <h2>Любимое меню</h2>
  </div>
  <div class="menu-list">
   <div class="menu-item">
    <span>Капучино</span>
    <small>Эспрессо · молоко</small>
    <b>180 ₽</b>
   </div>
   <div class="menu-item">
    <span>Какао</span>
    <small>Шоколад · молоко · настроение</small>
    <b>160 ₽</b>
   </div>
   <div class="menu-item">
    <span>Булочка с корицей</span>
    <small>Только что из печи</small>
    <b>140 ₽</b>
   </div>
   <div class="menu-item">
    <span>Чай дня</span>
    <small>Спросите, какой сегодня</small>
    <b>120 ₽</b>
   </div>
  </div>
 </section>
 <section class="visit" id="visit">
  <div>
   <p class="eyebrow">ЗАХОДИ В ГОСТИ</p>
   <h2>Рядом, когда<br/>нужна пауза.</h2>
  </div>
  <p class="visit-info">
   Пн–Пт · 08:00–18:00<br/>
   Улица Школьная, 5<br/><br/>
   Улыбка бариста уже включена :)
  </p>
 </section>
 <footer>КОФЕ / ПАУЗА · Сделано с заботой и молоком</footer>
</main>`, css: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #faf7f0;
  color: #29271f;
  font-family: 'DM Sans', Arial, sans-serif;
}

.cafe {
  max-width: 1050px;
  margin: auto;
  padding: 0 54px;
}

nav {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2ddd1;
}

.brand {
  font-weight: 800;
  letter-spacing: .1em;
  color: #4e6c4d;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: #57564e;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: .1em;
}

.hero {
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 65px 4% 65px 0;
  border-bottom: 1px solid #e2ddd1;
}

.eyebrow {
  color: #698163;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .17em;
}

h1 {
  font: 700 clamp(43px, 6vw, 68px)/1.02 'Playfair Display', Georgia, serif;
  letter-spacing: -.04em;
  margin: 18px 0;
}

h1 i {
  color: #66815f;
}

.desc {
  max-width: 380px;
  color: #75736b;
  line-height: 1.6;
}

.button {
  display: inline-block;
  margin-top: 12px;
  padding: 13px 18px;
  border-radius: 30px;
  background: #587650;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
}

.cup {
  height: 240px;
  width: 240px;
  flex: none;
  border-radius: 50%;
  background: #e9d5ae;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 110px;
  transform: rotate(4deg);
}

.cup small {
  position: absolute;
  right: -12px;
  bottom: 16px;
  padding: 13px 16px;
  background: #fffdf7;
  border-radius: 50%;
  font: italic 13px 'Playfair Display', Georgia, serif;
  text-align: center;
  transform: rotate(-8deg);
}

.menu {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 50px;
  padding: 55px 0;
}

h2 {
  font: 700 36px 'Playfair Display', Georgia, serif;
  margin: 10px 0;
}

.menu-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3px 15px;
  padding: 13px 0;
  border-bottom: 1px solid #e2ddd1;
}

.menu-item span {
  font-weight: 700;
}

.menu-item small {
  color: #858278;
  font-size: 11px;
}

.menu-item b {
  grid-column: 2;
  grid-row: 1/3;
  align-self: center;
  color: #66815f;
}

.visit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 5%;
  background: #e9eee3;
  border-radius: 4px;
  margin-bottom: 35px;
}

.visit-info {
  font-size: 13px;
  line-height: 1.65;
  color: #60665b;
}

footer {
  padding: 22px 0 30px;
  border-top: 1px solid #e2ddd1;
  color: #76746b;
  font-size: 11px;
  letter-spacing: .05em;
}

@media (max-width: 680px) {
  .cafe {
    padding: 0 22px;
  }

  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    font-size: 9px;
  }

  .hero {
    min-height: 0;
    padding: 55px 0;
    gap: 8px;
  }

  h1 {
    font-size: 44px;
  }

  .desc {
    font-size: 13px;
  }

  .cup {
    height: 110px;
    width: 110px;
    font-size: 52px;
  }

  .cup small {
    font-size: 9px;
    padding: 8px;
    right: -9px;
    bottom: 0;
  }

  .menu {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 40px 0;
  }

  h2 {
    font-size: 30px;
  }

  .visit {
    padding: 25px 18px;
    gap: 10px;
  }

  .visit-info {
    font-size: 11px;
  }
}`}
};
const editor = document.getElementById('codeEditor'), select = document.getElementById('templateSelect'), preview = document.getElementById('preview');
let activeTab = 'html', current = 'event', debounce;
let edits = JSON.parse(localStorage.getItem('page-builder-edits') || '{}');
function getValue(key, tab) { return edits[key]?.[tab] ?? templates[key][tab] }
function saveCurrent() { edits[current] ||= {}; edits[current][activeTab] = editor.value; try { localStorage.setItem('page-builder-edits', JSON.stringify(edits)); document.getElementById('saveState').textContent = 'Сохранено в этом браузере' } catch (e) { document.getElementById('saveState').textContent = 'Не удалось сохранить локально' } }
function setTab(tab) { if (activeTab === tab) return; saveCurrent(); activeTab = tab; document.querySelectorAll('.tab').forEach(b => { const on = b.dataset.tab === tab; b.classList.toggle('active', on); b.setAttribute('aria-selected', on) }); editor.value = getValue(current, tab); document.getElementById('editorInfo').textContent = tab === 'html' ? 'Меняйте текст и блоки. Здесь находится HTML-разметка страницы.' : 'Меняйте цвета, шрифты, размеры и расположение элементов в CSS.'; updateCount() }
function updateCount() { document.getElementById('lineCount').textContent = `${activeTab.toUpperCase()} · ${editor.value.split('\n').length} строк` }
function pageDoc(html, css) { return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css.replace(/<\/style/gi, '<\\/style')}</style></head><body>${html}</body></html>` }
function refresh() { saveCurrent(); const html = getValue(current, 'html'), css = getValue(current, 'css'); preview.srcdoc = pageDoc(html, css) }
function schedule() { saveCurrent(); updateCount(); clearTimeout(debounce); debounce = setTimeout(refresh, 350) }
function showToast(message) { const t = document.getElementById('toast'); t.textContent = message; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2200) }
select.addEventListener('change', () => { saveCurrent(); current = select.value; editor.value = getValue(current, activeTab); updateCount(); refresh() });
document.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => setTab(b.dataset.tab)));
editor.addEventListener('input', schedule);
editor.addEventListener('keydown', e => { if (e.key === 'Tab') { e.preventDefault(); const a = editor.selectionStart, b = editor.selectionEnd; editor.setRangeText('  ', a, b, 'end'); schedule() } });
document.getElementById('refreshBtn').addEventListener('click', () => { refresh(); showToast('Предпросмотр обновлён') });
document.getElementById('resetBtn').addEventListener('click', () => { if (!confirm('Вернуть исходный код этого шаблона? Ваши изменения в нём будут удалены.')) return; delete edits[current]; localStorage.setItem('page-builder-edits', JSON.stringify(edits)); editor.value = templates[current][activeTab]; updateCount(); refresh(); showToast('Исходный шаблон восстановлен') });
document.getElementById('downloadBtn').addEventListener('click', () => { saveCurrent(); const blob = new Blob([pageDoc(getValue(current, 'html'), getValue(current, 'css'))], { type: 'text/html;charset=utf-8' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${current}-site.html`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); showToast('Готовый сайт скачан в формате HTML') });
function device(mode) { const mobile = mode === 'mobile'; preview.classList.toggle('mobile', mobile); document.getElementById('mobileBtn').classList.toggle('active', mobile); document.getElementById('desktopBtn').classList.toggle('active', !mobile) }
document.getElementById('mobileBtn').addEventListener('click', () => device('mobile')); document.getElementById('desktopBtn').addEventListener('click', () => device('desktop'));
editor.value = getValue(current, activeTab); updateCount(); refresh();