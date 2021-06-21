let input = document.getElementById('input');




let filterNames = () => {
    let input = document.getElementById('input');
    let inputValue = input.value.toUpperCase();
    

    let li = document.querySelectorAll('li');
   

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];


        if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1 && a.innerHTML.toUpperCase().indexOf(inputValue) < 1){
            li[i].style.display = 'block';
            
             
        } else {
            li[i].style.display = 'none'; 
            
        }

    }


    
}

let inputEvent = input.addEventListener('keyup', filterNames)





