import { retry, toIMF, bold, bgWhite, black } from "./deps.ts";

const printInverse = (msg: string) => console.log(bgWhite(black(bold(msg))));

let count = 0;
const get = () => {
  count++;
  if (count < 3) {
    throw new Error("same player try again");
  }
  return new Date();
};

const now = await retry(get, { maxTry: 5, delay: 500 });

printInverse(toIMF(now));
