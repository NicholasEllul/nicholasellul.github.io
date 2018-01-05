/*eslint-env browser*/

function updateBorder(elementId) {

                alert("E");
    let element = document.getElementById(elementId);
    let style = window.getComputedStyle(element);
    let color = style.getPropertyValue('color');
    let bordersToChange = document.getElementsByName('border');
//    for(let i = 0; i < bordersToChange.length; i ++){

        bordersToChange[0].style.border = '1px solid ' + color;
    
 
   
}

function changeAboutText(idOfWhatToShow) {
    
    let descIds = ['dev-desc', 'student-desc', 'photo-desc'];
    
    for(int i = 0; i < 3 i++){
        if(descIds[i] === idOfWhatToShow){
            document.getElementById(descIds[i]).style.display = 'block';
        }
        else{
            document.getElementById(descIds[i]).style.display = 'none';
        }
    }
}

