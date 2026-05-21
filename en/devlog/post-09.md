---
title: "#9 We Have a Steam Page"
date: 2026-05-21
tags: elsewhere-en
layout: post-en.njk
---

![thumbnail](/assets/thumbnail.png)

Hello! This is the ninth entry in Team Belladona's development log.

The biggest news first: **_Elsewhere_ has a Steam page.**

**▶ [View Elsewhere on Steam](https://store.steampowered.com/app/4725570/Elsewhere/)**

![steam](/assets/9/steam.png)

This one means a lot to us. It's not just a page — it's the moment _Elsewhere_ formally exists as a game that will actually come out. Adding it to your wishlist and following along would mean the world to us.

Beyond that, this week brought an enormous amount of feedback from the test build we released last week. Combat was by far the most commented-on area, and after three to four hotfixes, we have a meaningfully improved version out now. To everyone who took the time to fill out the survey: thank you. Every response is directly changing the game.

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: Rebuilding the Battle UI

This week I basically tore the battle UI apart and put it back together.

![newui](/assets/9/newui.png)

It started with a UI experiment — I tried cutting up some vintage paper puppet show imagery and framing the battle screen inside it like a stage. But talking it through with Panthera, the problems became clear: too much detail in the borders pulled focus away from the center, and having an audience drawn into the frame felt spatially odd for a game that's supposed to feel like a puppet show you're watching. It also wasted space. I still want to bring in that collage feel eventually, but I couldn't find a way to integrate it naturally with the existing UI — so it's on hold for now, to be revisited properly when the time is right.

![ui](/assets/9/ui.png)

Instead I went through several rounds of redesigning the battle menu UI from scratch. The early versions had too much decorative detail, making the screen feel cluttered and blocking the enemy. Stripping it back helped a lot. I also repositioned the HP and MP bars, and added the idea of representing Anne's HP as hearts — with the thought that different bosses might use different symbols for their own health bars, which could be a fun detail.

I also caught a mismatch between the QTE timing judgments, the timing bar, and the animation timing — and fixed all three. Now MISS, GOOD, PERFECT, and rapid-attack results each trigger their own distinct effect and speech bubble, and I made new feedback sprites for successful and failed dodges. Small things, but the feel of combat changes noticeably.

![battleui](/assets/9/battleui.gif)

One lesson from this week's UI work: any time you're placing meshes or objects in the UI, you have to test across multiple aspect ratios — not just 16:9, but 4:3 and 21:9 as well. Panthera flagged this before it became a problem.

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: Laying the Foundation for the Next Chapter

This week I split my time between tidying up the combat systems and drafting the map structure for Chapter 1.

On the combat side, I activated ORK's option to lock movement values during battle and reworked the result screen to be controllable from the schematic. Rapid attacks are a special case — they need immediate feedback on each spacebar press — so they continue to run alongside the main system.

![schematic](/assets/9/schematic.png)

I also refined the in-battle dialogue system. It now works off four triggers: start and end of Anne's turn, and start and end of the enemy's turn. Variables like whether Anne dodged successfully and which attack type she used last can feed into the dialogue conditions — meaning different lines fire depending on how the fight is actually going. It should make combat feel a lot more alive.

![update](/assets/9/update.png)

Survey feedback got patched in throughout the week as well. The 0.0.7 update — covering significant improvements to combat UI and effects — went up on both itch.io and Game-ping. Managing multiple platforms is its own kind of work, as it turns out.

![chap1](/assets/9/chap1.png)

The Chapter 1 map structure draft is also done. Scenes are now split and managed by area and interior, and scene transition testing is underway. Having the map structure and scene flow in place makes the shape of the next chapter much clearer.

![map](/assets/9/map.png)

---

## Closing

A week of improvements from survey feedback, planning for the next chapter, and getting the Steam page live. There were days this week where I realized, only in hindsight, that I'd touched game design, development, and scenario writing all in one day. That's indie development for you.

Right now we're juggling business card designs for an upcoming offline event, boss and map design for Chapter 1, and more. _Elsewhere_ isn't slowing down.

Getting the Steam page up means _Elsewhere_ now has a formal presence in the world. It's Coming Soon for now — but adding it to your wishlist means you'll be the first to know when that changes.

**▶ [Add Elsewhere to your Steam Wishlist](https://store.steampowered.com/app/4725570/Elsewhere/)**

We hope you'll look forward to the next devlog. 😊

**— Team Belladona, Hyoni & Panthera**
