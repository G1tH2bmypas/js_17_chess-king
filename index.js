function king(x1, y1, x2, y2) {
	return Math.abs(x2 - x1 ) <= 1 && Math.abs(y1 - y2) <= 1;
}

module.exports = king;
