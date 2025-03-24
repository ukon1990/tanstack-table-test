export interface Person {
    name: string;
    age: number;
    address: {
        zip: number;
        city: string;
        street: string;
    };
}

export const personData: Person[] = [
    {
        name: "John Doe",
        age: 25,
        address: {
            zip: 12345,
            city: "New York",
            street: "123 Main St"
        }
    },    
    {
        name: "Jane Smith",
        age: 30,
        address: {
            zip: 54321,
            city: "Los Angeles",
            street: "456 Elm St"
        }
    },
    {
        name: "Bob Johnson",
        age: 35,
        address: {
            zip: 67890,
            city: "Chicago",
            street: "789 Oak St"
        }
    },
    {
        name: "Alice Brown",
        age: 28,
        address: {
            zip: 98765,
            city: "San Francisco",
            street: "321 Pine St"
        }
    },
];