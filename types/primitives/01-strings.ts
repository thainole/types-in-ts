/* STRINGS */

const myFavoriteSinger = 'Taylor Swift';
// const myFavoriteSinger = `Taylor Swift`;
// const myFavoriteSinger = "Taylor Swift";
// const myFavoriteSinger: string = 'Taylor Swift;

// probando propiedades de strings con typescript
console.log(myFavoriteSinger.length);
console.log(myFavoriteSinger.toLowerCase());
console.log(
  myFavoriteSinger[13]?.toUpperCase() || 'No tiene suficientes letras'
);
