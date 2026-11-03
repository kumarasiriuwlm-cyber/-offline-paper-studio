import {contentInLanguage} from './i18n.js?v=0.5.0';
import {validateNode,isQuestion} from './formats.js?v=0.5.0';
export const types=['mcq','short','structured','essay','matching'];
export const clone=x=>structuredClone(x);
export function normalize(payload){
 if(payload?.format!=='PAPER_STUDIO_BANK_V1'||!payload.bank||!Array.isArray(payload.questions))throw Error('Unsupported bank format');
 const b=payload.bank;if(!/^[\w.-]{2,70}$/.test(b.id||'')||!b.name||!b.subject||!Number.isInteger(+b.grade)||+b.grade<1||+b.grade>13||!b.version)throw Error('Invalid bank metadata');
 if(payload.contentBlocks!==undefined&&!Array.isArray(payload.contentBlocks))throw Error('contentBlocks must be an array');const records=[...payload.questions,...(payload.contentBlocks||[])];if(records.length>20000)throw Error('Maximum 20,000 questions per bank');
 const ids=new Set();const questions=records.map((q,i)=>{
 const fail=m=>{throw Error(`Question ${i+1}: ${m}`)};
 if(!/^[\w.-]{1,80}$/.test(q.id||'')||ids.has(q.id))fail('invalid or duplicate ID');ids.add(q.id);
 if((isQuestion(q)&&!types.includes(q.type))||typeof q.stem!=='string'||!q.stem.trim()||q.stem.length>12000)fail('invalid type or wording');
 if(q.tags!==undefined&&(!Array.isArray(q.tags)||q.tags.some(t=>typeof t!=='string')))fail('tags must be text strings');
 if(q.difficulty&&!['easy','medium','hard'].includes(q.difficulty))fail('invalid difficulty');
 const correct=q.correct==null?[]:Array.isArray(q.correct)?q.correct:[q.correct];
 if(isQuestion(q)&&q.type==='mcq'&&(!Array.isArray(q.options)||q.options.length<2||q.options.length>8||q.options.some(o=>typeof o!=='string'||!o.trim())||correct.some(n=>!Number.isInteger(n)||n<1||n>q.options.length)))fail('invalid options or answer');
 if(isQuestion(q)&&(!Number.isFinite(+q.marks)||+q.marks<0||+q.marks>1000))fail('marks must be 0–100');
 if(q.image&&!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(q.image))fail('image must be embedded PNG, JPEG or WebP');
 
 validateNode(q);return {...q,qid:b.id+'::'+q.id,bankId:b.id,grade:String(b.grade),subject:b.subject,language:q.language||b.language||'en',lesson:q.lesson||'General',difficulty:q.difficulty||'medium',correct,options:q.options||[],marks:isQuestion(q)?+q.marks:0,verification:q.verification||'unverified',tags:q.tags||[],used:0};
 });return {bank:{...b,grade:String(b.grade),count:questions.length,installedAt:new Date().toISOString()},questions};
}
export function filterQuestions(qs,f={}){return qs.filter(q=>['grade','subject','type','difficulty','lesson'].every(k=>!f[k]||f[k]==='all'||String(q[k])===String(f[k]))&&(!f.language||f.language==='all'||q.language===f.language||!!q.translations?.[f.language])&&(!f.lessons?.length||f.lessons.includes(q.lesson))&&(!f.search||[q.stem,q.answer,q.lesson,...(q.tags||[])].join(' ').toLocaleLowerCase().includes(f.search.toLocaleLowerCase())))}
export function assemble(qs,config){let seed=+config.seed||1;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};let pool=filterQuestions(qs,config).filter(q=>!config.avoidRecent||!q.lastUsed||Date.now()-Date.parse(q.lastUsed)>30*86400000);const chosen=[];
 for(const [type,count]of Object.entries(config.counts)){if(!Number.isInteger(count)||count<0||count>300)throw Error('Counts must be integers from 0 to 300');let eligible=pool.filter(q=>q.type===type);if(eligible.length<count)throw Error(`${type}: requested ${count}, available ${eligible.length}`);for(let i=eligible.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[eligible[i],eligible[j]]=[eligible[j],eligible[i]]}
 if(config.mode==='balanced'){const groups=Object.groupBy(eligible,q=>q.lesson);eligible=[];while(Object.values(groups).some(g=>g.length))for(const g of Object.values(groups))if(g.length)eligible.push(g.pop())}
 chosen.push(...eligible.slice(0,count));}
 if(!chosen.length)throw Error('Choose at least one question');if(config.targetMarks&&chosen.reduce((s,q)=>s+q.marks,0)!==+config.targetMarks)throw Error('Selected marks do not match target. Adjust counts or clear target marks.');return clone(chosen);
}
export function validateBackup(b){if(b?.format!=='PAPER_STUDIO_BACKUP_V1'||!b.data)throw Error('Unsupported backup');for(const s of ['questions','banks','papers','profiles','settings']){if(!Array.isArray(b.data[s]))throw Error('Missing '+s);const seen=new Set();for(const r of b.data[s]){const k=s==='questions'?r.qid:r.id;if(typeof k!=='string'||seen.has(k))throw Error('Invalid/duplicate '+s+' key');seen.add(k);if(s==='papers'){if(!Array.isArray(r.questions))throw Error('Invalid paper');for(const q of r.questions)validateNode(q);if(r.sections&&(!Array.isArray(r.sections)||r.sections.some(s=>typeof s.id!=='string')))throw Error('Invalid sections');}if(s==='questions')validateNode(r);}}return b.data}
export const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
