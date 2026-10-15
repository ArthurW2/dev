function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const numberOfOperations = 20;

const daysOnSuccess = 13;
const daysOnFailure = 1;
const daysOnAttendance = 3;
let vacationDays = 0;

for(var i = 0; i < numberOfOperations; i++) {
	try {
		mysteryOperation();

		vacationDays += daysOnSuccess;
	} catch {

		vacationDays += daysOnFailure;
	} finally{ 
		vacationDays += daysOnAttendance;
	}

}

console.log(daysEarned);
