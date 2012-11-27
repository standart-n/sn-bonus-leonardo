<?php class url extends sn {
	
public static $action;
public static $callback;
public static $card;

function __construct() {
	
}

function getUrl() {
	if (isset($_REQUEST["action"])) {
		self::$action=trim(strval($_REQUEST["action"]));
	}
	if (isset($_REQUEST["callback"])) {
		self::$callback=trim(strval($_REQUEST["callback"]));
	}

	if (isset(self::$action)) {
		switch (self::$action) {
			case "show":
				if (!isset($_REQUEST["card"])) { return false; }
				self::$card=intval(trim(strval($_REQUEST["card"])));
				return true;
			break;
		}
	}
	return false;
}

} ?>
