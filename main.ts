// Entry for make.fun bounty gta6-clipper-01 ("Clip GTA 6 for the most YouTube views").
// The entry is the video itself: this program's only job is to hand the house the
// video's address. It copies VIDEO.json from the repository root into the output
// directory, where the gate reads it and looks the video up on YouTube.
//
// Node 22, standard library only. No network, no clock, no files outside the repo,
// so the two runs of an entry write the same bytes.
//
// Local run (mirrors the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

// A valid entry names a YouTube Shorts video: https://www.youtube.com/shorts/<id>,
// where <id> is exactly 11 URL-safe characters. Anything else is not a video the
// house can look up, so fail loudly instead of handing the gate a dead address.
const SHORTS_URL = /^https:\/\/www\.youtube\.com\/shorts\/([A-Za-z0-9_-]{11})$/;

function shortsUrl(url: unknown): string {
  if (typeof url !== 'string' || !SHORTS_URL.test(url)) {
    throw new Error(
      `VIDEO.json url must be a YouTube Shorts URL (https://www.youtube.com/shorts/<11-character id>), got: ${JSON.stringify(url)}`,
    );
  }
  return url;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const video = JSON.parse(readFileSync(SOURCE, 'utf8')) as { url: string };
  const url = shortsUrl(video.url);
  copyFileSync(SOURCE, TARGET);
  console.log(`VIDEO.json copied to ${TARGET}: ${url}`);
} catch (err) {
  console.error(`VIDEO.json could not be validated and copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
