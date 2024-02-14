// Exercice 5: Création d'une fonction throttle
const throttle = (cb, delay) => {
    let wait = false;
    return (...args) => {
        if (wait) return;
        cb(...args);
        wait = true;
        setTimeout(() => {
            wait = false;
        }, delay);
    }
}