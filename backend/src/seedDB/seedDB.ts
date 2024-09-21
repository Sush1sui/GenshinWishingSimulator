import mongoose from "mongoose";
import Character from "../models/Character";
import { fiveStarCharacters, fourStarCharacters } from "./characters.json";

mongoose
    .connect("mongodb://127.0.0.1:27017/genshin-wish-simulator")
    .then(async () => {
        console.log("Connected to DB successfully");

        await seedDB()
            .then(() => console.log("Seed DB done"))
            .catch((e) => console.log("Failed to seed DB", e));
    })
    .catch((e) => console.log("Failed to connect to DB", e))
    .finally(async () => {
        await mongoose.disconnect();
        console.log("Disconnected from DB");
    });

async function seedDB() {
    try {
        const characters = [...fiveStarCharacters, ...fourStarCharacters];
        for (const c of characters) {
            try {
                const character = new Character({
                    name: c.characterName,
                    vision: c.vision,
                    rarity: c.rarity,
                    weapon: c.weapon,
                    region: c.region,
                    image: `${c.id}.webp`,
                });
                console.log(character);

                await character.save();
            } catch (error) {
                console.log("Error saving character: ", error);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
