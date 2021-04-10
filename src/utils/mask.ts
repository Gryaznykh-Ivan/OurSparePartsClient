const RegExpForPhone = /\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/;
const Masks = [
    '+7 (___) ___-__-__'
]


export enum MaskTypes {
    Phone
}

export const RemoveMask = (str: string): string => {
    return str.replaceAll(/\+|-|\ |\(|\)|\*/g, '');
}

export const MaskCompare = (str: string, mask: MaskTypes): boolean => {
    if (Masks[mask].length !== str.length) return false;
    if (!str.match(RegExpForPhone)) return false;
    
    return true;
}

export const PhoneToMask = (str: string): string => {
    str = str.slice(1);
    
    let result = Masks[MaskTypes.Phone];
    for (let i = 0; i < str.length; i++) {
        result = result.replace("_", str[i]);
    }

    const index = result.indexOf("_");
    result = result.substring(0, index === -1 ? result.length : index);

    return result;
}

export const MaskPhone = (str: string, newChar: string): string => {
    if (newChar === '_') return str;

    let result = str;

    if (Masks[MaskTypes.Phone][str.length] !== newChar) {
        for (let i = str.length; i < Masks[MaskTypes.Phone].length && Masks[MaskTypes.Phone][i] !== '_'; i++) {
            result += Masks[MaskTypes.Phone][i];
        }
    }

    result += newChar;

    if (result.length > Masks[MaskTypes.Phone].length) return str;

    return result;
}