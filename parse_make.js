import { CSV } from "https://code4sabae.github.io/js/CSV.js";
import HTMLParser from "https://dev.jspm.io/node-html-parser";

const fn = "yamanashinoshoku.html";
const html = await Deno.readTextFile(fn);
const root = HTMLParser.parse(html);

/*
const links = root.querySelectorAll("a");
for (const link of links) {
    const href = link.attributes.href;
    const txt = link.text.trim();
    console.log(href, txt);
}
*/

const prefix = "/shokuhin-st/shokuiku/documents/";
const postfix = ".jpg";

const host = "https://www.pref.yamanashi.jp";

const csv = CSV.decode(await Deno.readTextFile("yamanashinoshoku.csv"));
csv.shift();
csv.shift();
const data = CSV.toJSON(csv);

const links = root.querySelectorAll("a");
for (const link of links) {
    const href = link.attributes.href;
    if (!href.startsWith(prefix) || !href.endsWith(postfix)) {
        continue;
    }
    const txt = link.text.trim();
    const no = parseInt(href.substring(prefix.length, prefix.length + 2))
    console.log(no, href, txt);

    const d = data.find(d => d["No."] == no);
    if (d) {
        d["写真URL"] = host + href;
    }
}
await Deno.writeTextFile("yamanashinoshoku2.csv", CSV.encode(CSV.fromJSON(data)));
