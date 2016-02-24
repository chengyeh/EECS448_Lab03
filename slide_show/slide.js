var slide = document.getElementById("slide");

var imagesArray = new Array();
imagesArray[0] = "TaiwanLogo.jpg";
imagesArray[1] = "Taiwan.jpg";
imagesArray[2] = "jiufen.jpg";
imagesArray[3]= "liberty.jpg";
imagesArray[4]= "taiwan101.png";

var index = 0;

slide.src = imagesArray[index];

function goNext()
{
	index++;
	if(index > 4)
	{
		index = 0;
	}
	slide.src = imagesArray[index];
}

function goPrevious()
{
	index--;
	if(index < 0)
	{
		index = 4;
	}
	slide.src = imagesArray[index];
}
