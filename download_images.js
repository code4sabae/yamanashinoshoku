import { CSV } from "https://code4sabae.github.io/js/CSV.js";

const data = CSV.toJSON(CSV.decode(await Deno.readTextFile("yamanashinoshoku2.csv")));

const host = "https://code4sabae.github.io/yamanashinoshoku/";
await Deno.mkdir("image", { recursive: true });
for (const d of data) {
    const bin = new Uint8Array(await (await fetch(d["写真URL"])).arrayBuffer());
    console.log(bin.length);
    const fn = "image/" + d["No."] + ".jpg";
    await Deno.writeFile(fn, bin);
    d["写真URL"] = host + fn;
}
await Deno.writeTextFile("yamanashinoshoku3.csv", CSV.encode(CSV.fromJSON(data)));
