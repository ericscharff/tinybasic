# Palo Alto Tiny BASIC

Shortly after the release of Tiny BASIC Extended, there were several other
versions of Tiny BASIC.
[The Dialects of Tiny BASIC](https://troypress.com/the-dialects-of-tiny-basic/)
is a great article describing many of these.

In this directory are two versions of Li-Chen Wang's Palo Alto Tiny BASIC.
Unlike TBX, which used an very small interpreter (TBIL), Palo Alto Tiny BASIC
parses BASIC directly, rather than using a virtual machine. Variants that use an
intermediate language include TBX, Denver Tiny BASIC, and
[Tom Pittman's versions](http://www.ittybittycomputers.com/IttyBitty/TinyBasic/)
for 6502 and others.

My original goal was originally to preserve only TBX, because Palo Alto Tiny
BASIC was already well represented on the Internet, as it was quite influential.
However, it is nice to have a larger collection of Tiny BASIC implementations

Both of the versions preserved here were adapted from
[Arduino 8080 BASIC](https://github.com/maly/arduino8080basic.git). They both
run correctly in my JavaScript 8080 emulator.

Both versions come in several variants:

- `*.a80` - 8080 Assembly. These were assembled using the
  [npm asm80](https://www.npmjs.com/package/asm80) assembler.
- `*.lst` - Listing, as produced by the `asm80` assembler
- `*.hex` - Intel hex files, as produced by the `asm80` assembler
- `*.txt` - Text versions of the binary. These are mostly for convenience so
  that they can be imported into JavaScript.
