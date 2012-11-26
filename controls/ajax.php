<?php class ajax extends sn {
	
public static $conf;
public static $options;
public static $url;

function __construct() {
	if (self::getControls()) {
		if (url::getUrl()) {
			switch (url::$action){
				case "show":
					echo bonus::showCardInfo();
				break;
			}
		}
	}
}

function getControls() {
	foreach (array("url","sql","bonus") as $key) {
		if (!file_exists(project."/controls/".$key.".php")) return false;
		require_once(project."/controls/".$key.".php");
		sn::cl($key);
	}
	return true;	
}

} ?>
