import { assertEquals, orycto } from "../deps.ts";

Deno.test("#getHtmlDocument", () => {
  assertEquals(
    "meow",
    orycto.getHtmlDocument(`<div>meow</div>`)?.querySelector("div")?.innerText
  );
});
