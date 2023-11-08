// problem-1
const checkType = (input: string | number): number => {
    if (typeof input == 'string') {
        return input.length
    }
    else if (typeof input == 'number') {
        return input * input
    }
    return 0
}



//problem-2

interface Address {
    city?: string;
    street?: string
}

interface Person {
    address?: Address;
    phone?: string
}

const getAddressCity = (person: Person): string => {
    if (person?.address?.city) {
        return person?.address?.city
    }
    return 'please enter a correct person'
}


//problem-3

class Cat {
    name: string;
    species: string;
    sound: string

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound
    }
}

const isCat = (cat: any): string => {
    if (cat instanceof Cat) {
        return "yes, it's a cat"
    }
    return "no, it's not a cat."
}

//problem-4

const findNumberSum = <T>(mixedData: T[]): number => {
    let total = 0;
    mixedData.forEach(element => {
        if (typeof element == 'number') {
            total += element as number
        }
        return 0

    });
    return total
}


//problem-5

interface Car {
    make: string;
    model: string;
    year: number
}

interface Driver {
    name: string;
    licenseNumber: string
}

const objectCombined = <Tc, Td>(car: Tc, driver: Td): Tc & Td => {
    const combineObj = {
        ...car, ...driver
    }
    return combineObj
}


//problem-6

const calculateSumFromArray = (param: unknown): void => {
    if (Array.isArray(param) && param.every((item) => typeof item === 'number')) {
        const sum = (param as number[]).reduce((acc, val) => acc + val, 0);
        console.log(sum);
    } else {
        console.error("Error: Parameter is not an array of numbers.");
    }
}

//problem-7

const findFirstOccurrence = <T>(arr: T[], value: T): number => {
    const index = arr.findIndex((item) => item === value);
    return index !== -1 ? index : -1;
}

