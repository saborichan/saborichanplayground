const panels = document.querySelectorAll('.panel');
//做成nodelist 
console.log(panels);
console.log(panels[0]);

//每一個panel 都將執行 console.log(panel);所以列出很多的<div class="panel">~~~
panels.forEach((panel) => {
    console.log(panel)
})


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//classlist是內建method 
/*
classlist.remove('')
classlist.add('')
*/
//
function removeActiveClasses() {
    panels.forEach(panel => {
    panel.classList.remove('active')
    })
}