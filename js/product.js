const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
console.log(buttons)

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();


        const btnfilter=e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(btnfilter=='all'){
                box.style.display='block';
            }
            else{
            const boxfilter=box.dataset.id;
            if(btnfilter==boxfilter){
                box.style.display="block"
            }
            else{
                box.style.display="none";
            }
        }
        })
    })
})