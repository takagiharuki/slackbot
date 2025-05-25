import { App, SlackEventMiddlewareArgs } from "@slack/bolt";
import OpenAI from "openai";
const openai = new OpenAI();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, // ソケットモード
    appToken: process.env.SLACK_APP_TOKEN, // ソケットモード
});

// Listens to incoming messages that contain "hello"
app.message("hello", async ({ message, say } : { message: any, say: Function }) => {
    // say() sends a message to the channel where the event was triggered
    say(`Hey there <@${message.user}>!`);
});


const askChatGPT = async ({event, say}: { event: any, say: Function }) => {
    const response = await openai.responses.create({
        model: "gpt-4.1",
        input: event.text,
    });
    await say(response.output_text);
}

// メンションすると ChatGPT にぶん投げる
app.event("app_mention", askChatGPT);

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log("⚡️ Bolt app is running!");
})();
