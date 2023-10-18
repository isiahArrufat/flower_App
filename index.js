const { readJSONFile, writeJSONFile } = require('./src/helpers');
const flowers = readJSONFile('./data', 'flowersList.json');
const { create, index, show, destroy, edit, score, } = require('./src/flowersController');
const inform = console.log;





const run = () => {
  let writeToFile = false;
  let updatedFlowers = [];
  const action = process.argv[2];
  const flower = process.argv[3];
  switch (action) {
    case "index":
        const flowersView = index(flowers);
        inform(flowersView);
        break;
    case "create":
        updatedFlowers = create(flowers, flower);
        writeToFile = true;
        break;
    case "show":
        const flowerView = show(flowers, flower);
      inform(flowerView);
        break;
    case "update":
        updatedFlowers = edit(flowers, flower, process.argv[4]);
        writeToFile = true;
        break;
    case "destroy":
         updatedFlowers = destroy(flowers, flower);
         writeToFile = true;
        break;
    case "score":
        inform(`total value of all flowers you've added to your database:`, score(flowers));
        break;
     default:
      inform('There was an error.');
  }
  if (writeToFile) {
    writeJSONFile('./data', 'flowersList.json', updatedFlowers);
  }
}

run();