// 5/22/25 Codewars TS 7 Kyu Fundamentals - Area of a Circle

// https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/typescript

/*
Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/

export function circleArea(radius: number): number {
    if (radius <= 0) {
        throw new Error('Radius must be positive.');
    };

    return Math.PI * radius**2;
}

/* =============
Other Solutions
============= */
export function circleArea(radius: number): number {
    if (radius <= 0) {
        throw new Error('Radius must be positive.');
    };

    const area = Math.PI * Math.pow(radius, 2);
    return parseFloat(area.toFixed(3));
}