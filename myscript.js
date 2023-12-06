let container = document.querySelector('.container');

function lineOfDivs() {
    let x = 0;
    while (x < 16) {
        const row = document.createElement('div');
        
        let i = 0;
        while (i < 16){
        const div = document.createElement('div')
        div.style.minHeight = '35px';
        div.style.minWidth = '70px';
        div.style.borderColor = 'black';
        div.style.borderStyle = 'dotted';
        div.style.flex = '1';
        
    
        row.appendChild(div);
        i++;
        }
        container.appendChild(row);
        x++; 
    }
}


container.style.display = 'flex';
//container.style.justifyContent = 'space-between';
container.style.alignItems = 'stretch';
container.style.flex = '1';


lineOfDivs();