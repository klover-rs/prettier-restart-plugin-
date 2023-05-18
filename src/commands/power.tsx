import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command } from "enmity/api/commands";
import { sendReply } from "enmity/api/clyde";
import { Dialog, Users } from "enmity/metro/common";
import { reload } from "enmity/api/native";


export const restartCommand: Command = {
    id: "restart-command",

    name: "restart",
    displayName: "restart",

    description: "restart your discord client",
    displayDescription: "restart your discord client",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    execute: async function (args, message) {
        sendReply(message?.channel.id ?? "0", { content: "executed successfully"});
        Dialog.show({
            title: "Restart your client",
            body: "If you click yes your Discord client will restart",
            confirmText: "Yes",
            cancelText: "No",
            onConfirm: reload,
        });


    }
        
}

