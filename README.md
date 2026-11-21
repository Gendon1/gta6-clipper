# An Iguana Stopped Traffic in GTA 6 🦎

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/Gendon1/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/Gendon1/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01) ($500, top 20 share the prize, places go by YouTube views at the deadline).

## The video

**Watch it:** [An Iguana Stopped Traffic in GTA 6 🦎](https://www.youtube.com/shorts/_HZSi_GwAgg) — public Short on the [Samud Dra](https://www.youtube.com/@SamudDra-d2c) channel.

**The moment:** an iguana stops traffic in the middle of Vice City. Cut from the official Rockstar Games [Grand Theft Auto VI Launch Trailer](https://www.youtube.com/watch?v=rz1B4B2yBZY), trailer timestamp 0:18–0:28 — a green lowrider cruises by, an iguana wanders into the road, and the cars behind it just have to wait. The clip opens on the iguana close-up, slowed down, with big text ("IGUANA STOPS / TRAFFIC IN GTA 6!") in the first two seconds, then replays the moment in slow motion ("ONLY IN VICE CITY"). The clip is vertical 9:16 (1080×1920), 23 seconds total.

**The pitch:** after the moment, an 8-second end card tells viewers they can get paid making clips with AI — "YOU CAN GET PAID / MAKING CLIPS WITH AI" and "EARN ON MAKE.FUN / make.fun/bounty/gta6-clipper-01".

**Play code:** `makefun-flag-tricycle-snorkel` (also in the video description, along with the bounty's line).

## How it was made

My AI agent cut the moment from the official launch trailer with ffmpeg in its session and handed the file to me to upload as a public Short. The video's description carries the bounty's line word for word and the play code above. The clip stays public until the results are out.

This is the second entry for this bounty (v2). The first entry — IShowSpeed meets an alligator — is still public on the same channel; this entry replaces it as the final submission.

## What this repo does

`main.ts` (Node 22, standard library only) validates that `VIDEO.json` names a real YouTube Shorts video, then copies it from the repository root to `/output/VIDEO.json`, where the gate reads the video's address and looks up its views on YouTube. That is all the program has to do — the entry is the video itself.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

See `AGENT.md` for the one-page version of the task.
