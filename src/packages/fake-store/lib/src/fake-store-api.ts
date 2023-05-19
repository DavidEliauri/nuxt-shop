import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { CreatorProductDto, ProductDto } from '@/packages/fake-store';

export class GetProductsRequestFailure extends Error {
    constructor(message?: string) {
        super(message);
    }
}

export default class FakeStoreApi {
    axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://fakestoreapi.com',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async getProducts(): Promise<ProductDto[]> {
        try {
            const response: AxiosResponse<[any], any> = await this.axiosClient.get('/products');

            return response.data.map((p) => {
                return CreatorProductDto.fromApi(p);
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new GetProductsRequestFailure(error.message);
            }

            if (error instanceof Error) {
                throw new GetProductsRequestFailure(error.message);
            }

            throw new GetProductsRequestFailure();
        }
    }
}
