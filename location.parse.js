(function () {
	var
	UNDEFINED,

	LESS = '[A-z0-9._%+-]',
	MOST = LESS.slice(0, -1) + ':/\\[\\]@!$&\'()*,;=~]',
	MORE = MOST.slice(0, -1) + '?#]',

	PROTOCOL = '(?:(' + LESS + '+:)(?:\/\/)?)?',
	LOGIN = '(?:(' + LESS + '+)(?::(' + LESS + '+))?@)?',
	HOST = '((?:[A-z0-9.-]*[A-z0-9][A-z0-9-]*[A-z0-9]\\.)+[A-z][A-z0-9-]*[A-z0-9]|\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})',
	PORT = '(?::([0-9]+))?',
	PATH = '(\\/' + MOST + '*)',
	SEARCH = '(\\?' + MOST + '*)?',
	HASH = '(#' + MORE + '*)',

	HREF = '\\b' + PROTOCOL + LOGIN + HOST + PORT + '(?:' + PATH + SEARCH + HASH + '?)?',
	HREF_PARTIAL = PATH + SEARCH + HASH + '?';

	location.parse = function() {
		var
		string = arguments[0],
		match = string.match(HREF) || (!arguments[1] ? string.match(HREF_PARTIAL) || string.match(HASH) : null);

		if (!match) match = [UNDEFINED, UNDEFINED];

		if (match.length === 2) match.splice(1, 0, UNDEFINED, UNDEFINED);
		if (match.length === 4) match.splice(1, 0, UNDEFINED, UNDEFINED, UNDEFINED, UNDEFINED, UNDEFINED);

		return {
			href: match[0],
			protocol: match[1],
			username: match[2],
			password: match[3],
			host: match[4],
			port: match[5] ? parseFloat(match[5]) : UNDEFINED,
			pathname: match[6],
			search: match[7],
			hash: match[8]
		};
	};
})();
