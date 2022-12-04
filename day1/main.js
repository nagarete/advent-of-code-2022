const text = await Deno.readTextFile("input.txt");

let lines = text.split("\r\n\r\n");

let elves = [];
for (let line of lines) {
  const elf = line.split("\n").map(Number);
  elves.push(elf);
}

let ans = [];
for (let i = 0; i < elves.length; i++) {
  let temp = 0;
  for (let j = 0; j < elves[i].length; j++) {
    temp += elves[i][j];
  }
  ans.push(temp);
}

ans.sort((a, b) => {
  return b - a;
});

let sum3 = ans[0] + ans[1] + ans[2];
console.log(ans[0]);
console.log(sum3);
