import { CSV } from "https://code4sabae.github.io/js/CSV.js";

const csv = await CSV.fetch("https://www.pref.yamanashi.jp/shokuhin-st/shokuiku/documents/yamanashinoshoku.csv");
console.log(csv);
await Deno.writeTextFile("yamanashinoshoku.csv", CSV.encode(csv));

const html = await (await fetch("https://www.pref.yamanashi.jp/shokuhin-st/shokuiku/yamanashinoshoku_tokusen47_od.html")).text();
console.log(html);
await Deno.writeTextFile("yamanashinoshoku.html", html);
