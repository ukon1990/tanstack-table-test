import { faker } from "@faker-js/faker";


function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface Person {
    name: string;
    age: number;
    address: {
        zip: string;
        city: string;
        street: string;
    };
}

export const personData: Person[] = Array.from({ length: 103 }, () => ({ // added 103 more
        name: faker.person.fullName(),
        age: getRandomInt(18, 65),
        address: {
            zip: faker.location.zipCode(),
            city: faker.location.city(),
            street: faker.location.streetAddress()
        }
    }));

