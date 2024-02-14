// Exercice 4: Création d'une fonction de debounce
const debounce = (cb, delay = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer); // Clear of timeout if exist
        timer = setTimeout(() => {
            cb(...args); // Return the callback
        }, delay);
    };
};