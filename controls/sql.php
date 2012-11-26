<?php class sql extends sn {
	
public static $action;
public static $callback;

function __construct() {

}

function getCardInfo($card=0) {
	$s="select * from leo_cards where (card=".$card.")";
	return $s;
}

} ?>
