const dropdown = document.getElementById('dropdown');
const output = document.getElementById('output');
let selection;

const changeHandler = async () => {
    selection = event.target.value;
    let data = await fetch(`/joke/${selection}`);
    output.innerText = await data.json();
}

dropdown.addEventListener('change', changeHandler);
