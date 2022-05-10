require('dotenv').config();

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con  API key y con Token');
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`

trello.addCard(cardTitle, "LaunchX Card Description", "627a8c8bf3abe40356ee49ed",
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});