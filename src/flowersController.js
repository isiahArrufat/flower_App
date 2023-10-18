const { nanoid } = require('nanoid');
const flowerLibrary = require('../data/flowerLibrary.json');






const create = (flowersList, flowerName) => {
    
    const existingFlower = flowerLibrary.find((flower) => flower.name === flowerName);
    
console.log(existingFlower);

    if (existingFlower) {
        existingFlower.id = nanoid(4)
      flowersList.push(existingFlower)
    }else {
        const newFlower = {
            name: flowerName,
            id: nanoid(4),
            shelfLife: 7
          };
        
          flowersList.push(newFlower);
         
    }
    return flowersList;
}
  
   
    



const index = (flowersList) => {
    return flowersList.map((flower) => flower.id + ' ' + flower.name).join('\n');
  }

const show = (flowersList, flowersId) => {
    const flower = flowersList.find((flower) => flower.id === flowersId);
    return flower.id + ' ' + flower.name + ' ' + flower.priceInCents + ' ' + flower.inStock + ' ' + flower.color + ' ' + flower.origin + ' ' + flower.shelfLife;
  }

const inform = console.log;

const destroy = (flowersList, flowerId) => {
  const index = flowersList.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    flowersList.splice(index, 1);
    inform('flower successfully removed from collection');
    return flowersList;
  } else {
    inform('flower not found. No action taken');
    return flowersList;
  }
}

const edit = (animals, animalId, updatedAnimal) => {
    const index = flowers.findIndex((flower) => flower.id === flowerId);
    if (index > -1) {
      flowers[index].id = flowerId;
      flowers[index].name = updatedFlowers;
      flowers[index].shelfLife = flowerLibary[updatedFlower] || 7;
      inform('flower successfully updated');
      return flowers;
    } else {
      inform('flower not found. No action taken');
      return flowers;
    }
  }

 const score = (animals) => {
    return flowers.reduce((acc, current) => acc + current.priceInCents, 0);
  }
  
  
  module.exports = {
    create,
    index,
    show,
    destroy,
    edit,
    score
};