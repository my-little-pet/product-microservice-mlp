import { Store } from "@prisma/client";
import { StoreRepository } from "../../repository/store-repository";
import { StoreNotFoundError } from "../error/store-not-found-error";

interface GetStoreByIdServiceRequest{
    id:string;
}
interface GetStoreByIdServiceResponse{
    store:Store
}

export class GetStoreByIdService {
    constructor(private storeRepository:StoreRepository){}

    async execute({id}:GetStoreByIdServiceRequest):Promise<GetStoreByIdServiceResponse>{
        const store = await this.storeRepository.findById(id);
        if(!store){
            throw new StoreNotFoundError;
        }
        return {store};
    }
}