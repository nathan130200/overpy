"use strict";

var currentLineNb = 0;
var currentColNb = 0;

//Global variable used for "skip ifs", to keep track of where the skip if ends.
//Is reset at each rule. (for decompilation)
var decompilerGotos = []

//Global variable used for the number of tabs.
//Is reset at each rule. (for decompilation)
var nbTabs = 0;

//Global variable used to mark the action number of the last loop in the rule.
//Is reset at each rule. (for decompilation)
var lastLoop = -1;

//Global variable used to keep track of each name for the current array element.
//Should be the empty array at the beginning and end of each rule; if not, throws an error. (for compilation and decompilation)
var currentArrayElementNames = [];

//Dictionary used for for loops.
//Should be empty at the beginning and end of each rule. (for compilation)
var forLoopVariables = {};

//Timer for for loop variables; when it is reached, delete the corresponding variable.
var forLoopTimers = [];

//Global variable used to keep track of operator precedence.
//Is reset at each action and rule condition. (for decompilation)
var operatorPrecedenceStack = [];

//Arguments of the format() function for strings.
var formatArgs = [];

//Operator precedence, from lowest to highest.
var operatorPrecedence = {
	"or":1,
	"and":2,
	"not":3,
	"==":4,
	"!=":4,
	"<=":4,
	">=":4,
	">":4,
	"<":4,
	"+":5,
	"-":5,
	"*":6,
	"/":6,
	
	//Although in Python the modulo operator has the same precedence as * and /,
	//it must have a higher precedence because (a*b)%c is not the same as a*(b%c).
	"%":7,
	"**":8,
};

//Python operators, from lowest to highest precedence.
var pyOperators = [
	"=",
	"+=",
	"-=",
	"*=",
	"/=",
	"%=",
	"**=",
	"++",
	"--",
	"or",
	"and",
	"not",
	"in",
	"==",
	"!=",
	"<=",
	">=",
	">",
	"<",
	"+",
	"-",
	"*",
	"/",
	"%",
	"**",
];
