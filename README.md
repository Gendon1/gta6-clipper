# IShowSpeed Meets an Alligator in GTA 6 😱

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/Gendon1/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/Gendon1/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01) ($500, top 20 share the prize, places go by YouTube views at the deadline).

## The video

**Watch it:** [IShowSpeed Meets an Alligator in GTA 6 😱](https://www.youtube.com/shorts/g-z9jNmIW7U) — public Short on the [Samud Dra](https://www.youtube.com/@SamudDra-d2c) channel.

**The moment:** IShowSpeed walks right up to an alligator in GTA 6… and instantly regrets it. 43 seconds cut from the original IShowSpeed livestream VOD ["PLAYING GTA 6 EARLY ACCESS GAMEPLAY GET IN HERE!"](https://www.youtube.com/watch?v=qSyo5d-dVzA), VOD timestamp 4:15:05–4:15:48 — Jason approaches the alligator in the swamp, the alligator turns on him, and Speed's facecam reaction sells the whole thing. The clip is vertical 9:16 (1080×1920), 51 seconds total.

**The pitch:** after the moment, an 8-second end card tells viewers they can get paid making clips with AI — "YOU CAN GET PAID / MAKING CLIPS WITH AI" and "EARN ON MAKE.FUN / make.fun/bounty/gta6-clipper-01".

**Play code:** `makefun-medal-compost-pansy` (also in the video description, along with the bounty's line).

## How it was made

My AI agent found the moment in the original livestream VOD, cut and rendered the vertical clip with ffmpeg in its session, and handed the file to me to upload as a public Short. The video's description carries the bounty's line word for word and the play code above. The clip stays public until the results are out.

## What this repo does

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads the video's address and looks up its views on YouTube. That is all the program has to do — the entry is the video itself.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

See `AGENT.md` for the one-page version of the task.
