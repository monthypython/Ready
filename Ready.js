var presentation = {};

presentation.intro = function() {
	for(var YOU in HackReactor){

		var me = {
				name: 'Bianca Gandolfo',
				follow: '@BiancaGando',
				info: [
				 	'HR Cohort 4',
				 	'Hacker in Residence Cohort 1', 
				 	'Community Evangelist', 
				 	'JS Engineer', 
				 ]
				};

		var lostandFound = email('frontdesk@hackreactor.com'),
			wifi = { name: 'HackReactor', PW: 'awesomebullets'};

		if(YOU === NeedToPee){
			return 'Bathrooms are past the kitchen on the left';
		} ;
	}
}









presentation['welcome'] = function(you, Kristen){
	Kristen.who = 'Admissions';
	Kristen.asks = function(you){
		return you + ', please read the FAQ and info' + 
		'on hackreactor.com before spamming her'
	}

	return Kristen;
};













presentaion.disclaimer = function(){
	return 'This is not a guarantee of admission,'+ 
	'just helpful guidance on your JS level.' +
	'I am not directly involved in the admissions process and' +
	'have no influence over your admissions status.'
}















presentation.admissionsProcess = function(time) {

	return {
		application: {
			know: ['JS syntax'],
			time: '1-2mos full-time',
			resources: [
				'codecademy', 
				'codeschool', 
				'learnstreet', 
				'Khan Academy',
				'team tree house',
				'adobe train symbol',
				'project euler',
				'coderbyte' ]
		},
		project: {
			know: ['jQuery', 'ajax with REST API', 'patience', 'JSON'],
			time: '10hours',
			resources: [ 
				application.resouces[0], 
				application.resouces[1],
				'stackoverflow'

				]
		},
		technicalInterview: {
			know: [
			'functional javascript', 
			'how to respond to new material',
			'communicating confusion'
			],
			time: '??',
			resources: [
				'Functional JS by OReilly Press', 
				'Eloquent JS Ch.3,6', 
				'javascriptissexy.com'
			]
		} ,
		precourse: {
			know: ['all of the above'],
			time: '60 hours',
			resources: ['TBD']
		}
	};
};












presentation.directions = {
	Step1: 'solve these challenges independentally, without researching',
	Step2: 'Try to solve Q1-3 in less than 5min each',
	Step3: 'Try to solve the others in less than 10min each',
	Step4: 'discuss solutions in a small group'
};














//8:20-8:45
presentation['syntaxChallenges'] = function(skillz){
	// Q1 write a function called doubler that takes an ARRAY of numbers 
	//and return an OBJECT whose values are double those numbers
	//and whose properties are those values (not indices)
	//input [6,2,9,4]  output => {6: 12, 2: 4, 9: 18, 4: 8}
//===================================================================
	//Q2 show examples of all the ways you can think of how to add 
	//properties and values to an OBJECT. Do the same for an ARRAY
//===================================================================
	//Q3 show examples of all the ways you can access values, properties
	//and indices of arrays and objects. 
//===================================================================
	//Q4 have the function NumberSearch(str) take the str parameter, 
	//search for all the numbers in the string, add them together, then 
	//return that final number divided by the total amount of letters 
	//in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!"
	//the output should be 2. First if you add up all the numbers, 
	//6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the 
	//string. 32 / 17 = 1.882, and the final answer should be rounded to 
	//the nearest whole number, so the answer is 2. Only single digit 
	//numbers separated by spaces will be used throughout the whole 
	//string (So this won't ever be the case: hello44444 world). 
	//Each string will also have at least one letter. 
//===================================================================

};


presentation['advancedChallenges'] = function(madSkillz){
	//Q5 write a function called first that returns the first value 
	//in an array 
	//input ['Hack', 'Reacts', 'loves', 'JS'] output 'Hack'
//===================================================================
	//Q6 write a function called last that uses the previous function
	//called first but instead returns the last value 
	//input ['Hack', 'Reacts', 'loves', 'JS'] output 'JS'
//===================================================================
	//Q7 write a function that adds up all the integers in a value 
	//using recursion
	//input => 5 output => 15 (1 + 2 + 3 + 4 + 5)
//===================================================================

};








presentation.tipsFromInterviewers = function(){
	return 'Having them focus on rather they can effectively communicate' +
	'their confusion to the interviewer would be awesome. The ones' +
	'that pass are the ones that can express what they don’t understand.' +
	'And to that, be ok with not understanding, but excited to learn.' +
	'On a technical note, truly understand the JS basics, loops,' + 
	'functions, callbacks, methods. ' +

	'I see most mess up of poor communication, fear to try,' +
	'and not knowing what , when or how to use a callback.'+

	'Understand what should get passed into and out of functions.' + 
	'Big offenders: wrong number of arguments, arguments are of wrong type,' +
	'forgetting to return values from functions'
}





