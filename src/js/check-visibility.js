// refresh on visibility change reload page to refresh date

import { $ } from './dom-utils'

document.addEventListener('visibilitychange', ()=>{
    if(!document.hidden){
        console.log('visibility change');
        
        window.location.reload();
    }
})