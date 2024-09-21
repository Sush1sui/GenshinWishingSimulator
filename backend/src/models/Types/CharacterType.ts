import { Document, Model } from "mongoose";

export interface CharacterType {
    name: string;
    vision: string;
    rarity: number;
    weapon: string;
    region: string;
    image: string;
}

export interface CharacterDocument extends CharacterType, Document {}

export interface CharacterModel extends Model<CharacterDocument> {}
