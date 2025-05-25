"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bolt_1 = require("@slack/bolt");
const app = new bolt_1.App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});
// Listens to incoming messages that contain "hello"
app.message("hello", (_a) => __awaiter(void 0, [_a], void 0, function* ({ message, say }) {
    // say() sends a message to the channel where the event was triggered
    say(`Hey there <@${message.user}>!`);
}));
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Start your app
    yield app.start(process.env.PORT || 3000);
    console.log("⚡️ Bolt app is running!");
}))();
//# sourceMappingURL=app.js.map