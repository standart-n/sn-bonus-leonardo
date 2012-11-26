<?php class url extends sn {
	
public static $action;
public static $card;
public static $callback;

function __construct() {
	
}

function getUrl {
	if (isset($_REQUEST["action"])) {
		self::$action=trim(strval($_REQUEST["action"]));
	}
	if (isset($_REQUEST["callback"])) {
		self::$callback=trim(strval($_REQUEST["callback"]));
	}

	if (isset(self::$action)) {
		switch (self::$action) {
			if (!isset($_REQUEST["card"])) { return false; }
			self::$card=intval(trim(strval($_REQUEST["card"])));
			return true;		
		}	
	}
	return false;
}

} ?>
