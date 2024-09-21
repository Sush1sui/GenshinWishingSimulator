import mongoose from "mongoose";
import { CharacterDocument, CharacterModel } from "./Types/CharacterType";

// "image": "diluc.webp",
//  "characterName": "Diluc",
//  "vision": "pyro",
//  "rarity": 5,
//  "weapon": "claymore",
//  "region": "mondstadt"

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    vision: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    weapon: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        unique: true,
    },
});

const Character = mongoose.model<CharacterDocument, CharacterModel>(
    "Character",
    characterSchema
);

export default Character;
