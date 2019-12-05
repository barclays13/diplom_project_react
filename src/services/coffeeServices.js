export default class CoffeeServices {

    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    async getAllBestsellers  () {
        const res = await this.getResource('/bestsellers');
        return res.map(this._transformBestsellers);
    }

    async getBestsellers  (id) {
        const res = await this.getResource('/bestsellers/{id}');
        return res.map(this._transformBestsellers);
    }

    async getAllCoffee  () {
        const res = await this.getResource('/coffee');
        return res.map(this._transformCoffee);
    }

    async getCoffee  (id) {
        const res = await this.getResource('/coffee/{id}');
        return res.map(this._transformCoffee);
    }
    
    _transformCoffee(item) {
        return({
            name: item.name,
            country: item.country,
            url: item.url,
            price: item.price,
            description: item.description
        });
    }
    
    _transformBestsellers(item) {
        return({
            name: item.name,
            url: item.url,
            price: item.price
        });
    }
}
