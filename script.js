
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --bg: #101b15;
  --panel: #19261e;
  --panel2: #202f25;
  --text: #f0f2e9;
  --muted: #a0ad9e;
  --green: #c9f27b;
  --line: #304035;
}

* { box-sizing: border-box; scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }
button, textarea { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
button:focus-visible, a:focus-visible, textarea:focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }

.navbar { height: 78px; display: flex; align-items: center; justify-content: space-between; padding: 0 7%; border-bottom: 1px solid var(--line); background: #101b15; }
.logo { font: 700 23px 'Space Grotesk', sans-serif; letter-spacing: -1px; text-decoration: none; color: var(--text); }
.logo > span:first-child { color: var(--green); }
.ai { color: var(--green); }
.nav-right { display: flex; align-items: center; gap: 17px; }
.status { display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--muted); }
.status i { width: 7px; height: 7px; border-radius: 50%; background: #e8b35a; }

.container { width: min(100% - 40px, 980px); margin: auto; }
.hero { display: grid; grid-template-columns: 1.05fr .95fr; gap: 36px; align-items: center; padding: 65px 0 40px; }
.pill { display: inline-block; padding: 10px 13px; background: #26392a; color: var(--green); border-radius: 30px; font-size: 9px; font-weight: 800; letter-spacing: 1.4px; }
.hero h1 { font: 700 clamp(43px, 6vw, 67px)/1.04 'Space Grotesk', sans-serif; letter-spacing: -3px; margin: 24px 0 18px; }
.hero h1 > span { color: var(--green); }
.hero-content > p { color: var(--muted); font-size: 14px; line-height: 1.9; max-width: 390px; }
.primary-btn { background: var(--green); color: #142118; padding: 15px 18px; border: 0; border-radius: 9px; font-weight: 800; font-size: 12px; transition: .2s; }
.primary-btn:hover { background: #dafa9c; transform: translateY(-2px); }
.hero-btn { display: inline-flex; gap: 30px; text-decoration: none; margin-top: 15px; }
.hero-note { margin-top: 25px; font-size: 9px; color: #8b9c8b; letter-spacing: 1.5px; }

.landscape { position: relative; height: 315px; border-radius: 16px; overflow: hidden; background: linear-gradient(155deg, #d9e6a8 0%, #8fb58a 52%, #436d4d 100%); }
.sun { position: absolute; top: 40px; right: 48px; width: 63px; height: 63px; background: #ffe49b; border-radius: 50%; box-shadow: 0 0 0 15px #ffe49b24; }
.cloud { position: absolute; width: 65px; height: 14px; background: #ffffff70; border-radius: 30px; }
.cloud1 { top: 60px; left: 35px; }
.cloud2 { top: 92px; left: 110px; transform: scale(.7); }
.mountain { position: absolute; bottom: -100px; width: 250px; height: 260px; transform: rotate(45deg); border-radius: 22px; }
.m1 { background: #a1be8b; left: -65px; bottom: -125px; }
.m2 { background: #5e9166; left: 120px; bottom: -165px; }
.m3 { background: #345f42; right: -70px; bottom: -150px; }
.land-label { position: absolute; top: 23px; left: 22px; color: #294e34; font: 700 10px/1.8 'Space Grotesk'; letter-spacing: 1px; }
.land-label span { font-size: 18px; }
.plant { position: absolute; color: #e3edaa; font-size: 30px; z-index: 2; }
.plant1 { bottom: 40px; left: 17%; }
.plant2 { bottom: 25px; right: 20%; color: #ffe4a0; }
.plant3 { bottom: 68px; right: 10%; font-size: 19px; }

.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; margin: 8px 0 48px; }
.stat { background: var(--panel); border: 1px solid var(--line); border-radius: 12px; padding: 18px; display: flex; align-items: center; gap: 13px; }
.stat > span { font-size: 24px; }
.stat small { display: block; color: var(--muted); font-size: 9px; letter-spacing: 1px; }
.stat strong { display: block; font: 700 25px 'Space Grotesk'; margin-top: 5px; }

.panel { background: var(--panel); border: 1px solid var(--line); border-radius: 16px; padding: clamp(20px, 4vw, 34px); margin-bottom: 45px; }
.section-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 28px; }
.overline { color: var(--green); font-size: 9px; font-weight: 800; letter-spacing: 1.6px; }
h2 { font: 700 clamp(23px, 3vw, 29px) 'Space Grotesk'; letter-spacing: -1px; margin: 9px 0 0; }
.decor { font-size: 28px; color: var(--green); }
.label { display: block; color: #9aaa98; font-size: 9px; font-weight: 800; letter-spacing: 1.5px; margin: 25px 0 12px; }
.options { display: grid; grid-template-columns: repeat(4, 1fr); gap: 9px; }
.option { background: #1c2a20; color: #c2cebf; border: 1px solid var(--line); border-radius: 9px; min-height: 45px; padding: 10px; font-size: 11px; font-weight: 600; transition: .2s; }
.option:hover { border-color: #819d70; }
.option.active { background: #293b29; border-color: var(--green); color: var(--green); }
.activities { grid-template-columns: repeat(3, 1fr); }
.generate { width: 100%; display: flex; align-items: center; justify-content: space-between; margin-top: 29px; padding: 17px; }
.privacy { color: #859687; text-align: center; font-size: 10px; margin: 15px 0 0; }
.small-btn { padding: 10px 13px; border: 1px solid #405344; background: #202f25; color: var(--text); border-radius: 8px; font-size: 10px; font-weight: 700; }
.small-btn:hover { border-color: var(--green); }
.small-btn:disabled, .primary-btn:disabled { opacity: .6; cursor: wait; }
.hidden { display: none !important; }

.xp-badge { background: #2a3b29; border: 1px solid #43563a; border-radius: 30px; padding: 9px 12px; color: var(--green); font-size: 10px; font-weight: 800; white-space: nowrap; }
.quest-card { padding: clamp(17px, 3vw, 28px); border: 1px solid var(--line); border-radius: 12px; background: #141f18; }
.quest-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; font-size: 10px; color: var(--muted); }
.tag { color: var(--green); background: #263729; padding: 8px 10px; border-radius: 30px; font-weight: 800; font-size: 9px; }
.quest-card h3 { font: 700 clamp(23px, 4vw, 32px) 'Space Grotesk'; letter-spacing: -1px; margin: 24px 0 10px; }
.quest-card > p { font-size: 12px; line-height: 1.9; color: var(--muted); }
.step { display: flex; gap: 12px; align-items: flex-start; padding: 13px 0; border-bottom: 1px solid var(--line); color: #c4cec1; font-size: 12px; line-height: 1.6; }
.step input { accent-color: var(--green); margin-top: 3px; width: 15px; height: 15px; flex-shrink: 0; }
.step:has(input:checked) span { text-decoration: line-through; color: #829080; }

.timer { display: flex; justify-content: space-between; align-items: center; gap: 15px; background: #213026; padding: 20px; margin-top: 25px; border-radius: 10px; }
.timer strong { display: block; font: 700 32px 'Space Grotesk'; margin-top: 7px; }
.timer p { color: var(--muted); font-size: 10px; line-height: 1.6; margin-bottom: 0; }
textarea { display: block; width: 100%; resize: vertical; background: #101b15; border: 1px solid var(--line); border-radius: 9px; padding: 13px; color: var(--text); font-size: 12px; }
.complete { width: 100%; margin-top: 16px; }

.journal { margin-bottom: 42px; }
.history { display: grid; gap: 10px; }
.empty { text-align: center; border: 1px dashed #405143; border-radius: 12px; padding: 27px; color: var(--muted); font-size: 12px; }
.empty:first-line { font-size: 26px; }
.entry { display: flex; justify-content: space-between; gap: 12px; padding: 17px; background: var(--panel); border: 1px solid var(--line); border-radius: 10px; }
.entry h3 { font-size: 13px; margin: 0 0 7px; }
.entry p { font-size: 11px; line-height: 1.6; color: var(--muted); margin: 0; overflow-wrap: anywhere; }
.entry time { color: var(--muted); font-size: 10px; white-space: nowrap; }

.bottom-banner { display: flex; align-items: center; gap: 17px; background: #d6e5bd; color: #1d3522; border-radius: 12px; padding: 24px; margin: 45px 0; }
.banner-icon { font-size: 33px; }
.bottom-banner h3 { font: 700 17px 'Space Grotesk'; margin: 0 0 7px; }
.bottom-banner p { font-size: 11px; margin: 0; line-height: 1.6; color: #52694d; }
footer { border-top: 1px solid var(--line); padding: 25px 7%; display: flex; justify-content: space-between; align-items: center; gap: 15px; }
footer .logo { font-size: 17px; }
footer > span { color: #809080; font-size: 9px; letter-spacing: 1px; }
.toast { position: fixed; bottom: 22px; left: 50%; transform: translate(-50%, 15px); opacity: 0; pointer-events: none; background: #d6f29c; color: #142118; padding: 13px 18px; border-radius: 9px; font-size: 12px; font-weight: 700; transition: .2s; z-index: 10; max-width: calc(100% - 30px); text-align: center; }
.toast.show { opacity: 1; transform: translate(-50%, 0); }

@media (max-width: 650px) {
  .navbar { height: 70px; padding: 0 20px; }
  .logo { font-size: 19px; }
  .status { display: none; }
  .container { width: calc(100% - 30px); }
  .hero { grid-template-columns: 1fr; gap: 28px; padding-top: 40px; }
  .hero h1 { font-size: 49px; letter-spacing: -2px; }
  .landscape { height: 225px; }
  .stats { gap: 7px; margin-bottom: 35px; }
  .stat { padding: 12px 8px; gap: 7px; }
  .stat > span { font-size: 18px; }
  .stat small { font-size: 8px; letter-spacing: 0; }
  .stat strong { font-size: 21px; }
  .options { grid-template-columns: repeat(2, 1fr); }
  .timer { align-items: flex-start; flex-direction: column; }
  .timer .small-btn { width: 100%; }
  footer { flex-direction: column; align-items: flex-start; }
}