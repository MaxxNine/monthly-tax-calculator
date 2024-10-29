import { ICMS, PIS, COFINS } from "./taxes";

export function applyUsualFees(value: number) {
    return applyCustomFees(value, ICMS, PIS, COFINS);
}

export function applyCustomFees(value: number, customICMS: number, customPIS: number, customCOFINS: number) {
    const icmsTax = value * customICMS;
    const pisTaX = (value - icmsTax) * customPIS;
    const cofinsTaX = (value - icmsTax) * customCOFINS;
    return icmsTax + pisTaX + cofinsTaX;
}