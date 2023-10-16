const { nanoid } = require('nanoid');
const flower = require('../data/flowersList.json');
const flowers = require('../data/flowerLibary.json');




const create = (flowers, flowerName) => {
    const flowerIndex = flowers.findIndex((flower) => flower.name === flowerName);

    if (flowerIndex !== -1) {
        const flower = { 
            name: flowerName,
            id: nanoid(4),
            shelfLife: flowers[flowerIndex].shelfLife || 7
        };
        flowers.push(flower);
    } else {
        inform('Flower not found. No action taken');
    }

    return flowers;
}

    



const index = (flowers) => {
    return flowers.map((flower) => flower.id + ' ' + flower.name).join('\n');
  }

const show = (flowers, flowersId) => {
    const animal = flowers.find((flower) => flower.id === flowerId);
    return flower.id + ' ' + flower.name + ' ' + flower.priceInCents + ' ' + flower.inStock + ' ' + flower.color + ' ' + flower.origin + ' ' + flower.shelfLife;
  }

const inform = console.log;

const destroy = (flowers, flowerId) => {
  const index = flowers.findIndex((flower) => flower.id === flowerId);
  if (index > -1) {
    flower.splice(index, 1);
    inform('flower successfully removed from collection');
    return flowers;
  } else {
    inform('flower not found. No action taken');
    return flowers;
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
    destroy,
    edit,
    score
};