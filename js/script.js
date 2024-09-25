function insertionSort(arr) {
    // Parcours à partir du deuxième élément (le premier est déjà trié)
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Élément à insérer
        let j = i - 1; 
        
        // Déplacer les éléments plus grands que current vers la droite
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Déplacement des éléments
            j--; // On recule dans la portion triée
        }
        
        // Insérer l'élément à sa place correcte
        arr[j + 1] = current;
    }
    
    return arr; // Retourne le tableau trié
}

// Exemple d'utilisation
let tableau = [29, 10, 14, 37, 13];
console.log(insertionSort(tableau)); // [10, 13, 14, 29, 37]