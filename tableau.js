"use strict"
/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "Maxime", "Gabriel", et "Kader" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "mange au kebab"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push('Maxime',"Gabriel",'Kader');

names.forEach(name =>{
    name += 'mange au kebab ';
    console.log(name)
})