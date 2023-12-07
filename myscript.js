let container = document.querySelector('#container');
let gridSize = 16;
let userInput = 0;
let gridItemWidth = 0;
let gridItemHeight = 0;

function addGrids() {
const addRows = document.querySelector('.addRows');
    if (addRows) {
        addRows.addEventListener('click', () => {
        userInput = window.prompt("How big do you want your grid to be? Max of 100 x 100" );
        parseInt(userInput);
        if (userInput <= 100) { 
            gridSize = parseInt(userInput);
            lineOfDivs();
            
        }
        else if (userInput > 100) {
            container.textContent = 'To big';
        }   
        else {
        
        }
        });

    }
}



    function lineOfDivs() {
    let x = 0;
    container.textContent = '';
    gridItemWidth = Math.min(1200/gridSize);
    gridItemHeight = Math.min(600/gridSize);
    
    while (x < gridSize) {
        
        const row = document.createElement('div');
        let i = 0;
        
        while (i < gridSize){
    
        const div = document.createElement('div')
        div.style.minHeight = `${gridItemHeight}px`;
        div.style.minWidth = `${gridItemWidth}px`;
        div.style.borderColor = 'black';
        div.style.borderStyle = 'dotted';
        div.style.flex = '1';
        
        
        div.addEventListener('mouseover', function() {
        for(let a = 0; a < 10; a++) {
            const randomColour = '#' + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = randomColour;
        }
        
        
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
document.getElementById("container").style.maxWidth = '1200px';





addGrids();