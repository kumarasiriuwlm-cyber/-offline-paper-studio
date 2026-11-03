// Educational structure is independent of the visual template.
export const families = [
  ['exam','Examination paper','විභාග ප්‍රශ්න පත්‍රය','Full papers and term tests'],
  ['lesson','Lesson test','පාඩම් පරීක්ෂණය','One lesson or selected topics'],
  ['short','Short paper','කෙටි ප්‍රශ්න පත්‍රය','Quick quizzes and MCQ practice'],
  ['tute','Tute / worksheet','නිබන්ධනය / ක්‍රියාකාරකම්','Teach, explain and practise'],
  ['notes','Short notes','කෙටි සටහන්','Summaries, formulas and diagrams'],
  ['collection','Past-question collection','පසුගිය ප්‍රශ්න එකතුව','Organise questions with their sources']
];
const section=(id,title,instructions='',extra={})=>({id,title,instructions,rule:'all',...extra});
const partI=()=>section('paper1','Paper I','Answer all 40 questions. Choose the correct or most appropriate answer.',{duration:60,targetCount:40,allowedType:'mcq',answerMode:'none',startNumber:1});
const partA=()=>section('partA','Paper II — Part A','Answer all four questions in the spaces provided.',{duration:180,targetCount:4,answerMode:'lines',startNumber:1,newPage:true});
const partB=()=>section('partB','Paper II — Part B','Answer any three of the five questions. Use separate answer sheets.',{rule:'choose',choose:3,targetCount:5,answerMode:'none',startNumber:5,newPage:true});
export const presets = [
 {id:'ol-model',family:'exam',name:'O/L Science model — I & II',description:'40 MCQs; four compulsory structured questions; choose three of five extended questions.',sections:[partI(),partA(),partB()],duration:240,border:true},
 {id:'ol-i',family:'exam',name:'O/L Paper I — MCQ',sections:[partI()],duration:60,border:true},
 {id:'ol-ii',family:'exam',name:'O/L Paper II — A & B',sections:[{...partA(),newPage:false},partB()],duration:180,border:true},
 {id:'ol-a',family:'exam',name:'Paper II — Part A practice',sections:[{...partA(),newPage:false}],duration:60},
 {id:'ol-b',family:'exam',name:'Paper II — Part B practice',sections:[{...partB(),newPage:false}],duration:90},
 {id:'term',family:'exam',name:'School / provincial term test',sections:[section('mcq','Paper I','Answer all questions.',{duration:60,allowedType:'mcq'}),section('written','Paper II','Answer the questions as instructed.',{duration:120,newPage:true})],duration:180},
 {id:'past-original',family:'exam',name:'Original past-paper reconstruction',sections:[section('main','Original paper','Keep original instructions and source numbering.')],sourceMode:'original',duration:60},
 {id:'unit',family:'lesson',name:'Unit test',sections:[section('mcq','Multiple choice','Choose one answer.',{allowedType:'mcq'}),section('written','Structured questions','Answer all questions.')],duration:45},
 {id:'multi-lesson',family:'lesson',name:'Multi-lesson revision test',sections:[section('main','Revision questions','Answer all questions.')],duration:60},
 {id:'structured',family:'lesson',name:'Structured-question practice',sections:[section('main','Structured practice','Show working and include units where required.')],duration:40},
 {id:'mixed-short',family:'short',name:'Short mixed paper',sections:[section('main','Quick practice','Answer all questions.')],duration:30},
 {id:'mcq-short',family:'short',name:'MCQ practice',sections:[section('main','MCQ practice','Choose the best answer.',{allowedType:'mcq',answerMode:'none'})],duration:20},
 {id:'quiz',family:'short',name:'Classroom quiz',sections:[section('main','Quick quiz','Answer briefly.')],duration:10},
 {id:'homework',family:'short',name:'Homework / weekly assignment',sections:[section('main','This week’s work','Complete the activities and show your working.')],duration:0},
 {id:'theory',family:'tute',name:'Theory tute',sections:[section('outcomes','Learning outcomes'),section('theory','Lesson notes'),section('examples','Worked examples'),section('practice','Practice questions')],duration:0},
 {id:'revision-tute',family:'tute',name:'Revision tute',sections:[section('recap','Quick recap'),section('practice','Topic practice'),section('past','Past-question practice'),section('challenge','Challenge questions')],duration:0},
 {id:'worksheet',family:'tute',name:'Guided worksheet',sections:[section('main','Activities','Complete the tasks in the spaces provided.')],duration:0},
 {id:'study-pack',family:'tute',name:'Self-learning study pack',sections:[section('objectives','Learning objectives'),section('read','Read and explore'),section('activity','Try an activity'),section('practice','Practise'),section('check','Self-check')],duration:0},
 {id:'practical',family:'tute',name:'Practical / experiment worksheet',sections:['Aim','Apparatus and materials','Method and safety','Observations','Results and graph','Conclusion','Review questions'].map((t,i)=>section('lab'+i,t)),duration:0},
 {id:'lesson-note',family:'notes',name:'Lesson short note',sections:[section('main','Key ideas')],duration:0},
 {id:'one-page',family:'notes',name:'One-page revision summary',sections:[section('main','Revision at a glance')],duration:0,pageLimit:1},
 {id:'formula',family:'notes',name:'Formula and units sheet',sections:[section('main','Formulas, symbols and units','Learning resource — not an examination permission document.')],duration:0},
 {id:'comparison',family:'notes',name:'Comparison sheet',sections:[section('main','Compare and remember')],duration:0},
 {id:'diagram',family:'notes',name:'Diagram revision sheet',sections:[section('reference','Reference diagrams'),section('practice','Label and practise')],duration:0},
 {id:'mindmap',family:'notes',name:'Mind map / process sheet',sections:[section('main','Connections and processes')],duration:0},
 {id:'worked',family:'notes',name:'Worked-example sheet',sections:[section('examples','Worked examples'),section('practice','Try it yourself')],duration:0},
 {id:'topic-past',family:'collection',name:'Lesson / topic-wise past questions',sections:[section('mcq','MCQ collection'),section('structured','Structured questions'),section('extended','Extended questions')],duration:0,showSource:true},
 {id:'year-past',family:'collection',name:'Year-wise question collection',sections:[section('main','Past-question collection')],duration:0,showSource:true}
];
export const isQuestion=q=>!q.kind||q.kind==='question';
export const questionCount=p=>(p.questions||[]).filter(isQuestion).length;
export function nodeMarks(q){return !isQuestion(q)?0:q.children?.length?q.children.reduce((s,c)=>s+nodeMarks(c),0):Number(q.marks)||0}
export function groups(p){const ss=p.sections?.length?p.sections:[section('main','','')];return ss.map((s,i)=>({...s,items:(p.questions||[]).map((q,index)=>({q,index})).filter(({q})=>q.sectionId===s.id||((!q.sectionId||!ss.some(s=>s.id===q.sectionId))&&i===0))}))}
export function marksSummary(p){let printed=0,required=0,variable=false;for(const s of groups(p)){const values=s.items.filter(x=>isQuestion(x.q)).map(x=>nodeMarks(x.q));const total=values.reduce((a,b)=>a+b,0);printed+=total;if(s.rule==='choose'){const n=Math.min(Math.max(0,Number(s.choose)||0),values.length);const sorted=values.toSorted((a,b)=>a-b);const min=sorted.slice(0,n).reduce((a,b)=>a+b,0),max=sorted.slice(-n||sorted.length).reduce((a,b)=>a+b,0);required+=max;if(min!==max)variable=true}else required+=total}return {printed,required,variable}}
export function presetApply(p,presetId){const preset=presets.find(x=>x.id===presetId);if(!preset)throw Error('Unknown format');return {...p,...(preset.id.startsWith('ol-')?{subject:'Science',grade:'10–11'}:{}),preset:presetId,family:preset.family,sections:structuredClone(preset.sections),duration:preset.duration,pageBorder:!!preset.border,pageLimit:preset.pageLimit||0,sourceMode:preset.sourceMode||'adapted',showSource:!!preset.showSource,activeSection:preset.sections[0].id,questions:(p.questions||[]).map(q=>({...q,sectionId:preset.sections[0].id}))}}
export function checkDocument(p){const issues=[];for(const s of groups(p)){const qs=s.items.filter(x=>isQuestion(x.q));if(s.targetCount&&qs.length!==+s.targetCount)issues.push(`${s.title}: ${qs.length} of ${s.targetCount} questions added.`);if(s.rule==='choose'&&qs.length<+s.choose)issues.push(`${s.title}: not enough questions for “choose ${s.choose}”.`);if(s.allowedType&&qs.some(x=>x.q.type!==s.allowedType))issues.push(`${s.title}: contains a question that is not ${s.allowedType.toUpperCase()}.`)}if(marksSummary(p).variable)issues.push('Optional questions have different marks. Required totals depend on the choices made.');return issues}
export function sourceText(q){const s=q.source;if(typeof s==='string')return s;return s?[s.exam,s.year,s.paper,s.question?`original Q${s.question}`:'',s.publisher].filter(Boolean).join(' · '):''}
export function validateNode(q,depth=0){if(!q||typeof q!=='object'||depth>4)throw Error('Invalid content or subquestion nesting (maximum four levels)');if(typeof q.stem!=='string'||q.stem.length>20000)throw Error('Invalid content wording');if(q.image&&!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(q.image))throw Error('Only embedded PNG/JPEG/WebP images are supported');if(q.images){if(!Array.isArray(q.images)||q.images.length>12)throw Error('Maximum 12 diagrams per block');for(const img of q.images)validateNode({stem:'',image:img.src},depth)}if(q.table&&(!Array.isArray(q.table)||q.table.length>100||q.table.some(row=>!Array.isArray(row)||row.length>12||row.some(c=>typeof c!=='string'))))throw Error('Invalid table');if(q.kind&&!['question','note','example','table','diagram','activity','heading'].includes(q.kind))throw Error('Unsupported content block');if(isQuestion(q)){if(q.type&&!['mcq','short','structured','essay','matching'].includes(q.type))throw Error('Invalid question type');if(q.type==='mcq'){const a=q.correct==null?[]:Array.isArray(q.correct)?q.correct:[q.correct];if(!Array.isArray(q.options)||q.options.length<2||q.options.length>8||q.options.some(o=>typeof o!=='string'||!o.trim())||a.some(n=>!Number.isInteger(n)||n<1||n>q.options.length))throw Error('Invalid MCQ answer data')}}if(q.children){if(!Array.isArray(q.children)||q.children.length>60)throw Error('Too many subquestions');for(const c of q.children)validateNode(c,depth+1)}if(isQuestion(q)&&(!Number.isFinite(+q.marks)||+q.marks<0||+q.marks>1000))throw Error('Invalid marks');return q}
