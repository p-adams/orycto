import {
  DOMParser,
  DOMParserMimeType,
} from "https://deno.land/x/deno_dom@v0.1.22-alpha/deno-dom-wasm.ts";
import { HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.22-alpha/src/dom/document.ts";

export async function connect(
  url = "https://news.ycombinator.com/"
): Promise<HTMLDocument | null> {
  const document = await connectedDocument(url);
  return document;
}

async function connectedDocument(url: string) {
  const document = await getHtmlDocument(url);
  return document;
}

async function getHtmlDocument(
  url: string,
  mType: DOMParserMimeType = "text/html"
) {
  return new DOMParser().parseFromString(await fetchDom(url), mType);
}

async function fetchDom(url: string) {
  return await (await fetch(url)).text();
}

connect();
