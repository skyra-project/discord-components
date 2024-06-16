/* eslint-disable id-length */

const removeHash = (color: string) => (color.startsWith('#') ? color.slice(1) : color);

const parseHex = (nakedHex: string): HexObject => {
	const isShort = nakedHex.length === 3 || nakedHex.length === 4;

	const twoDigitHexR = isShort ? `${nakedHex.slice(0, 1)}${nakedHex.slice(0, 1)}` : nakedHex.slice(0, 2);
	const twoDigitHexG = isShort ? `${nakedHex.slice(1, 2)}${nakedHex.slice(1, 2)}` : nakedHex.slice(2, 4);
	const twoDigitHexB = isShort ? `${nakedHex.slice(2, 3)}${nakedHex.slice(2, 3)}` : nakedHex.slice(4, 6);
	const twoDigitHexA = (isShort ? `${nakedHex.slice(3, 4)}${nakedHex.slice(3, 4)}` : nakedHex.slice(6, 8)) || 'ff';

	return {
		r: twoDigitHexR,
		g: twoDigitHexG,
		b: twoDigitHexB,
		a: twoDigitHexA
	};
};

const hexToDecimal = (hex: string) => Number.parseInt(hex, 16);

const hexesToDecimals = ({ r, g, b, a }: HexObject) => ({
	r: hexToDecimal(r),
	g: hexToDecimal(g),
	b: hexToDecimal(b),
	a: Number((hexToDecimal(a) / 255).toFixed(2))
});

const isNumeric = (n: number | string | undefined) => typeof n === 'number' || (typeof n === 'string' && Number.isFinite(Number(n)));

const formatRgb = (decimalObject: DecimalObject, parameterA?: number | string) => {
	const { r, g, b, a: parsedA } = decimalObject;
	const a = isNumeric(parameterA) ? parameterA : parsedA;

	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/**
 * Turns an old-fashioned css hex color value into a rgb color value.
 *
 * If you specify an alpha value, you'll get a rgba() value instead.
 *
 * @param color - The hex value to convert. ('123456'. '#123456', ''123', '#123')
 * @param alpha - An alpha value to apply. (optional) ('0.5', '0.25')
 * @returns An rgb or rgba value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33, 0.5)')
 */
export const hexToRgba = (color: string, alpha?: number | string) => {
	const hashlessHex = removeHash(color);
	const hexObject = parseHex(hashlessHex);
	const decimalObject = hexesToDecimals(hexObject);

	return formatRgb(decimalObject, alpha);
};

interface HexObject {
	a: string;
	b: string;
	g: string;
	r: string;
}

interface DecimalObject {
	a: number;
	b: number;
	g: number;
	r: number;
}
