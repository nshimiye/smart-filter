import { EntityInterface } from '../models/entity.interface';

/**
 * User Defined Type Guard!
 */
function isString(arg: any): arg is string {
    return typeof arg === 'string';
}
function isEntityArray(arg: any): arg is Array<EntityInterface> {
    return arg && arg.length > 0 && arg[0].score !== undefined;
}

/**
 * how confident was the bot when looking for entities
 */
export function computeScore(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in 
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function (...args: any[]) {

        console.log(target.prototype);
        // assume args[0] = text | entities

        let result, score;
        const text: string | Array<EntityInterface> = args[0];
        if (isString(text)) { // use of type guarding
            result = text;
            console.log(text);
        } else if (isEntityArray(text)) {
            result = text.reduce((acc, value) => `${acc}, ${value.name} is a ${value.nameType.toLowerCase()}`, '');
            score = text.reduce((acc, value) => (acc + value.score), 0) / text.length;
            result = `I am ${(score * 100).toFixed(0)}% sure that${result}`;
        } else {
            result = 'Oops!';
        }

        // return the result of the original method (or modify it before returning)
        // run and store result
        return originalMethod.apply(this, [result]);
    };

    return descriptor;
}
