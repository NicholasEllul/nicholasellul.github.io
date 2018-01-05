/*eslint-env browser*/

function updateBorder(elementId) {

    let element = document.getElementById(elementId);
    let style = window.getComputedStyle(element);
    let color = style.getPropertyValue('color');
    var bordersToChange = document.getElementsByName('border');
    
    for(let i = 0; i < bordersToChange.length; i ++){
        bordersToChange[i].style.border = '1px solid ' + color;
    }
 
   
}
