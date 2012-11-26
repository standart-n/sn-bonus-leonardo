<?php class bonus extends sn {
	
public static $conf;
public static $options;
public static $url;
public static $j;

function __construct() {
	self::$j=array();
	self::$j['bonus']=array();
}

function showCardInfo() {	
	if (self::getCardInfo()) {
		return json_encode(self::$j);
	} else {
		return false;
	}
}

function getCardInfo() {
	if (query(sql::getCardInfo(url::$card),$ms)) {
		foreach ($ms as $r) {
			if (isset($r->bonus_exists)) {
				self::$j['bonus']['exists']=intval($r->bonus_exists);
				return true;
			}
		}
	}
	return false;	
}

} ?>
