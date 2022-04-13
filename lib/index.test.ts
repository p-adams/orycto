import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";
import * as orycto from "./index.ts";

Deno.test("#getHtmlDocument", () => {
  assertEquals(
    "meow",
    orycto.getHtmlDocument(`<div>meow</div>`)?.querySelector("div")?.innerText
  );
});
