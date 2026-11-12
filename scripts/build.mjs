import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const template=readFileSync(path.join(root,'templates/privacy.html'),'utf8');
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
for(const file of readdirSync(path.join(root,'projects')).filter(file=>file.endsWith('.json'))){
 const p=JSON.parse(readFileSync(path.join(root,'projects',file),'utf8'));
 if(!/^[a-z0-9-]+$/.test(p.slug)||!p.name||!p.email||!p.effectiveDate||!p.purchaseRetention||!p.securityRetention)throw Error('Incomplete project: '+file);
 const values={...Object.fromEntries(Object.entries(p).filter(([,v])=>typeof v==='string').map(([k,v])=>[k,escape(v)])),deleteSubject:encodeURIComponent(p.name+' 계정 삭제 요청'),dataRows:p.data.map(([item,purpose])=>'<tr><td>'+escape(item)+'</td><td>'+escape(purpose)+'</td></tr>').join('\n'),providerRows:p.providers.map(item=>'<li>'+escape(item)+'</li>').join('\n')};
 const html=template.replace(/\{\{(\w+)\}\}/g,(_,key)=>{if(!(key in values))throw Error('Unknown template field: '+key);return values[key];});
 if(/\{\{|\[확정 필요\]/.test(html))throw Error('Unresolved policy text');
 mkdirSync(path.join(root,p.slug),{recursive:true});writeFileSync(path.join(root,p.slug,'privacy.html'),html);
 console.log(p.slug+'/privacy.html');
}
