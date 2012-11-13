<?php class start extends sn {

function __construct() {
	
	load("index.tpl");
	innerHTML("#main","test");
	echo html();
}

} ?>
