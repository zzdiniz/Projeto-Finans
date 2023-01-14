
function toggleVisibility(){
    let nav = document.getElementById('nav');
    let active=nav.className;
    if(active!=='' || active){
        document.getElementById('nav').className='';
    }
    else{
        document.getElementById('nav').className='active';
    }
}

