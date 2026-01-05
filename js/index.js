// 8080 emulator running Tiny BASIC
// I/O comes from the browser running an xterm.js terminal
import { I8080 } from "./i8080.js";
import {
  PALO_ALTO_V1,
  PALO_ALTO_V2,
  TINYBASIC_BIOS,
  TINYBASIC_CODE,
  WHIPPLE,
} from "./tinybasic.js";

var term = new Terminal();
var buf = [];
var addNewline = false;
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
    this.initialize("tbx");
  }

  initialize(basicVariant) {
    addNewline = false;
    // Hack to make Palo Alto Tiny BASIC work without some surgery. This
    // enables terminal output when TB starts up. Without it, you must
    // press Control-O to start output. Other versions don't need this.
    // TBX overwrites it entirely.
    this.mem[0x1000] = 0xff;

    if (basicVariant === "tbx") {
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
    } else if (basicVariant === "patb_v1") {
      let loc = 0x0;
      for (const b of PALO_ALTO_V1) {
        this.mem[loc++] = b;
      }
    } else if (basicVariant === "patb_v2") {
      let loc = 0x0;
      for (const b of PALO_ALTO_V2) {
        this.mem[loc++] = b;
      }
    } else if (basicVariant === "whipple") {
      addNewline = true;
      let loc = 0x0;
      for (const b of WHIPPLE) {
        this.mem[loc++] = b;
      }
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
        if ((u8 == 13) && addNewline) {
          // This works around a bug that Whipple BASIC does not send NL
          term.write("\n");
        }
        break;
    }
  }

  interrupt(enabled) {}
}

const ram = new RAM();
const cpu = new I8080(ram, new IO());

document.getElementById("variant").addEventListener("change", (e) => {
  ram.initialize(e.target.value);
  cpu.jump(0);
});

function loop() {
  for (let i = 0; i < 1000; i++) {
    cpu.instruction();
  }
  setTimeout(loop, 100);
}
loop();
