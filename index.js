console.log("Hello Batch 245!");

// What is conditional statements?
	//Conditional Statements allow us to control the flow of our program.
	//It allows us to run statement/instruction if a condition is met or run another separate instuction if not otherwise.

//[Section] If, else if and else statement

let numA = -1;

/*
	if Stamement
		-it will execute the statement/code blocks if a specified condition is met/true.
*/

if(numA>0){
	console.log("Hello from numA.");
	
}
console.log(numA>0);


/*
	Syntax:
	if(condition){
		statement;
	}
*/
	// The result of the expression added in the if's condition must result to true, esle the statement inside the if() will not run.

//lets reassign the variable numA and run an if statement with the same condition.

numA = 1;

if(numA<0){
	console.log("Hello from the reassigned value of numA");
	console.log(numA<0);
}



//It will not run because the expression now results to false.

let city = "New York";

if(city === "New York"){
	console.log("Welcome to New York!")
}


//else if clause
/*
	-Executes a statement if previous condtions are false and if the specified condtion is true
	- The 'else if' is optional and can be added to capture additional conditions to change the flow of a program.
*/

let numH = 1;

if(numH<0){
	console.log("Hello from (numH<0).");
}
else if(numH>0){
	console.log("Hello from (numH>0).");
}

/*We were able to run the else if() statement after we evaluated that the if condition was failed/false*/

//If the if() condition was passed and run, we will no longer evaluate to else if() and end the process.

// else if is dependent with if, you cannot use else if clause alone.
/*{
	else if(numH>0){
		console.log("Hello from (numH>0).");
	}
}*/
// numH = 1;
if(numH !== 1){
	console.log("hello from numH === 1!");
}else if(numH === 1){
	console.log("hello from numH>0!");

}else if(numH>0){
	console.log("Hello from the second else if clause!");
}

city = "Tokyo";

if(city === "New York"){
	console.log("Welcome to New York!");
}
else if( city === "Tokyo" ){
	console.log("Welcome to Tokyo!");
}

//else statement
	/*
		- Executes a statement if all other conditions arefalse/ not met
		- else if statment is optional and can be added to capture any other result to change the flow of program.

	*/

numH = 2;
//false
if(numH<0){
	console.log("hello from if statement");
}
//false
else if(numH>2){
	console.log("hello from the first else if");
}
//false
else if(numH>3){
	console.log("hello from the second else if");
}
//since all of the conditions above are false / not met else stament will run.
else{
	console.log("hello form the if statement");
}

// Since all of the preceeding if and else condtions were not met, the else statement was executed instead
// Else statement is also dependent with if statement, it cannot go alone.

/*{
	else{
		console.log("Hello from the else inside the code block!")
	}
}*/

	//if, else if and else statement with functions
	/*
		Most of the times we would like to use if, else if and if statement with functions to control the flow of our application

	*/

let message;

function determineTyphoonIntesity(windSpeed){
	if(windSpeed<0){
		return "Invalid argument!";
	}
	else if(windSpeed<=30){
		return "Not a typhoon yet!";
	}else if(windSpeed <= 60){
		return "Tropical depresssion detected!";
	}else if(windSpeed <= 88){
		return "Tropical Storm detected!";
	}else if (windSpeed <= 117){
		return "Severe tropical strom detected!";
	}else if(windSpeed>=118){
		return "Typhoon detected."
	}
	else{
		return "Invalid argument!";
	}
}
	// mini-activity
	//1 . add return 'Tropical Storm detected' if the windspeed is between 60 and 89
	//2. add return "Severe Tropical Storm Detected" if the windspeed is between 88 and 118
	//3. if higher than 117, return "Typhoon detected!"
console.log(determineTyphoonIntesity("q"));

	message = determineTyphoonIntesity(119);

	if(message === "Typhoon detected."){
		// console.warn() is a good way to print warning in our console that could help us developers act on certaion output within our code.
		console.warn(message);
	}

//[Section] Truthy or falsy
	// Javascript a "truthy" is a value that is considered true when encountered in Boolean context
	//Values are considered true unless defined otherwise.

	// falsy values/ exceptions for truthy
	/*
		1. false
		2.0
		3. -0
		4. ""
		5. null
		6. undefined
		7. NaN - not a number
	*/

if(true){
	console.log("true");
}

if(1){
	console.log("true");
}

if(null){
	console.log("Hello from null inside the if condition.")
}
else{

	console.log("hello from the else of the null condition")
}
 
 // [section] Conditional operator/ Ternary operator
	/*
		The Condtional Operator
		1. condition/expression
		2.expression to execute if the condition is true or truthy
		3. expression if the condition is falsy
		Syntax:
		(expression) ? ifTrue; : ifFalse;
	*/

	let ternaryResult = (1>18) ? 1  : 2;
	
	console.log(ternaryResult);
