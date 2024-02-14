// INFO DATE
const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');
const dateHour = document.getElementById('dateHour');

//TASKS CONTAINER
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'long'});
    dateHour.textContent = date.toLocaleTimeString('es', { hour: "2-digit", minute: "2-digit" , hour12: true})
};

const addNewTask = event => {
    event.preventDefault(); //evita que la pagina se actualice cuando se agrega una tarea
    const {value} = event.target.taskText; // se usa desestructuracion de objetos para tener el valor del eleemento tasktext
    if(!value) return; // verifica si el valor obtenido esta vacio, si esta vacion la funcion no hace nada, no guarda esaa tarea 
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);// cambia el estado de la tarea cuadno se da click sobre ella, done o toDo (hecha o pendiente )
    task.textContent = value;
    tasksContainer.prepend(task); // cada tarea va quedando al inicio de la lista 
    event.target.reset();//se borra el texto escrito y queda limpio para escribir una nueva tarea 
};

const changeTaskState = event => {
    event.target.classList.toggle('done'); // Si la tareaya tiene la classe done, entonces se la quita y no la tiene, se la pone 
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( elemento => { // se itera dentro de los nodos hijos del contenedor, cada hijo es una tarea
        elemento.classList.contains('done') ? done.push(elemento) : toDo.push(elemento); // si en la classe de css tiene done, se agrega al arreglo done , si no se agrega al arreglo toDo
    });
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach(elemento => tasksContainer.appendChild(elemento));
};

setDate();