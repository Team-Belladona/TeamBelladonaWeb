---
title: "#3 Running Together, Filling the Gaps"
date: 2026-04-09
tags: elsewhere-en
layout: post-en.njk
---

![Elsewhere Logo](/assets/thumbnail.png)

Hello! This is the third entry in Team Belladona's development log.

It hasn't been long since the two of us started, but our ways of working are already clicking into place. We're in touch every day on Discord — sharing progress, catching what the other missed, naturally filling in each other's gaps. There's a certain feeling that comes from knowing roughly where your teammate is without having to ask. That's the quiet pleasure of working as a team.

This week also called for an agreement on how we'd use Spine together within Unity. Installing the Spine runtime package is just the start — we also needed to align on _how_ we'd actually use it. We settled on naming conventions for directional skins and animations, and we've been working from that shared standard ever since. It sounds like a small thing, but agreements like this are what make it possible to connect each other's work without friction down the line.

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: Noah, Brought to Life in Two Sizes

This week, I focused on the Spine work for Noah's character.

![noah_mini_idle](/assets/3/noah-halfside-idle.gif)
![noah_mini_run](/assets/3/noah-halfside-run.gif)
![noah_idle](/assets/3/noah-halfside-idle-long.gif)

Noah is Anne's older brother, and he appears in different forms depending on whether you're in the world or dialogue part of the game. For the world part, we decided to use standing images for conversations as a way to keep resource costs down — which means I'm building both a small version and a full-size version separately. The small Noah for the world part is now at its first complete stage, and I'm currently working on the full-size version.

![example](/assets/3/example.jpg)

Honestly, I thought something like the above would be done in a day. Then Panthera, drawing on his experience making visual novels, pointed out that each character needs around 7 to 8 expressions and poses. The moment I heard that, it clicked — this was absolutely not a one-day job.

When you're playing other games, these things go by without a second thought. But when you're the one making it, you start to see how these small details are exactly what breathe life into a game.

![battle_concept](/assets/3/battle-concept.png)

This week also had me thinking a lot about combat design. We had a direction — "RPG-style combat" — but the specifics of _how_ that combat would actually play out weren't clear yet. Talking it through with Panthera, I've been taking the lead on shaping the overall flow and feel of the battles. It's not a finished picture yet, but the outline is slowly coming into focus.

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: The Wrong Turns Were Worth It

I took quite a few detours this week.

The plan was to implement 2.5D within a 2D environment. I tried all sorts of approaches — combing through the docs, leaning on AI — but nothing felt quite right. I had a sense that something was fundamentally off, but I couldn't pinpoint where.

Then Hyoni showed me a Unity project she'd built around camera perspective. It was a simple, smoothly moving prototype, and the moment I looked at her code, something clicked.

![hyoni3d](/assets/3/hyoni3d.gif)

To build 2.5D, you have to start from a 3D environment. Looking back, it's obvious — trying to add 0.5D on top of 2D is nearly impossible by design. Carving 2.5D out of 3D is the far more natural approach.

![first3d](/assets/3/3dork.png)

In hindsight, none of this was entirely unexpected. I never assumed it would work cleanly on the first try — running into walls and finding your way around them is part of the process. From that perspective, my goal was to have the core flow designed by next week, and honestly, progress has been faster than expected.

![firstlogic](/assets/3/firstlogic.png)

Once I committed to the switch, I moved the project over to v2 in a 3D environment. The working methods carried over well enough that the transition wasn't jarring — I've been building on the movement implementation and attaching the combat and timing systems in line with the framework's conventions. A bit more polish and we'll have a development flow clean enough to duplicate and use as a template. The detours happened, but they've turned into a foundation I can actually build on.

![panthera3d](/assets/3/panthera3d.gif)

---

## Closing

The more we dig into the details, the more we realize just how large the world Hyoni had in mind really is. Trying to build all of it at once would be a road to nowhere. So our strategy is clear: break it down into what we can actually do right now, and build it out one piece at a time. This week was a small step, but a certain one.

We hope you'll look forward to the next devlog. 😊

**— Team Belladona, Hyoni & Panthera**
