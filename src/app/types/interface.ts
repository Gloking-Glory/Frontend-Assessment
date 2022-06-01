export interface DocListInterface {
    address: {
        city: string,
        geo: {
            lat: string,
            lng: string,
        },
        street: string,
        suite: string,
        zipcode: string
    },
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

export interface NewDocInterface {
    city: string,
    street: string,
    suite: string,
    zipcode: string
    bs: string,
    catchPhrase: string,
    companyName: string,
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}
