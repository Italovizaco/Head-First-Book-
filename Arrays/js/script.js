// array exercises 01 creating an array

let flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"]

// accessing a item inside an array

let flavorOfTheDay = flavors[2]
console.log(flavorOfTheDay);

//updating an array value

flavors[3] = "vanilla chocolate chip"

//discovering a size of an array

let numFlavors = flavors.length
console.log(flavors.length);
console.log(numFlavors);

function makePhrases(){
  let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"]
  let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"]
  let words3 = ["process", "solution", "", "focused", "aligned"]

  let rand1 = Math.floor(Math.random() * words1.length)
  let rand2 = Math.floor(Math.random() * words2.length)
  let rand3 = Math.floor(Math.random() * words3.length)

  let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3]
  alert(phrase)
}
makePhrases()

