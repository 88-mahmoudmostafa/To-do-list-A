let input =document.getElementById('name');
let area =document.getElementById('txt');
let add =document.getElementById('add');
let output =document.getElementById('output');
let item,btndele,h4,p;

add.addEventListener('click',function(e){
    e.preventDefault();
    if(input.value=='' || input.value==" "){
        alert(' الرجاء كتابه عنؤان الاملاحظه')

    }else if( area.value=='' || area.value==' '){
        alert('الرجاء التاكد من نص الملاحظه')
    }else{
      
        let item    =document.createElement('div')
        let h4      =document.createElement('h4')
        let p        =document.createElement('p')
        let btndele =document.createElement('button')


         h4.innerHTML=input.value
       p.innerHTML  =area.value;
       btndele.innerHTML='حذف';


       item.classList.add('item')
       btndele.classList.add('move')
       h4.classList.add('hero')
       p.classList.add('more')



       item.appendChild(btndele)
       item.appendChild(h4)
       item.appendChild(p)
      
       output.appendChild(item)


        btndele.addEventListener('click' ,function(){
        output.removeChild(this.parentElement)
    });



      input.value=" "
      area.value=" "
    }


})