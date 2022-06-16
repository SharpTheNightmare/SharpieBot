import { client } from "..";
import { Command } from "../structs/Command";

export default new Command({
    name: "help",
    description: "gives help",
    type: 'CHAT_INPUT',
    
    run: async ({ interaction }) => {
        const cmdName = interaction.options.getString("command");
        if (!cmdName) {
            const commandNames = Array.from(client.commands.keys());
            const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
            interaction.followUp(`= Command List =\n\n[Use \`/help <commandname>\` for details]\n\n${
            client.commands.map(c => `\`/${c.name}${' '.repeat(longest - c.name.length)}\` :: ${c.description}`).join('\n')}`);
        } else {
            const command = client.commands.get(cmdName);
            interaction.followUp(`= ${command.name} = \n${command.description}\nusage::/${command.name}`);
        }
    }
});