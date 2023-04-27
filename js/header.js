const btnEl = document.querySelector('.mo_btn');
const delEl = document.querySelector('.mo_delbtn');
const motextAll = document.querySelector('.mo_menutext');
const Momenu = document.querySelector('.mo_menuwrap');

btnEl.addEventListener('click',()=>{
    Momenu.classList.add("pop");
});


delEl.addEventListener('click',()=>{
    Momenu.classList.remove("pop");
});



for( let i = 0; i<motextAll.length; i++){
    motextAll[i].addEventListener('click',()=>{
        Momenu.classList.remove("pop");
    });
};
