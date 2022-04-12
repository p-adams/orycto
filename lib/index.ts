import {
  DOMParser,
  DOMParserMimeType,
} from "https://deno.land/x/deno_dom@v0.1.22-alpha/deno-dom-wasm.ts";
import { HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.22-alpha/src/dom/document.ts";

type ConnectedDocument = Promise<HTMLDocument | null>;

export async function connect(
  url = "https://news.ycombinator.com/"
): ConnectedDocument {
  const document = await connectedDocument(url);
  return document;
}

async function connectedDocument(url: string): ConnectedDocument {
  const document = await getHtmlDocument(await fetchDom(url));
  return document;
}

function getHtmlDocument(src: string, mType: DOMParserMimeType = "text/html") {
  return new DOMParser().parseFromString(src, mType);
}

async function fetchDom(url: string) {
  return await (await fetch(url)).text();
}

connect();
