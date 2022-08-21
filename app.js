const item = document.querySelector('.item')
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
const placeholders = document.querySelectorAll('.placeholder')

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragover(event) {
console.log('drag over');
event.preventDefault()
event.target.classList.add('hovered')
}

function dragenter(event) {
    console.log('drag enter');
   
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('drag leave');
}

function dragdrop(event) {   
    console.log('drag drop');
    event.target.append(item)
    event.target.classList.remove('hovered')
}

function dragstart(event){
    console.log('drag start');
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}


function dragend(event){   
    event.target.classList.remove('hold', 'hide')
    console.log('drag end');
}