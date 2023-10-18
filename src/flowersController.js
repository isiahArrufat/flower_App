const { nanoid } = require('nanoid');
const flowerLibrary = require('../data/flowerLibrary.json');






const create = (flowersList, flowerName) => {
    
    const existingFlower = flowerLibrary.find((flower) => flower.flower_name === flowerName);
    
console.log(existingFlower);

    if (existingFlower) {
        existingFlower.id = nanoid(4)
      flowersList.push(existingFlower)
    }else {
        const newFlower = {
            flower_name: flowerName,
            id: nanoid(4),
            petal_count: 80
          };
        
          flowersList.push(newFlower);
         
    }
    return flowersList;
}
  
   
    



const index = (flowersList) => {
    return flowersList.map((flower) => flower.id + ' ' + flower.flower_name).join('\n');
  }

const show = (flowersList, flowersId) => {
    const flower = flowersList.find((flower) => flower.id === flowersId);
    return `flowerid:${flower.id} flowerName:${flower.flower_name} petal_count:${flower.petal_count} stemLength:${flower.stem_length} flowerColor:${flower.color} wateringNeeds:${flower.watering_needs} growingSeason:${flower.growing_season}`;
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

const edit = (flowersList, flowerId, updatedFlower) => {
    const index = flowersList.findIndex((flower) => flower.id === flowerId);
    if (index > -1) {
      flowersList[index].id = flowerId;
      flowersList[index].flower_name = updatedFlower;
      flowersList[index].petal_count = flowersList[updatedFlower] || 70;
      inform('flower successfully updated');
      return flowersList;
    } else {
      inform('flower not found. No action taken');
      return flowersList;
    }
  }

 const score = (flowersList) => {
    return flowersList.reduce((acc, current) => acc + current.petal_count, 0);
  }
  
  
  module.exports = {
    create,
    index,
    show,
    destroy,
    edit,
    score
};