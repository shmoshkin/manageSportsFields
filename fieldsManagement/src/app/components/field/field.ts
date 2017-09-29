import { AppEntity } from "../../shared/entities/index";

export interface Field extends AppEntity {
    id: number;
    location: string;
    name: string;
    type: number;
    isAvailable?: boolean;
    description?: string;
}