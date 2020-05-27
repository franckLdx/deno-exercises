import { emptyDir, bold, red } from "../dev_deps.ts";

if (Deno.args.length !== 1) {
  console.error(bold(red("Need only one arguments: the directory to empty")));
  Deno.exit(1);
}
const dir = Deno.args[0];
console.log(`Cleaning "${dir}"`);
await emptyDir(dir);
