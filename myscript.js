let container = document.querySelector('.container');
let gridSize = 16;
let userInput = 0;


function addGrids() {
const addRows = document.querySelector('.addRows');
    if (addRows) {
        addRows.addEventListener('click', () => {
        userInput = window.prompt("How big do you want your grid to be? Max of 100 x 100" );
        parseInt(userInput);
        if (userInput) { 
            gridSize = parseInt(userInput);
            lineOfDivs();
        }
        else {
        }   
        });

    }
}



    function lineOfDivs() {
    let x = 0;
    container.textContent = '';
    
    while (x < gridSize) {
        const row = document.createElement('div');
        let i = 0;
        
        while (i < gridSize){
        const div = document.createElement('div')
        div.style.minHeight = '35px';
        div.style.minWidth = '70px';
        div.style.borderColor = 'black';
        div.style.borderStyle = 'dotted';
        div.style.flex = '1';
        div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'grey';
        })
    
        row.appendChild(div);
        i++;
        }
        container.appendChild(row);
        x++; 
    }
}

//CSS styling 
container.style.display = 'flex';
container.style.alignItems = 'stretch';
container.style.flex = '1';


addGrids();