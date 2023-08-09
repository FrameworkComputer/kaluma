// initialize board object
global.board.name = "fwk";
// Capslock LED on keyboard
global.board.LED = 24;

// mount lfs on "/"
const fs = require("fs");
const { VFSLittleFS } = require("vfs_lfs");
const { Flash } = require("flash");
fs.register("lfs", VFSLittleFS);
// fs block starts after 4(storage) + 64(program)
const bd = new Flash(68, 59);
fs.mount("/", bd, "lfs", true);
