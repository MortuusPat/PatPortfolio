<!DOCTYPE html>
<?php
	$myvalue = "";
   if(isset($_POST['submit']))
   {
	  
      $tal1 = $_POST['tal1'];
      $operator = $_POST['operator'];
      $tal2 = $_POST['tal2'];
    

	  
	  if($operator == "+")
	  {
		  $myvalue=$tal1+$tal2;
	  }
	  if($operator == "-")
	  {
		  $myvalue=$tal1-$tal2;
	  }
	  if($operator == "*")
	  {
		  $myvalue=$tal1*$tal2;
	  }
	  if($operator == "/")
	  {
		  $myvalue=$tal1/$tal2;
	  }
	
   }
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
   <label for="tal1">Indtast tal:</label>
   <input type="text" name="tal1"><br>
   
   <label for="operator">Indtast operator:</label>
   <input type="text" name="operator" size=6 maxlength=6><br>
   
   <label for="tal2">Indtast tal:</label>
   <input type="text" name="tal2"><br>
   
   <input type="submit" name="submit" value="Udregn"><br>
   
   <label for="resultat">Resultat</label>
   <input type="text" name="Resultat" value="<?php echo $myvalue;?>"><br>

</form>