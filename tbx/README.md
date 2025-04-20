# Tiny BASIC Extended source code

TBX's implementation is interesting because it has two parts, a BASIC
interpreter written in an intermediate language (TBIL) and a runtime in 8080
assembly. Thus, running TBX runs an interpreter which itself runs an
interpreter. It is a remarkable simple virtual machine (similar in spirit to
CHIP-8 for the RCA 1802).

The source code for TBX appeared in Dr. Dobbs Journal, Volume 1, Number 2. While
the TBX octal listing in this repository was hand-typed, I was not keen on
re-typing dozens of pages of source code.

However, I found a few references that are very close to the octal TBX preserved
here:

- [tbx.il](tbx.il) is very close to the intermediate language that is found in
  the two TBX articles in DDJ. It comes from kevinthecheung's
  [tiny basic repository](https://github.com/kevinthecheung/tiny-basic.git)
  which also includes a python interpreter for the TBIL.
- [TBX.asm](TBX.asm) and [TBX.txt](TBX.txt) come from whippleway.com so this may
  belong to Dick Whipple himself. This version is extremely close to the DDJ
  original, but with modern improvements (e.g., `PR` has returned to `PRINT`).
  This source came from
  [whippleway](https://www.whippleway.com/Source_Code/TBX.asm) and there is
  [documentation](https://www.whippleway.com/documents/TINY%20BASIC%20INTRODUCTON.pdf)
  as well.
