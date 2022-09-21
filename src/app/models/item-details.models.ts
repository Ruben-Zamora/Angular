export class ItemDetails{
    id: number=0;
    name: string='';
    cost: number=0;
    sprites: Sprites = new Sprites;
}

class Sprites{
    default: string='';
}