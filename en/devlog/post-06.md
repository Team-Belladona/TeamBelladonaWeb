---
title: "#6 The Story Starts to Move"
date: 2026-04-30
tags: elsewhere-en
layout: post-en.njk
---

![thumbnail](/assets/thumbnail.png)

Hello! This is the sixth entry in Team Belladona's development log.

This week we locked in a new camera angle for the battle scene and dove into the cutscene work in earnest. The overall direction has been on our minds for a while, and it's moving along exactly as planned.

The structure we're working with: each chapter is one act, each act is broken into multiple takes, and we build them one by one — filling in what's needed as we go. For the demo build, we've defined eight takes in total. Panthera handles the scenario schematics, Hyoni fills in the UI, animations, images, and effects. Break the big thing into small pieces, and each of us builds our part. It's the most efficient way we know how to work right now.

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: Filling the Screen

This week I worked on laying out the battle UI and drawing the additional character images needed to support it.

![ui_draft](/assets/6/ui.png)

Panthera adjusted the battle UI and re-set the camera position, which gave me a clear picture of what images were needed and where. Changing the camera angle shifted what resources were required — it's a small thing, but it made our interdependence very tangible. The sense that each of our work slots into the other's has been growing stronger lately.

![ui_real](/assets/6/uireal.png)

Honestly, the thing that surprised me most this week was the speed. The takes are coming together much faster than I expected. It really drove home why frameworks exist — having a solid foundation changes how quickly you can build on top of it. That was the big realization of the week.

I also worked on the effects side of things. I brought in the **Feel asset** and attached an effect manager to each character prefab to handle it. With all the built-in effects, anything in the schematic can now call them with a single line. It'll pay off a lot once we're in the polish phase.

![effect](/assets/6/effect.gif)

And I completed the nine standing images for **Noah** — Anne's older brother and a new NPC joining the cast. With Anne's images already in place and Noah's now done too, the two siblings are really starting to feel like real presences on screen. Drawing nine expressions and poses, I found Noah's personality getting clearer with every stroke. It was a genuinely enjoyable process.

![noah1](/assets/6/1.png)
![noah2](/assets/6/2.png)
![noah3](/assets/6/3.png)

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: What Would Anne Say?

I wrapped up the camera framing for the battle UI and moved into actual take production.

Up until now, the work has been about building systems on top of the framework. This week, it was finally time to use them. And working on top of an existing _Elsewhere_ structure is meaningfully easier than building from scratch — which meant I could spend more of this week on the game's overall design and scenario rather than implementation.

![cutscene](/assets/6/cutscene.png)

That said, one structural change did come up. I'd originally planned to split the Spine components into world-use and battle-use. But as I worked through the takes, I kept finding that battle animations were needed in the world part too — more than I'd expected. Thinking it through, the division was wrong from the start. It's not world vs. battle — it's the **movement component** (which responds directly to player input) versus the **custom animation component** (which handles all Spine-driven animations regardless of context). So I rewrote both scripts from scratch. A detour, but the structure is much cleaner for it.

![inspector](/assets/6/inspector.png)

On the scenario side, I spent the week asking myself: if I were Anne, what would I say? Writing each line of dialogue and staging each scene with that question in mind. The first chapter carries a lot of weight — the game's core mechanics, the bond between the siblings, their personalities, the shape of this world. All of it needs to come through without narration, purely through what Anne and Noah say and do.

Show, don't tell. Easy to say, much harder to pull off. But working through that difficulty is what makes _Elsewhere_ feel more solid with every take. It's been a genuinely enjoyable kind of hard.

![take1sample](/assets/6/take1.gif)

---

## Closing

Takes 1 and 2 are complete. At the current pace — roughly one to one-and-a-half takes per day — we're cautiously hoping a build might be ready sometime next week. Though we know better than to count on schedules. (laughs)

The core systems are in place. We're now in the phase of polish and content. Things that felt impossibly far away when we first started are showing up on screen, one by one. The light at the end of the tunnel isn't just visible — it's close.

_Elsewhere_ is almost there. We hope you'll look forward to the next devlog. 😊

**— Team Belladona, Hyoni & Panthera**
