import { DOMParser, DOMParserMimeType, HTMLDocument } from "../deps.ts";

type ConnectedDocument = Promise<HTMLDocument | null>;

export async function connect(
  url = "https://news.ycombinator.com/"
): ConnectedDocument {
  const document = await connectedDocument(url);
  return document;
}

async function connectedDocument(url: string): ConnectedDocument {
  return await getHtmlDocument(await fetchDom(url));
}

export function getHtmlDocument(
  src: string,
  mType: DOMParserMimeType = "text/html"
) {
  return new DOMParser().parseFromString(src, mType);
}

async function fetchDom(url: string) {
  return await (await fetch(url)).text();
}
