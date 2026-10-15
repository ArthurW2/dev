const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

/*changing throw errors to console so we can view the whole program*/
function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id === id)
		{
			return account;
		}
	}
	return null;
}

function createAccount (newAccountId, newAccountOwner)
{
	if(typeof(newAccountOwner) != 'string') {
		console.log("Account name is not a string");
		return;
	}
	if( newAccountOwner.trim().length == 0) {
		console.log("Account name is empty");
		return
	}

	if(newAccountId > 0) {
		accounts.push(
			{
				id: newAccountId,
				owner: newAccountOwner,
				balance: "0"
			}
		);
	} else {
		console.log("Account Id must be a positive integer");
		return;
	}
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		console.log("Account not found");
		return;
		// throw new Error("Account not found");
	}
	if(amount <= 0) {
		console.log("cannot deposit negative funds.");
		return;
		// throw new Error("Deposit is not money");
	}

	if(!Number.isFinite(amount)) {
		console.log("Deposit is not money");
		return;
		// throw new Error("Deposit is not money");
	}

	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		console.log("Account not found.");
		return;
		// throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount))
	{
		console.log("Invalid value for withdrawal amount: The amount must be a finite number.");
		return;
		// throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}

	if(amount <= 0) {
		console.log("incorrect number format, must be a positive integer");
		return;
		//throw new Error("incorrect number format, must be a positive integer");
	}

	if(account.balance - amount < 0) {
		console.log("Not enough money in account.");
		return;
		// throw new Error("Not enough money in account.");
	}

	account.balance -= amount;
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount)
	{
		console.log("Source account not found.");
		return;
		// throw new Error("Source account not found.");
	}
	if (!toAccount)
	{
		console.log("Destination account not found.");
		return;
		// throw new Error("Destination account not found.");
	}

	if (!Number.isFinite(amount) || amount < 0)
	{
		console.log("Invalid value for transfer amount: The amount must be a positive finite number.");
		return;
		// throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}
	if(fromAccount.balance - amount < 0) {
		console.log("Not enough money in Source account.");
		return;
		// throw new Error("Not enough money in Source account.");
	}
	//using our build functions instead.
	// toAccount.balance += amount;
	withdrawMoney(fromAccountId, amount);
	depositMoney(toAccountId, amount);
}


//Hints:
console.log('getAccountById("1");');
getAccountById("1");
console.log('createAccount(1, "Alice");');
createAccount(1, "Alice");
console.log('createAccount("3", "Charlie");');
createAccount("3", "Charlie");
console.log('createAccount(-3, "Charlie");');
createAccount(-3, "Charlie");
console.log('createAccount(3, ["Charlie"]);');
createAccount(3, ["Charlie"]);
console.log('createAccount(3, "");');
createAccount(3, "");
console.log('createAccount(3, "  ");');
createAccount(3, "  ");

console.log('depositMoney(1, "300")');
depositMoney(1, "300")
console.log('depositMoney(1, -300)');
depositMoney(1, -300)
console.log('depositMoney(1, 0)');
depositMoney(1, 0)
console.log('depositMoney(1, Infinity)');
depositMoney(1, Infinity)
console.log('depositMoney(4, 100)');
depositMoney(4, 100)


console.log('withdrawMoney(1, -100)');
withdrawMoney(1, -100)
console.log('withdrawMoney(1, 0)');
withdrawMoney(1, 0)
console.log('withdrawMoney(1, 501)');
withdrawMoney(1, 501)

console.log('transferMoney(1, 4, 100)');
transferMoney(1, 4, 100)
console.log('transferMoney(1, 2, 501);');
transferMoney(1, 2, 501);
console.log('transferMoney(1, 2, 100);');
transferMoney(1, 2, 100);

