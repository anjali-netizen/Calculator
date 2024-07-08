let input=document.getElementById('inputbox');
let buttons =document.querySelectorAll('button');

let str="";                     /*to store result*/
let arr=Array.from(buttons);    /* we made array of button to ise loop on it*/
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
       if(e.target.innerHTML == '='){
          str=eval(str);       /*evaluate is a inbuilt func in js which give value after evaluating mathematically*/  /*string value on evaluating strored in string*/
          input.value=str;    /*storing string in input ka value*/
       }
       else if(e.target.innerHTML == 'AC'){
          str="";
          input.value=str;
       }
       else if(e.target.innerHTML=='DEL'){
          str=str.substring(0,str.length-1);      /*remove one digit of string,returns the substring*/
          input.value=str;
       }     
       else{
          str += e.target.innerHTML;
          input.value=str;
       }
    });
});