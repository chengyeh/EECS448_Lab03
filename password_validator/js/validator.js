var password = document.getElementById("password_1");
var verifyPassword = document.getElementById("password_2");

function validator()
{
	if(password.value != verifyPassword.value)
	{
		alert("The passwords entered don't match ");
	}
	else if(password.value.length < 8)
	{
		alert("The passwords are not at least 8 characters long");
	}
	else
	{
		alert("Validated!");
	}
}
