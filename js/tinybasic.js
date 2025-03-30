import readline from "readline";
import { stdin, stdout } from "process";
import { I8080 } from "./i8080.js";
import { TINYBASIC_BIOS, TINYBASIC_CODE } from "./code.js";

const rl = readline.createInterface({ input: stdin, output: stdout });
let halt = false;
let buf = [];
rl.on("line", (s) => {
  buf = buf.concat((s + "\r").split("").map((c) => c.charCodeAt(0)));
});
rl.on("close", () => {
  halt = true;
});

class RAM {
  constructor() {
    this.mem = new Array(65536);
    // TinyBasic goes at 0x1000
    let loc = 0x1000;
    for (const b of TINYBASIC_CODE) {
      this.mem[loc++] = b;
    }
    // BIOS goes at 0x0000
    loc = 0x0;
    for (const b of TINYBASIC_BIOS) {
      this.mem[loc++] = b;
    }
  }

  read(addr) {
    return this.mem[addr];
  }

  write(addr, u8) {
    this.mem[addr] = u8;
  }
}

class IO {
  input(port) {
    switch (port) {
      case 0:
        return buf.shift() || 0;
    }
  }

  output(port, u8) {
    switch (port) {
      case 0:
        if (u8 !== 13) {
          stdout.write(String.fromCharCode(u8));
        }
        break;
      case 1:
        stdout.write("\n");
        break;
    }
  }
}

const cpu = new I8080(new RAM(), new IO());
function loop() {
  for (let i = 0; i < 1000; i++) {
    cpu.instruction();
    if (halt) return;
  }
  setTimeout(loop, 10);
}
loop();
