const $=s=>document.querySelector(s),ic=d=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const pillars=[
 [ic('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/>'),'Competitions','Quizzes, debates, essays and declamation, from weekly online rounds to the QUIZDOM championship.'],
 [ic('<path d="M3 9l9-5 9 5-9 5zM7 11.5V16c0 1.5 2.2 3 5 3s5-1.500 5-3v-4.500"/>'),'Career prep','CSS and IELTS mock tests, officer conferences and a weekly CSS interaction series.'],
 [ic('<path d="M4 5h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v14h-6a3 3 0 0 0-2 1 3 3 0 0 0-2-1H4z"/><path d="M12 6v14"/>'),'Ideas and culture','Iqbal, Rumi, the Quaid and the Seerah, explored through talks, exhibits and discussion tables.'],
 [ic('<path d="M12 21s-7-4.500-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.500-9 9-9 9z"/>'),'Community','Winter drives, an iftar gathering, a campus book fair and student-led environmental work.']];
$('#pillars').innerHTML=pillars.map(p=>`<div class="card chamfer">${p[0]}<h3>${p[1]}</h3><p>${p[2]}</p></div>`).join('');
const E=[
['culture','Aug 24, 2025','78th Independence Day ceremony','Family-inclusive','Flag hoisting, a guard of honour and a Q&A with prizes for correct answers.'],
['community','Aug 31, 2025','Kindness is Power webinar','200 attendees','An online session on disease awareness, prevention and spotting health misinformation.'],
['comp','Sep 29-30, 2025','Inter and intra-departmental competitions','500 participants','Academic, creative and sports tracks across two days, including Tilawat and Naat.'],
['culture','Oct 1-2','Know Your Prophet: Living the Sunnah','4,000-4,500 attendees','Poster gallery, Seerah models, VR views and Naat, Qirat and calligraphy contests.'],
['community','Oct 21, 2025','Anti-Smog Gun inauguration','Chief guest: Punjab Senior Minister','A student-led engineering project to cut smog, launched with a technical briefing.'],
['career','Oct 27-28, 2025','CSS Officers Conference','15 officers, 200 students','Probationary officers from the 53rd CSS Training Programme shared their preparation.'],
['community','Dec 15, 2025','Winter Drive','About 300 people helped','Collected, sorted and handed out warm clothing in and around the campus.'],
['culture','Dec 19, 2025','International Rumi o Iqbal Conference','Talks and discussion','Khudi, love and unity, with open discussion of the poetry.'],
['career','Dec 28, 2025','Nishat Emporium industrial tour','Society members','A look at facility management, safety systems and retail operations.'],
['community','Mar 8, 2026','Moment March','About 50 volunteers','A heritage day: Bagh-e-Jinnah, Badshahi Mosque and Wazir Khan Mosque.'],
['comp','Mar 11, 2026','Quaid-e-Azam competitions and seminar','100 participants','A seminar, a debate and an essay contest on Jinnah\'s vision.'],
['community','Mar 11, 2026','Grand Iftar with Ilm o Iftar contests','About 150 participants','Essay, quiz and debate rounds, then a shared iftar with students from several institutions.'],
['culture','May 19, 2026','Iqbaliat','60 student volunteers','Debate and essay competitions built around Allama Iqbal\'s idea of Khudi.'],
['culture','May 19, 2026','Paigham-e-Pakistan','250 student volunteers','Essay and declamation contests and an open Q&A on peace and tolerance.'],
['comp','May 20, 2026','QUIZDOM 2026 championship','250 students in pairs','Written screening, an on-stage quiz and an audio-visual grand finale.'],
['career','May 20, 2026','CSS MPT mock test','250 students','A 200-question, 3-hour paper followed by mentoring with CSS officers.'],
['career','May 20, 2026','IELTS mock test','250 students','Listening, reading, writing and speaking, then mentoring for the top 10.'],
['culture','May 19-20, 2026','Annual UET Book Fair','1,500+ visitors','Two days of academic, technical and general reading at campus prices.'],
['career','Weekly','CSS Interaction series','80-100 per session','Online sessions on current affairs, essays, viva and exam strategy.'],
['comp','Weekly','Quiz session','40-50 per session','A recurring online quiz across current affairs, science, history and literature.'],
['culture','Weekly','Discussion Tables','50-70 per session','Open-forum talks in the library on national, educational and social issues.']];
const cats={all:'All',comp:'Competitions',career:'Career',culture:'Culture',community:'Community'};
$('#chips').innerHTML=Object.entries(cats).map(([k,v])=>`<button class="chip chamfer" style="--cut:8px" data-k="${k}" aria-pressed="${k=='all'}">${v}</button>`).join('');
function draw(k){$('#evs').innerHTML=E.filter(e=>k=='all'||e[0]==k).map(e=>`<article class="card ev chamfer"><time>${e[1]}</time><h3>${e[2]}</h3><p>${e[4]}</p><div class="m">${e[3]}</div></article>`).join('');tilt()}
$('#chips').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c==b));draw(b.dataset.k)};
function tilt(){document.querySelectorAll('.card').forEach(c=>{if(c.dataset.t)return;c.dataset.t=1;
 c.addEventListener('pointermove',e=>{if(e.pointerType!='mouse')return;const r=c.getBoundingClientRect();c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*8+'deg');c.style.setProperty('--rx',(.5-(e.clientY-r.top)/r.height)*8+'deg')});
 c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})})}
draw('all');
/* count-up */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;io.unobserve(x.target);const t=+x.target.dataset.n,s=x.target.dataset.s||'',t0=performance.now();
 (function f(n){const p=Math.min((n-t0)/1400,1);x.target.textContent=Math.round(t*(1-Math.pow(1-p,3))).toLocaleString()+(p==1?s:'');if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(n=>io.observe(n));
/* 3D scene */
try{
const cv=$('#gl'),R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100);C.position.set(0,0,8);
S.add(new THREE.AmbientLight(0x3a6a75,.9));const L=new THREE.PointLight(0x22e3f5,2.2,40);L.position.set(4,4,6);S.add(L);
const L2=new THREE.PointLight(0x2bb6ff,1.2,40);L2.position.set(-5,-3,4);S.add(L2);
const core=new THREE.Group();S.add(core);
const g=new THREE.IcosahedronGeometry(1.7,1);
core.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:0x0b3540,emissive:0x052a33,flatShading:true,metalness:.6,roughness:.35,transparent:true,opacity:.92})));
core.add(new THREE.LineSegments(new THREE.EdgesGeometry(g),new THREE.LineBasicMaterial({color:0x22e3f5,transparent:true,opacity:.7})));
const gem=new THREE.Mesh(new THREE.OctahedronGeometry(.62),new THREE.MeshStandardMaterial({color:0x22e3f5,emissive:0x0ab8cc,flatShading:true}));core.add(gem);
const rings=[2.5,3.1].map((r,i)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(r,.012,8,120),new THREE.MeshBasicMaterial({color:i?0x2bb6ff:0x22e3f5,transparent:true,opacity:.55}));m.rotation.x=1.2+i*.6;core.add(m);return m});
const N=1100,pa=new Float32Array(N*3);for(let i=0;i<N;i++){const r=6+Math.random()*16,a=Math.random()*6.283,b=Math.acos(2*Math.random()-1);pa.set([r*Math.sin(b)*Math.cos(a),r*Math.sin(b)*Math.sin(a)*.7,r*Math.cos(b)],i*3)}
const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pa,3));
const pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0x22e3f5,size:.045,transparent:true,opacity:.75}));S.add(pts);
const grid=new THREE.GridHelper(60,60,0x0e5a66,0x0a2a32);grid.position.y=-3.4;grid.material.transparent=true;grid.material.opacity=.45;S.add(grid);
let mx=0,my=0,sp=0,tp=0,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const sc=()=>{const h=document.documentElement.scrollHeight-innerHeight;tp=h>0?scrollY/h:0};addEventListener('scroll',sc,{passive:true});sc();
function rs(){const w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}addEventListener('resize',rs);rs();
const clock=new THREE.Clock();
function loop(){const t=clock.getElapsedTime(),narrow=innerWidth<820;sp+=(tp-sp)*.06;
 const k=reduce?0:1;core.rotation.y=t*.25*k+sp*7;core.rotation.x=Math.sin(t*.3)*.15*k+sp*2;gem.rotation.y=-t*.8*k;gem.rotation.z=t*.5*k;
 rings[0].rotation.z=t*.3*k;rings[1].rotation.z=-t*.2*k;
 const s=narrow?.72:1;core.scale.setScalar(s*(1-Math.min(sp*1.6,.35)));
 core.position.x=narrow?0:Math.sin(sp*9)*3.1*Math.min(sp*10,1);core.position.y=(narrow?.6:0)+Math.sin(t*.9)*.12*k-sp*.8;
 C.position.z=8+sp*3;C.position.x+=(mx*1.2-C.position.x)*.04;C.position.y+=(-my*.8-C.position.y)*.04;C.lookAt(0,0,0);
 pts.rotation.y=t*.02*k+sp*.8;grid.position.z=(t*.4*k)%1;L.position.x=4+mx*6;
 R.render(S,C);requestAnimationFrame(loop)}
loop();
}catch(e){document.body.style.background='radial-gradient(circle at 50% 30%,#052a33,#010509 60%)'}
