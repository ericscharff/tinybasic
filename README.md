# Happy 2026

# Tiny BASIC Extended

## [Try it in your browser!](https://ericscharff.github.io/tinybasic/js/)

## What is this?

This is a listing of Tiny BASIC Extended, by Dick Whipple and John Arnold. The
listing (as presented here) originally appeared in
[SIGPLAN Notices, July 1976](https://doi.org/10.1145/987491.987494). The SIGPLAN
article is a reprint of an article that appeared in the January 1976 issue of
Dr. Dobb's Journal of Tiny BASIC Calisthenics & Orthodontia (the very first
issue of Dr. Dobbs Journal.) A type-in of the binary was in the first issue, the
source code appeared in the second issue.

The file [tinybasic.oct](tinybasic.oct) is a recreation of the original split
octal listing, and closely resembles how it appeared in the first issue of DDJ.
This version of Tiny BASIC is written in 8080 machine code. The listing was
hand-typed from a PDF scan of a bad photocopy, so there are very likely errors.
However, I was able to load this into an 8080 emulator and enter some very
simple programs. It is possible that this will work with an Altair 8800 (or an
emulator.)

## Bringing up Tiny BASIC

In order to bring up this version of Tiny BASIC, load the binary into memory at
1000H. In addition, you will need to specify several routines in low memory:

### Cold Start routine:

Address 0 of memory should initialize the stack pointer and jump to the Tiny
BASIC entry point. I used the following code

```
    ADDR    INST   8080
    000000  061
    000001  377
    000002  000    LD SP, 00FFH
    000003  303
    000004  254
    000005  021    JP 11ACH
```

### Input routine:

Address 030 (18H) should read an ASCII character from the input device into
register A. If ESC is pressed, jump to the cold start routine. No registers
should be modified except A.

### Output routine:

Address 050 (28H) should output the ASCII character stored in register A. No
registers should be modified.

### CRLF routine:

Address 020 (10H) should output a CR followed by a LF. You can do whatever
newline processing you'd like instead. Only register A may be modified.

In my Z80 simulator, I entered the cold start routine into memory, and
implemented the other three routines as traps. I adopted a slightly different
scheme for the JavaScript 8080 simulator included in this repository. In that
version, I used I/O so that input from port 0 fetches a character, output to
port 0 outputs a character, and output to port 1 outputs a newline.

## Example Run

Multiplication table

```
 10 FOR I = 1 TO 12
 20 FOR J = 1 TO 12
 30 PR I*J;
 40 NXT J
 50 PR
 60 NXT I
 70 END
```

Transcript of session with Tiny BASIC

```
 :NEW

 :10 FOR I = 1 TO 12
 :20 FOR J = 1 TO 12
 :30 PR I*J;
 :40 NXT J
 :50 PR
 :60 NXT I
 :70 END
 :LST

 00010 FOR I = 1 TO 12
 00020 FOR J = 1 TO 12
 00030 PR I*J;
 00040 NXT J
 00050 PR
 00060 NXT I
 00070 END
 :LST 20

 00020 FOR J = 1 TO 12
 :LST 20,40

 00020 FOR J = 1 TO 12
 00030 PR I*J;
 00040 NXT J
 :RUN

 1 2 3 4 5 6 7 8 9 10 11 12
 2 4 6 8 10 12 14 16 18 20 22 24
 3 6 9 12 15 18 21 24 27 30 33 36
 4 8 12 16 20 24 28 32 36 40 44 48
 5 10 15 20 25 30 35 40 45 50 55 60
 6 12 18 24 30 36 42 48 54 60 66 72
 7 14 21 28 35 42 49 56 63 70 77 84
 8 16 24 32 40 48 56 64 72 80 88 96
 9 18 27 36 45 54 63 72 81 90 99 108
 10 20 30 40 50 60 70 80 90 100 110 120
 11 22 33 44 55 66 77 88 99 110 121 132
 12 24 36 48 60 72 84 96 108 120 132 144

 :
```

## JavaScript Simulator

In the `js/` directory, there is a very primitive simulator of an Intel 8080
based computer running Tiny BASIC. You can run this in the browser by loading
index.html. You can also
[access a live demo](https://ericscharff.github.io/tinybasic/js/).

The Tiny BASIC prompt is the colon `:`. Before you enter a program, you _must_
type `NEW` at the prompt. If you don't, entering a program line will cause Tiny
BASIC to hang.

You'll notice several differences from other BASICs, most importantly

- Instead of `PRINT` or `?` Tiny BASIC uses `PR`
- Instead of `NEXT` in a loop, Tiny BASIC uses `NXT`
- Instead of `LIST` to list a program, Tiny BASIC uses `LST`
- Instead of `INPUT` to prompt for input, Tiny BASIC uses `IN`
- Input is numeric. Complete by hitting SPACE (most BASIC dialects complete
  input by hitting RETURN/ENTER)
- Instead of `:` to put multiple statements on a single line, Tiny BASIC uses
  `$`
- Programs should be terminated with `END`
- Only 16 bit integers are supported
- Only one letter variable names are supported

## Credits

Original specification by Dennis Allison

Original listing by Dick Whipple and John Arnold

JavaScript 8080 emulator by Alexander Demin's
[i8080-js](https://github.com/begoon/i8080-js)

Transcribed from the original by Eric Scharff, March 2007

JavaScript 8080 simulator added by Eric Scharff, March 2025
