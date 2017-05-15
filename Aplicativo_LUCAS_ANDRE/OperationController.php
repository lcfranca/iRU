<?php
class Operations {
	function EstimatePeople($myArray){
		$count = 0;
		$d=strtotime("-15 Minutes");
		foreach ($myArray as $value) {
			 //fazer a condição certa
			//tempo da atual - tempo da compra < 15 min =>> count++
			if(date("Y-m-d h:i:sa", $d) - $value <= 15) {
				$count++;
			}
		}
	}
}