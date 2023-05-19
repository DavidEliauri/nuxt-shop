interface ProductDtoParams {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export class ProductDto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };

    constructor({ id, title, price, description, category, image, rating }: ProductDtoParams) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
}

export class CreatorProductDto {
    static fromApi(map: { [key: string]: any }): ProductDto {
        return new ProductDto({
            id: map['id'],
            title: map['title'],
            price: map['price'],
            description: map['description'],
            category: map['category'],
            image: map['image'],
            rating: {
                rate: map['rating']['rate'],
                count: map['rating']['count'],
            },
        });
    }
}
