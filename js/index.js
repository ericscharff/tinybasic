// 8080 emulator running Tiny BASIC
// I/O comes from the browser running an xterm.us terminal
import { I8080 } from "./i8080.js";
import { TINYBASIC_BIOS, TINYBASIC_CODE } from "./tinybasic.js";

var term = new Terminal();
var buf = [];
term.open(document.getElementById("terminal"));
term.onData((e) => {
  e = e.toUpperCase();
  // Remap delete key (which doesn't work ) to backspace (which does)
  if (e === "\u007f") {
    e = "\u0008";
  }
  if (e === "\n") {
    e = "\r";
  }
  buf.push(e.charCodeAt(0));
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
        return buf.length > 0 ? 0x22 : 0x02;
      case 1:
        return buf.shift() || 0;
    }
  }

  output(port, u8) {
    switch (port) {
      case 0:
        term.write("\r\n");
        break;
      case 1:
        term.write(String.fromCharCode(u8));
        break;
    }
  }
}

const cpu = new I8080(new RAM(), new IO());
function loop() {
  for (let i = 0; i < 1000; i++) {
    cpu.instruction();
  }
  setTimeout(loop, 100);
}
loop();
