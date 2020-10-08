var videoGames = ["Xbox", "PS4", "Nitendo DS", "3DS"];

// Remove item in array
videoGames.pop();
console.log(videoGames);

// Insert item in array
videoGames.push("Xbox One");
console.log(videoGames);

// Show itens
for(let i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

// Show itens with forEach
videoGames.forEach(function(item) {
    console.log(item);
});