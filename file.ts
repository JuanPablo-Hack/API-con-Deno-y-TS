
let filename = './test.json';
let file = await Deno.open(filename);
await Deno.copy(file, Deno.stdout);
file.close();
