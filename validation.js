const first_name = document.getElementById('first-name');
const last_name = document.getElementById('last-name');
const pesel = document.getElementById('pesel');

const form = document.getElementById('pakunek');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputData();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succes');
}

const setSucces = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputData = () => {
    const userName = first_name.value.trim();
    const userLastName = last_name.value.trim();
    const userPesel = pesel.value.trim();

    //walidacja dla imienia
    if (userName.length >20 || userName.length < 1)  {
        setError(first_name, 'Wprowadz poprawne imie (do 20 liter)');
    } else {
        setSucces(first_name, 'Super');
    }

    //walidacja dla nazwiska
    if (userLastName.length > 30 || userLastName.length < 1) {
        setError(last_name, 'Wprowadz poprawne nazwisko (do 30 liter)');
    }
     else {
        setSucces(last_name, 'Super');
    }

    //walidacja dla peselu
    if (userPesel.length != 11) {
        setError(pesel, 'Wprowadz poprawny pesel (11 cyfr)');
    } else {
        setSucces(pesel, 'Super')
    }


}

