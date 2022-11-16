function king(x1, y1, x2, y2) {
	return y1 === y2 && x2 === x1 + 1 || y1 === y2 && x2 === x1 - 1 || x1 === x2 && y2 === y1 - 1 || x1 === x2 && y2 === y1 + 1 || x2 === x1 - 1 && y2 === y1 - 1 || x2 === x1 - 1 && y2 === y1 + 1 || x2 === x1 + 1 && y2 === y1 + 1 || x2 === x1 + 1 && y2 === y1 - 1;
}

module.exports = king;
