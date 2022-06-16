import { Event } from "../structs/event";

export default new Event("ready", () => {
    console.log(('Commands ready!!\nWelcome to Sharpie\'s Creation, v1.0.0!'));
});
