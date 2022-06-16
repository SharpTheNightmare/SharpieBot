import { Command } from "../structs/Command";

export default new Command({
    name: "ping",
    description: "replies with pong",
    type: 'CHAT_INPUT',
    run: async ({ interaction }) => {
        interaction.channel.send(`Checking...`).then(m => {
            m.edit(`Pong \`${m.createdTimestamp - interaction.createdTimestamp}ms\`. API Latency is \`${Math.round(interaction.client.ws.ping)}ms\``);
        });
    }
});