var row = 0;
var col = 0;
var colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
var randomColor = '000000';
var img = true;
var imgCol = Math.floor((Math.random() * 24) + 0);
var imgRow = Math.floor((Math.random() * 80) + 0);
for (row = 0; row <= 80; row++)
{
document.write("<tr>");

	for (col = 0; col <= 24; col++)
	{
		
		if(col == imgCol && row == imgRow)
		{
			/** 
			* Hvad end jeg prøver, så loader den ikke billede.
			*/
		    document.write("<td>");
			document.write("<img src=");
			document.write("..\pictures\holger\holger.png");
			document.write(">");
			document.write("</td>");
			

			imgCol = null;
		}
		else
		{
			randomColor = colors[Math.floor(Math.random() * colors.length)];
			document.write("<td style =" + "background-color:"+ "#"+randomColor+";" + " >" + 0 + "</td>");
		}
		
		
		
	}
document.write("</tr>");
}




        


            