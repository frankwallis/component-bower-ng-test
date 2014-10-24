/// <reference path="../_references.d.ts" />

class CookieController {

    public static $inject = [ "$cookie" ];

    constructor($cookie) {
    	clickcount = $cookie.get("click-count");
    	$cookie.put("click-count", clickcount + 1);

    }

    public clickcount:  any;
}

export = CookieController;