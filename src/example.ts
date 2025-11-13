import { sleep } from "bun";
import create from "./index.js";

const client = create({
    baseUrl: "http://localhost:3000",
    httpPrefix: "/api",
    channelling: {
        useChannelling: true,
        channellingPrefix: "/channel",
    },
});
console.log("Vualla")
await sleep(100);
try {
    const eventResponse = await client.socket.asyncEmit("x/sdf", {
        message: "sdfsdf"
    })
    console.log(eventResponse)

    client.socket.on("hello-id", (body, cb)=>{
        const msg = body.msg; 
        cb({
            reply: msg
        })
    })

    const msg = (
        await client.api.get("x/_156", {
            params: {
                x: 1212,
            },
            headers: {
                Authorization: "fuck you",
            },
        })
    ).data;
console.log(msg);
} catch (error) {
    console.error(error.message);
}
client.close();
