export const TINYBASIC_BIOS = [
  // 000000: Cold start: LXI SP, 255 ; JMP 11ACH
  0o061, 0o377, 0o000, 0o303, 0o254, 0o021, 0o000, 0o000,
  // 000010: bytes 8-15 are unused
  0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000,
  // 000020: Output CRLF: OUT 0 ; RET
  0o323, 0o000, 0o311, 0o311, 0o311, 0o311, 0o311, 0o311,
  // 000030: Input: IN 1 ; ORI 0 ; JZ 24 ; RET
  0o333, 0o001, 0o366, 0o000, 0o312, 0o030, 0o000, 0o311,
  // 000040: Unused
  0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000,
  // 000050: Output: OUT 1 ; RET
  0o323, 0o001, 0o311, 0o311, 0o311, 0o311, 0o311, 0o311,
  // 000060: Unused
  0o311, 0o311, 0o311, 0o311, 0o311, 0o311, 0o311, 0o311,
  // 000070: Reset: JMP 0
  0o303, 0o000, 0o000, 0o311, 0o311, 0o311, 0o311, 0o311,
];

export const TINYBASIC_CODE = [
  0o041, 0o111, 0o020, 0o006, 0o110, 0o337, 0o376, 0o015,
  0o312, 0o036, 0o020, 0o376, 0o177, 0o312, 0o040, 0o020,
  0o376, 0o014, 0o312, 0o067, 0o020, 0o167, 0o043, 0o005,
  0o312, 0o306, 0o026, 0o303, 0o005, 0o020, 0o167, 0o311,
  0o053, 0o004, 0o076, 0o077, 0o357, 0o303, 0o005, 0o020,
  0o332, 0o000, 0o021, 0o076, 0o057, 0o276, 0o322, 0o000,
  0o021, 0o303, 0o371, 0o020, 0o000, 0o000, 0o000, 0o327,
  0o076, 0o072, 0o357, 0o076, 0o015, 0o062, 0o007, 0o020,
  0o303, 0o000, 0o020, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o114, 0o123, 0o124, 0o040, 0o066, 0o060, 0o060,
  0o054, 0o066, 0o062, 0o060, 0o015, 0o015, 0o042, 0o124,
  0o105, 0o123, 0o124, 0o061, 0o042, 0o044, 0o120, 0o122,
  0o040, 0o042, 0o105, 0o116, 0o104, 0o042, 0o015, 0o106,
  0o117, 0o122, 0o040, 0o122, 0o117, 0o127, 0o040, 0o042,
  0o073, 0o111, 0o015, 0o015, 0o111, 0o124, 0o040, 0o116,
  0o117, 0o122, 0o105, 0o040, 0o114, 0o111, 0o116, 0o105,
  0o123, 0o042, 0o015, 0o015, 0o042, 0o015, 0o057, 0o067,
  0o062, 0o010, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o032, 0o376, 0o060, 0o330, 0o376, 0o072, 0o320,
  0o346, 0o017, 0o311, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o021, 0o111, 0o020,
  0o325, 0o032, 0o376, 0o040, 0o023, 0o312, 0o271, 0o020,
  0o033, 0o041, 0o000, 0o000, 0o376, 0o100, 0o332, 0o320,
  0o020, 0o042, 0o350, 0o033, 0o000, 0o321, 0o311, 0o000,
  0o315, 0o331, 0o020, 0o042, 0o350, 0o033, 0o067, 0o321,
  0o311, 0o315, 0o221, 0o020, 0o376, 0o012, 0o320, 0o023,
  0o104, 0o115, 0o051, 0o051, 0o011, 0o051, 0o332, 0o311,
  0o026, 0o117, 0o006, 0o000, 0o011, 0o303, 0o331, 0o020,
  0o325, 0o052, 0o350, 0o033, 0o104, 0o115, 0o041, 0o111,
  0o020, 0o076, 0o071, 0o043, 0o276, 0o303, 0o050, 0o020,
  0o345, 0o026, 0o001, 0o076, 0o015, 0o276, 0o312, 0o016,
  0o021, 0o024, 0o043, 0o303, 0o005, 0o021, 0o172, 0o062,
  0o356, 0o033, 0o321, 0o052, 0o352, 0o033, 0o176, 0o270,
  0o312, 0o052, 0o021, 0o322, 0o064, 0o021, 0o043, 0o043,
  0o175, 0o206, 0o157, 0o322, 0o026, 0o021, 0o044, 0o303,
  0o026, 0o021, 0o043, 0o176, 0o271, 0o312, 0o170, 0o021,
  0o332, 0o037, 0o021, 0o053, 0o053, 0o325, 0o353, 0o052,
  0o354, 0o033, 0o345, 0o072, 0o356, 0o033, 0o306, 0o003,
  0o205, 0o322, 0o105, 0o021, 0o044, 0o157, 0o315, 0o340,
  0o030, 0o104, 0o115, 0o341, 0o176, 0o002, 0o053, 0o013,
  0o174, 0o272, 0o302, 0o114, 0o021, 0o175, 0o273, 0o302,
  0o114, 0o021, 0o023, 0o052, 0o350, 0o033, 0o353, 0o162,
  0o043, 0o163, 0o043, 0o072, 0o356, 0o033, 0o074, 0o167,
  0o043, 0o321, 0o032, 0o167, 0o376, 0o015, 0o312, 0o166,
  0o021, 0o043, 0o023, 0o303, 0o152, 0o021, 0o321, 0o311,
  0o053, 0o345, 0o043, 0o043, 0o043, 0o176, 0o376, 0o015,
  0o312, 0o207, 0o021, 0o043, 0o303, 0o175, 0o021, 0o043,
  0o353, 0o052, 0o354, 0o033, 0o043, 0o104, 0o115, 0o341,
  0o032, 0o167, 0o043, 0o023, 0o172, 0o270, 0o302, 0o220,
  0o021, 0o173, 0o271, 0o302, 0o220, 0o021, 0o053, 0o042,
  0o354, 0o033, 0o072, 0o356, 0o033, 0o376, 0o001, 0o302,
  0o361, 0o020, 0o321, 0o311, 0o041, 0o002, 0o032, 0o176,
  0o376, 0o200, 0o322, 0o314, 0o021, 0o376, 0o100, 0o322,
  0o300, 0o021, 0o043, 0o156, 0o147, 0o303, 0o257, 0o021,
  0o346, 0o077, 0o107, 0o043, 0o116, 0o043, 0o345, 0o140,
  0o151, 0o303, 0o257, 0o021, 0o376, 0o300, 0o322, 0o000,
  0o022, 0o346, 0o077, 0o107, 0o043, 0o116, 0o043, 0o032,
  0o023, 0o376, 0o040, 0o312, 0o327, 0o021, 0o033, 0o325,
  0o353, 0o032, 0o376, 0o200, 0o322, 0o363, 0o021, 0o276,
  0o043, 0o023, 0o312, 0o341, 0o021, 0o321, 0o140, 0o151,
  0o303, 0o257, 0o021, 0o346, 0o177, 0o276, 0o302, 0o355,
  0o021, 0o353, 0o301, 0o023, 0o043, 0o303, 0o257, 0o021,
  0o346, 0o077, 0o043, 0o116, 0o043, 0o345, 0o041, 0o015,
  0o022, 0o345, 0o147, 0o151, 0o351, 0o341, 0o322, 0o257,
  0o021, 0o043, 0o043, 0o303, 0o257, 0o021, 0o041, 0o357,
  0o033, 0o357, 0o043, 0o065, 0o300, 0o066, 0o017, 0o311,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o345, 0o325, 0o305, 0o353, 0o016, 0o000, 0o041,
  0o020, 0o047, 0o315, 0o147, 0o022, 0o041, 0o350, 0o003,
  0o315, 0o147, 0o022, 0o041, 0o144, 0o000, 0o315, 0o147,
  0o022, 0o041, 0o012, 0o000, 0o315, 0o147, 0o022, 0o173,
  0o315, 0o201, 0o022, 0o301, 0o321, 0o341, 0o311, 0o006,
  0o377, 0o004, 0o173, 0o225, 0o137, 0o172, 0o234, 0o127,
  0o322, 0o151, 0o022, 0o173, 0o205, 0o137, 0o172, 0o214,
  0o127, 0o170, 0o271, 0o310, 0o015, 0o315, 0o201, 0o022,
  0o311, 0o000, 0o000, 0o000, 0o000, 0o306, 0o060, 0o315,
  0o026, 0o022, 0o311, 0o325, 0o052, 0o306, 0o033, 0o053,
  0o104, 0o115, 0o052, 0o304, 0o033, 0o353, 0o033, 0o023,
  0o327, 0o170, 0o272, 0o302, 0o243, 0o022, 0o171, 0o273,
  0o312, 0o275, 0o022, 0o032, 0o147, 0o023, 0o032, 0o157,
  0o315, 0o205, 0o026, 0o023, 0o023, 0o032, 0o376, 0o015,
  0o312, 0o227, 0o022, 0o305, 0o345, 0o315, 0o026, 0o022,
  0o341, 0o301, 0o303, 0o254, 0o022, 0o321, 0o311, 0o000,
  0o341, 0o301, 0o345, 0o311, 0o032, 0o023, 0o376, 0o040,
  0o312, 0o304, 0o022, 0o033, 0o376, 0o015, 0o310, 0o303,
  0o022, 0o030, 0o032, 0o023, 0o376, 0o042, 0o310, 0o376,
  0o015, 0o312, 0o317, 0o026, 0o315, 0o026, 0o022, 0o303,
  0o322, 0o022, 0o041, 0o360, 0o033, 0o076, 0o040, 0o357,
  0o065, 0o302, 0o345, 0o022, 0o066, 0o017, 0o247, 0o311,
  0o041, 0o360, 0o033, 0o066, 0o017, 0o000, 0o076, 0o012,
  0o357, 0o227, 0o311, 0o000, 0o311, 0o052, 0o350, 0o033,
  0o227, 0o274, 0o302, 0o021, 0o023, 0o275, 0o302, 0o021,
  0o023, 0o041, 0o004, 0o032, 0o301, 0o343, 0o305, 0o247,
  0o311, 0o023, 0o032, 0o147, 0o023, 0o032, 0o157, 0o042,
  0o350, 0o033, 0o023, 0o023, 0o301, 0o041, 0o022, 0o032,
  0o343, 0o305, 0o247, 0o311, 0o305, 0o104, 0o115, 0o052,
  0o361, 0o033, 0o160, 0o043, 0o161, 0o043, 0o042, 0o361,
  0o033, 0o301, 0o175, 0o376, 0o177, 0o330, 0o303, 0o322,
  0o026, 0o305, 0o052, 0o361, 0o033, 0o053, 0o106, 0o053,
  0o042, 0o361, 0o033, 0o146, 0o175, 0o376, 0o100, 0o150,
  0o301, 0o320, 0o303, 0o325, 0o026, 0o174, 0o057, 0o147,
  0o175, 0o057, 0o157, 0o043, 0o311, 0o315, 0o071, 0o023,
  0o174, 0o267, 0o362, 0o147, 0o023, 0o315, 0o115, 0o023,
  0o076, 0o055, 0o345, 0o315, 0o026, 0o022, 0o341, 0o315,
  0o101, 0o022, 0o247, 0o311, 0o345, 0o052, 0o352, 0o033,
  0o104, 0o115, 0o341, 0o012, 0o274, 0o312, 0o174, 0o023,
  0o320, 0o303, 0o204, 0o023, 0o003, 0o012, 0o275, 0o312,
  0o220, 0o023, 0o320, 0o013, 0o003, 0o003, 0o012, 0o201,
  0o117, 0o322, 0o163, 0o023, 0o004, 0o303, 0o163, 0o023,
  0o013, 0o140, 0o151, 0o311, 0o315, 0o071, 0o023, 0o315,
  0o154, 0o023, 0o353, 0o312, 0o022, 0o023, 0o303, 0o330,
  0o026, 0o325, 0o076, 0o077, 0o315, 0o026, 0o022, 0o076,
  0o040, 0o357, 0o062, 0o007, 0o020, 0o315, 0o000, 0o020,
  0o021, 0o111, 0o020, 0o032, 0o376, 0o055, 0o041, 0o000,
  0o000, 0o312, 0o312, 0o023, 0o315, 0o331, 0o020, 0o315,
  0o044, 0o023, 0o076, 0o015, 0o062, 0o007, 0o020, 0o321,
  0o247, 0o311, 0o023, 0o315, 0o331, 0o020, 0o315, 0o115,
  0o023, 0o303, 0o277, 0o023, 0o032, 0o376, 0o040, 0o023,
  0o312, 0o324, 0o023, 0o033, 0o306, 0o300, 0o320, 0o007,
  0o157, 0o046, 0o024, 0o315, 0o044, 0o023, 0o067, 0o023,
  0o311, 0o032, 0o376, 0o040, 0o023, 0o312, 0o351, 0o023,
  0o033, 0o376, 0o100, 0o322, 0o310, 0o023, 0o376, 0o050,
  0o310, 0o041, 0o000, 0o000, 0o303, 0o124, 0o024, 0o000,
  0o000, 0o023, 0o055, 0o050, 0o007, 0o056, 0o073, 0o025,
  0o000, 0o001, 0o002, 0o000, 0o001, 0o000, 0o001, 0o000,
  0o002, 0o000, 0o001, 0o000, 0o013, 0o000, 0o010, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o070, 0o000, 0o025, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o002, 0o000,
  0o324, 0o046, 0o004, 0o000, 0o002, 0o000, 0o001, 0o000,
  0o000, 0o000, 0o003, 0o000, 0o126, 0o053, 0o000, 0o023,
  0o016, 0o000, 0o004, 0o000, 0o000, 0o023, 0o000, 0o023,
  0o032, 0o023, 0o376, 0o040, 0o312, 0o100, 0o024, 0o033,
  0o376, 0o015, 0o310, 0o376, 0o044, 0o310, 0o303, 0o314,
  0o026, 0o023, 0o076, 0o001, 0o315, 0o331, 0o020, 0o315,
  0o044, 0o023, 0o311, 0o315, 0o071, 0o023, 0o106, 0o043,
  0o146, 0o150, 0o315, 0o044, 0o023, 0o247, 0o311, 0o315,
  0o071, 0o023, 0o114, 0o105, 0o315, 0o071, 0o023, 0o160,
  0o043, 0o161, 0o247, 0o311, 0o035, 0o372, 0o034, 0o125,
  0o023, 0o321, 0o076, 0o001, 0o311, 0o023, 0o000, 0o023,
  0o315, 0o071, 0o023, 0o104, 0o115, 0o315, 0o071, 0o023,
  0o011, 0o315, 0o044, 0o023, 0o247, 0o311, 0o315, 0o071,
  0o023, 0o315, 0o115, 0o023, 0o104, 0o115, 0o315, 0o071,
  0o023, 0o011, 0o315, 0o044, 0o023, 0o247, 0o311, 0o000,
  0o325, 0o006, 0o000, 0o315, 0o071, 0o023, 0o174, 0o267,
  0o374, 0o301, 0o024, 0o353, 0o315, 0o071, 0o023, 0o174,
  0o267, 0o374, 0o301, 0o024, 0o315, 0o306, 0o024, 0o005,
  0o314, 0o115, 0o023, 0o315, 0o044, 0o023, 0o321, 0o247,
  0o311, 0o004, 0o315, 0o115, 0o023, 0o311, 0o305, 0o104,
  0o115, 0o041, 0o000, 0o000, 0o076, 0o021, 0o062, 0o363,
  0o033, 0o170, 0o037, 0o107, 0o171, 0o037, 0o117, 0o322,
  0o333, 0o024, 0o031, 0o174, 0o037, 0o147, 0o175, 0o037,
  0o157, 0o072, 0o363, 0o033, 0o075, 0o312, 0o356, 0o024,
  0o062, 0o363, 0o033, 0o303, 0o321, 0o024, 0o140, 0o151,
  0o301, 0o311, 0o325, 0o006, 0o000, 0o315, 0o071, 0o023,
  0o174, 0o267, 0o374, 0o301, 0o024, 0o353, 0o315, 0o071,
  0o023, 0o174, 0o267, 0o374, 0o301, 0o024, 0o353, 0o227,
  0o274, 0o302, 0o020, 0o025, 0o275, 0o312, 0o333, 0o026,
  0o315, 0o026, 0o025, 0o303, 0o267, 0o024, 0o305, 0o006,
  0o001, 0o174, 0o346, 0o100, 0o302, 0o044, 0o025, 0o051,
  0o004, 0o303, 0o031, 0o025, 0o170, 0o062, 0o363, 0o033,
  0o104, 0o115, 0o041, 0o000, 0o000, 0o173, 0o221, 0o137,
  0o172, 0o230, 0o127, 0o322, 0o117, 0o025, 0o173, 0o201,
  0o137, 0o172, 0o210, 0o127, 0o051, 0o072, 0o363, 0o033,
  0o075, 0o312, 0o115, 0o025, 0o062, 0o363, 0o033, 0o353,
  0o051, 0o353, 0o303, 0o055, 0o025, 0o301, 0o311, 0o051,
  0o043, 0o072, 0o363, 0o033, 0o075, 0o312, 0o115, 0o025,
  0o303, 0o104, 0o025, 0o315, 0o071, 0o023, 0o315, 0o115,
  0o023, 0o315, 0o044, 0o023, 0o247, 0o311, 0o000, 0o000,
  0o000, 0o325, 0o315, 0o071, 0o023, 0o353, 0o315, 0o071,
  0o023, 0o345, 0o315, 0o071, 0o023, 0o174, 0o346, 0o200,
  0o302, 0o262, 0o025, 0o172, 0o346, 0o200, 0o302, 0o227,
  0o025, 0o174, 0o272, 0o312, 0o214, 0o025, 0o322, 0o227,
  0o025, 0o303, 0o224, 0o025, 0o175, 0o273, 0o312, 0o232,
  0o025, 0o322, 0o227, 0o025, 0o076, 0o001, 0o041, 0o076,
  0o004, 0o041, 0o076, 0o000, 0o341, 0o021, 0o242, 0o025,
  0o325, 0o351, 0o312, 0o260, 0o025, 0o321, 0o032, 0o376,
  0o015, 0o312, 0o375, 0o022, 0o023, 0o303, 0o246, 0o025,
  0o321, 0o311, 0o172, 0o346, 0o200, 0o302, 0o201, 0o025,
  0o303, 0o224, 0o025, 0o376, 0o000, 0o311, 0o376, 0o001,
  0o311, 0o376, 0o000, 0o310, 0o376, 0o001, 0o311, 0o376,
  0o001, 0o310, 0o376, 0o004, 0o311, 0o376, 0o004, 0o311,
  0o376, 0o000, 0o310, 0o376, 0o004, 0o311, 0o056, 0o273,
  0o001, 0o056, 0o276, 0o001, 0o056, 0o301, 0o001, 0o056,
  0o307, 0o001, 0o056, 0o315, 0o001, 0o056, 0o320, 0o046,
  0o025, 0o315, 0o044, 0o023, 0o247, 0o311, 0o305, 0o104,
  0o115, 0o052, 0o364, 0o033, 0o160, 0o043, 0o161, 0o043,
  0o042, 0o364, 0o033, 0o301, 0o175, 0o376, 0o177, 0o330,
  0o303, 0o336, 0o026, 0o305, 0o052, 0o364, 0o033, 0o053,
  0o106, 0o053, 0o042, 0o364, 0o033, 0o146, 0o175, 0o376,
  0o164, 0o150, 0o301, 0o320, 0o303, 0o341, 0o026, 0o142,
  0o153, 0o315, 0o356, 0o025, 0o247, 0o311, 0o315, 0o003,
  0o026, 0o353, 0o247, 0o311, 0o076, 0o040, 0o315, 0o026,
  0o022, 0o247, 0o311, 0o000, 0o000, 0o000, 0o041, 0o077,
  0o026, 0o001, 0o350, 0o033, 0o176, 0o002, 0o175, 0o376,
  0o033, 0o310, 0o003, 0o043, 0o303, 0o064, 0o026, 0o000,
  0o000, 0o000, 0o034, 0o001, 0o034, 0o000, 0o040, 0o017,
  0o100, 0o030, 0o000, 0o164, 0o024, 0o377, 0o057, 0o000,
  0o000, 0o056, 0o241, 0o051, 0o321, 0o377, 0o057, 0o377,
  0o377, 0o041, 0o100, 0o030, 0o042, 0o361, 0o033, 0o041,
  0o164, 0o024, 0o042, 0o364, 0o033, 0o315, 0o020, 0o027,
  0o052, 0o352, 0o033, 0o126, 0o043, 0o136, 0o353, 0o000,
  0o042, 0o350, 0o033, 0o023, 0o023, 0o247, 0o311, 0o076,
  0o015, 0o357, 0o303, 0o360, 0o022, 0o327, 0o076, 0o017,
  0o062, 0o360, 0o033, 0o247, 0o311, 0o345, 0o325, 0o305,
  0o353, 0o016, 0o377, 0o303, 0o107, 0o022, 0o000, 0o000,
  0o327, 0o000, 0o000, 0o000, 0o076, 0o105, 0o357, 0o076,
  0o122, 0o357, 0o357, 0o076, 0o040, 0o357, 0o046, 0o000,
  0o000, 0o000, 0o000, 0o315, 0o101, 0o022, 0o052, 0o350,
  0o033, 0o076, 0o040, 0o357, 0o315, 0o205, 0o026, 0o016,
  0o010, 0o041, 0o357, 0o033, 0o021, 0o106, 0o026, 0o032,
  0o167, 0o015, 0o302, 0o267, 0o026, 0o041, 0o002, 0o032,
  0o061, 0o377, 0o000, 0o303, 0o257, 0o021, 0o056, 0o001,
  0o001, 0o056, 0o002, 0o001, 0o056, 0o003, 0o001, 0o056,
  0o004, 0o001, 0o056, 0o005, 0o001, 0o056, 0o006, 0o001,
  0o056, 0o007, 0o001, 0o056, 0o010, 0o001, 0o056, 0o011,
  0o001, 0o056, 0o012, 0o001, 0o056, 0o013, 0o001, 0o056,
  0o014, 0o001, 0o056, 0o015, 0o001, 0o056, 0o016, 0o001,
  0o056, 0o017, 0o001, 0o056, 0o020, 0o303, 0o216, 0o026,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o076, 0o012, 0o357, 0o052, 0o115, 0o026, 0o042, 0o366,
  0o033, 0o311, 0o325, 0o315, 0o071, 0o023, 0o353, 0o315,
  0o071, 0o023, 0o104, 0o115, 0o315, 0o044, 0o023, 0o353,
  0o315, 0o044, 0o023, 0o321, 0o305, 0o315, 0o240, 0o024,
  0o315, 0o071, 0o023, 0o303, 0o072, 0o027, 0o315, 0o071,
  0o023, 0o345, 0o051, 0o104, 0o115, 0o052, 0o366, 0o033,
  0o175, 0o221, 0o117, 0o174, 0o230, 0o107, 0o013, 0o052,
  0o354, 0o033, 0o274, 0o302, 0o120, 0o027, 0o171, 0o275,
  0o332, 0o360, 0o026, 0o140, 0o151, 0o301, 0o160, 0o053,
  0o161, 0o104, 0o115, 0o042, 0o366, 0o033, 0o315, 0o071,
  0o023, 0o161, 0o043, 0o160, 0o247, 0o311, 0o315, 0o071,
  0o023, 0o053, 0o051, 0o104, 0o115, 0o315, 0o071, 0o023,
  0o011, 0o315, 0o044, 0o023, 0o247, 0o311, 0o315, 0o071,
  0o023, 0o053, 0o315, 0o044, 0o023, 0o052, 0o370, 0o033,
  0o315, 0o044, 0o023, 0o315, 0o240, 0o024, 0o315, 0o200,
  0o024, 0o303, 0o146, 0o027, 0o032, 0o023, 0o376, 0o040,
  0o312, 0o214, 0o027, 0o033, 0o306, 0o300, 0o320, 0o007,
  0o117, 0o023, 0o032, 0o376, 0o050, 0o312, 0o243, 0o027,
  0o033, 0o247, 0o311, 0o151, 0o046, 0o024, 0o116, 0o043,
  0o146, 0o151, 0o116, 0o043, 0o106, 0o043, 0o315, 0o044,
  0o023, 0o140, 0o151, 0o042, 0o370, 0o033, 0o067, 0o311,
  0o300, 0o325, 0o342, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o325, 0o023, 0o032,
  0o376, 0o015, 0o302, 0o064, 0o030, 0o353, 0o315, 0o044,
  0o023, 0o321, 0o247, 0o311, 0o325, 0o315, 0o071, 0o023,
  0o345, 0o116, 0o043, 0o106, 0o315, 0o071, 0o023, 0o353,
  0o315, 0o071, 0o023, 0o003, 0o172, 0o270, 0o302, 0o361,
  0o027, 0o173, 0o271, 0o322, 0o361, 0o027, 0o303, 0o006,
  0o030, 0o345, 0o315, 0o044, 0o023, 0o341, 0o353, 0o315,
  0o044, 0o023, 0o341, 0o315, 0o044, 0o023, 0o140, 0o151,
  0o315, 0o044, 0o023, 0o341, 0o247, 0o311, 0o341, 0o315,
  0o044, 0o023, 0o140, 0o151, 0o315, 0o044, 0o023, 0o321,
  0o247, 0o311, 0o376, 0o044, 0o302, 0o314, 0o026, 0o303,
  0o033, 0o023, 0o032, 0o376, 0o040, 0o023, 0o312, 0o032,
  0o030, 0o033, 0o306, 0o300, 0o320, 0o325, 0o023, 0o032,
  0o306, 0o300, 0o321, 0o320, 0o376, 0o015, 0o310, 0o376,
  0o040, 0o310, 0o067, 0o311, 0o376, 0o044, 0o312, 0o315,
  0o027, 0o303, 0o306, 0o027, 0o347, 0o323, 0o241, 0o324,
  0o000, 0o120, 0o000, 0o036, 0o000, 0o006, 0o000, 0o007,
  0o000, 0o010, 0o000, 0o012, 0o000, 0o000, 0o000, 0o030,
  0o000, 0o000, 0o000, 0o030, 0o326, 0o036, 0o322, 0o375,
  0o230, 0o141, 0o001, 0o014, 0o211, 0o326, 0o167, 0o323,
  0o011, 0o230, 0o155, 0o022, 0o006, 0o005, 0o220, 0o322,
  0o304, 0o322, 0o213, 0o322, 0o375, 0o230, 0o166, 0o012,
  0o007, 0o214, 0o322, 0o304, 0o027, 0o320, 0o230, 0o073,
  0o014, 0o001, 0o223, 0o322, 0o304, 0o027, 0o300, 0o000,
  0o204, 0o232, 0o146, 0o015, 0o041, 0o375, 0o033, 0o006,
  0o010, 0o176, 0o007, 0o007, 0o007, 0o256, 0o027, 0o027,
  0o055, 0o055, 0o055, 0o176, 0o027, 0o167, 0o054, 0o176,
  0o027, 0o167, 0o054, 0o176, 0o027, 0o167, 0o054, 0o176,
  0o027, 0o167, 0o005, 0o302, 0o211, 0o030, 0o052, 0o374,
  0o033, 0o174, 0o346, 0o077, 0o147, 0o376, 0o047, 0o312,
  0o272, 0o030, 0o322, 0o204, 0o030, 0o315, 0o044, 0o023,
  0o077, 0o311, 0o175, 0o376, 0o020, 0o303, 0o262, 0o030,
  0o315, 0o071, 0o023, 0o105, 0o076, 0o040, 0o315, 0o026,
  0o022, 0o005, 0o302, 0o304, 0o030, 0o063, 0o063, 0o063,
  0o063, 0o063, 0o063, 0o301, 0o341, 0o043, 0o043, 0o345,
  0o305, 0o073, 0o073, 0o073, 0o073, 0o073, 0o073, 0o311,
  0o072, 0o367, 0o033, 0o274, 0o312, 0o360, 0o030, 0o332,
  0o360, 0o026, 0o042, 0o354, 0o033, 0o311, 0o000, 0o000,
  0o072, 0o366, 0o033, 0o326, 0o000, 0o275, 0o322, 0o352,
  0o030, 0o303, 0o360, 0o026, 0o000, 0o000, 0o000, 0o000,
  0o052, 0o354, 0o033, 0o053, 0o104, 0o115, 0o052, 0o376,
  0o033, 0o011, 0o345, 0o052, 0o366, 0o033, 0o104, 0o115,
  0o052, 0o352, 0o033, 0o011, 0o301, 0o315, 0o060, 0o031,
  0o315, 0o101, 0o022, 0o076, 0o040, 0o357, 0o052, 0o366,
  0o033, 0o104, 0o115, 0o052, 0o354, 0o033, 0o053, 0o315,
  0o060, 0o031, 0o315, 0o101, 0o022, 0o327, 0o247, 0o311,
  0o171, 0o225, 0o157, 0o170, 0o234, 0o147, 0o311, 0o052,
  0o352, 0o033, 0o042, 0o304, 0o033, 0o052, 0o354, 0o033,
  0o042, 0o306, 0o033, 0o247, 0o311, 0o315, 0o165, 0o031,
  0o042, 0o304, 0o033, 0o043, 0o043, 0o076, 0o015, 0o043,
  0o276, 0o302, 0o117, 0o031, 0o043, 0o043, 0o042, 0o306,
  0o033, 0o247, 0o311, 0o000, 0o315, 0o165, 0o031, 0o043,
  0o043, 0o076, 0o015, 0o043, 0o276, 0o302, 0o143, 0o031,
  0o043, 0o043, 0o042, 0o306, 0o033, 0o315, 0o165, 0o031,
  0o042, 0o304, 0o033, 0o247, 0o311, 0o315, 0o071, 0o023,
  0o315, 0o154, 0o023, 0o310, 0o303, 0o330, 0o026, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000, 0o000,
  0o231, 0o310, 0o122, 0o316, 0o330, 0o204, 0o322, 0o300,
  0o232, 0o330, 0o124, 0o302, 0o132, 0o343, 0o330, 0o300,
  0o322, 0o300, 0o231, 0o331, 0o215, 0o326, 0o175, 0o322,
  0o375, 0o232, 0o210, 0o244, 0o326, 0o175, 0o323, 0o034,
  0o231, 0o351, 0o215, 0o331, 0o067, 0o322, 0o213, 0o322,
  0o375, 0o132, 0o343, 0o231, 0o366, 0o254, 0o132, 0o343,
  0o331, 0o134, 0o322, 0o213, 0o032, 0o216, 0o331, 0o105,
  0o322, 0o213, 0o032, 0o216, 0o047, 0o041, 0o066, 0o010,
  0o326, 0o053, 0o326, 0o167, 0o320, 0o070, 0o322, 0o360,
  0o320, 0o265, 0o032, 0o022, 0o320, 0o360, 0o032, 0o004,
  0o326, 0o131, 0o232, 0o041, 0o114, 0o105, 0o324, 0o133,
  0o310, 0o132, 0o340, 0o324, 0o147, 0o322, 0o304, 0o322,
  0o375, 0o232, 0o074, 0o107, 0o317, 0o232, 0o057, 0o124,
  0o317, 0o132, 0o343, 0o322, 0o304, 0o323, 0o224, 0o232,
  0o275, 0o123, 0o125, 0o302, 0o132, 0o343, 0o324, 0o100,
  0o326, 0o027, 0o323, 0o224, 0o232, 0o112, 0o111, 0o306,
  0o132, 0o343, 0o133, 0o114, 0o132, 0o343, 0o325, 0o151,
  0o032, 0o022, 0o233, 0o326, 0o106, 0o117, 0o322, 0o323,
  0o324, 0o326, 0o363, 0o132, 0o340, 0o324, 0o147, 0o226,
  0o363, 0o124, 0o317, 0o327, 0o305, 0o132, 0o343, 0o322,
  0o304, 0o322, 0o375, 0o075, 0o046, 0o062, 0o004, 0o032,
  0o232, 0o226, 0o120, 0o322, 0o231, 0o322, 0o242, 0o322,
  0o322, 0o232, 0o173, 0o254, 0o322, 0o342, 0o232, 0o332,
  0o215, 0o322, 0o375, 0o232, 0o202, 0o273, 0o326, 0o044,
  0o032, 0o166, 0o326, 0o175, 0o322, 0o304, 0o322, 0o375,
  0o132, 0o343, 0o323, 0o125, 0o032, 0o161, 0o322, 0o304,
  0o322, 0o375, 0o000, 0o000, 0o000, 0o000, 0o232, 0o251,
  0o111, 0o316, 0o133, 0o310, 0o323, 0o241, 0o324, 0o147,
  0o232, 0o245, 0o254, 0o032, 0o232, 0o322, 0o304, 0o322,
  0o375, 0o232, 0o264, 0o122, 0o105, 0o324, 0o326, 0o036,
  0o322, 0o304, 0o322, 0o375, 0o233, 0o200, 0o105, 0o116,
  0o304, 0o326, 0o167, 0o323, 0o011, 0o232, 0o306, 0o114,
  0o123, 0o324, 0o031, 0o340, 0o322, 0o375, 0o232, 0o317,
  0o122, 0o125, 0o316, 0o322, 0o304, 0o032, 0o020, 0o233,
  0o101, 0o116, 0o105, 0o327, 0o322, 0o304, 0o032, 0o000,
  0o326, 0o347, 0o232, 0o154, 0o244, 0o323, 0o034, 0o000,
  0o232, 0o343, 0o275, 0o232, 0o354, 0o255, 0o133, 0o003,
  0o325, 0o133, 0o032, 0o361, 0o232, 0o357, 0o253, 0o133,
  0o003, 0o232, 0o372, 0o253, 0o133, 0o003, 0o324, 0o200,
  0o032, 0o361, 0o233, 0o055, 0o255, 0o133, 0o003, 0o324,
  0o216, 0o032, 0o361, 0o133, 0o027, 0o233, 0o016, 0o252,
  0o133, 0o027, 0o324, 0o240, 0o033, 0o005, 0o233, 0o055,
  0o257, 0o133, 0o027, 0o324, 0o362, 0o033, 0o005, 0o330,
  0o032, 0o033, 0o035, 0o031, 0o300, 0o327, 0o214, 0o033,
  0o047, 0o133, 0o254, 0o324, 0o133, 0o322, 0o300, 0o323,
  0o324, 0o033, 0o057, 0o324, 0o133, 0o322, 0o300, 0o323,
  0o351, 0o033, 0o065, 0o322, 0o300, 0o233, 0o077, 0o250,
  0o132, 0o343, 0o233, 0o077, 0o251, 0o322, 0o300, 0o326,
  0o352, 0o232, 0o330, 0o123, 0o132, 0o305, 0o331, 0o000,
  0o032, 0o216, 0o000, 0o000, 0o233, 0o123, 0o275, 0o325,
  0o326, 0o322, 0o300, 0o233, 0o150, 0o274, 0o233, 0o135,
  0o275, 0o325, 0o334, 0o322, 0o300, 0o233, 0o144, 0o276,
  0o325, 0o337, 0o322, 0o300, 0o325, 0o331, 0o322, 0o300,
  0o232, 0o330, 0o276, 0o233, 0o162, 0o275, 0o325, 0o345,
  0o322, 0o300, 0o233, 0o171, 0o274, 0o325, 0o337, 0o322,
  0o300, 0o325, 0o342, 0o322, 0o300, 0o000, 0o000, 0o000,
  0o232, 0o275, 0o104, 0o111, 0o315, 0o323, 0o324, 0o326,
  0o352, 0o226, 0o355, 0o250, 0o132, 0o343, 0o233, 0o241,
  0o254, 0o132, 0o343, 0o226, 0o355, 0o251, 0o327, 0o032,
  0o233, 0o235, 0o254, 0o033, 0o205, 0o322, 0o304, 0o322,
  0o375, 0o226, 0o355, 0o251, 0o327, 0o066, 0o033, 0o230,
  0o000, 0o000, 0o000, 0o000, 0o226, 0o355, 0o250, 0o132,
  0o343, 0o233, 0o275, 0o254, 0o132, 0o343, 0o226, 0o355,
  0o251, 0o327, 0o166, 0o322, 0o300, 0o226, 0o355, 0o251,
  0o327, 0o146, 0o322, 0o300, 0o044, 0o034, 0o054, 0o034,
  0o327, 0o214, 0o033, 0o320, 0o133, 0o254, 0o322, 0o300,
  0o323, 0o324, 0o326, 0o344, 0o322, 0o300, 0o232, 0o150,
  0o116, 0o130, 0o324, 0o323, 0o324, 0o326, 0o352, 0o327,
  0o324, 0o324, 0o147, 0o322, 0o304, 0o322, 0o375, 0o072,
  0o000, 0o000, 0o000, 0o034, 0o054, 0o034, 0o004, 0o040,
  0o017, 0o100, 0o030, 0o000, 0o164, 0o024, 0o377, 0o057,
  0o000, 0o000, 0o056, 0o241, 0o051, 0o321, 0o377, 0o057,
];
