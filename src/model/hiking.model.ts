export class Hiking {
    id: number;
    name: string;
    description: string;
    beginAdress: string;
    image: string;
    steps: object;

    constructor(id: number, name: string, description: string, beginAdress: string, image: string, steps: object) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.beginAdress = beginAdress;
        this.image = image;
        this.steps = steps;
    }
}
