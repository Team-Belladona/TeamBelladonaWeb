---
title: "#4 When It Starts to Feel Like a Game"
date: 2026-04-16
tags: elsewhere-en
layout: post-en.njk
---

![thumbnail](/assets/thumbnail.png)

Hello! This is the fourth entry in Team Belladona's development log.

This week we pushed forward on both the art and development sides, staying true to the overall mood and concept of the game. And we made one important decision along the way.

There was a moment where we seriously considered dropping the timing ARPG concept due to the difficulty of implementation. But when we actually thought through what we'd be giving up — the strategic depth that comes with RPG design, the reusability of a well-built system — it just didn't feel worth it. Plenty of other games make great use of timing-based mechanics, and there's no reason we can't do the same. We decided to hold the line. It's too good an idea to let go of just because it's hard. Indie game development is a string of decisions, big and small, and this one felt like it'd stick with us for a while.

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: The Moment It Feels Real

This week, I worked on three main things.

The first was the visual novel-style standing images for Anne — nine in total. Panthera mentioned that while ORK does support this kind of feature, it wasn't quite plug-and-play and would need some customization. But when I saw it running on screen, it looked even better than I'd expected. That was the moment it really hit me: I'm actually making a game. It felt different from just drawing. Seeing Anne alive and moving inside the screen — there's nothing quite like it.

![gesture1](/assets/4/gesture1.png)
![gesture2](/assets/4/gesture2.png)
![gesture3](/assets/4/gesture3.png)

The second was placing map objects in the world part. With Panthera focused on the combat system this week, it made sense for me — with my basic Unity knowledge — to take on the world side of things. After getting some guidance from Panthera on how to collaborate without stepping on each other's work, I started placing trees, houses, fences, and the like.

![world](/assets/4/world.png)

There's still a lot left to fill in, but when I hit play for the first time and saw what was on screen, I was genuinely moved. I didn't know seeing something look like a game would feel this exciting. Each small object is slowly building the atmosphere of this world, and I can feel it.

![world](/assets/4/world.gif)

The third was a small experiment with art style. My drawing program got an update that smoothed out a lot of the lag, so I took the opportunity to try a variation on one of my existing styles. I asked Panthera for his thoughts — and he passed, on the grounds that the new variation came across as a bit too unsettling. (Sigh.) The search for the right style is still ongoing, until I find the one that fits just right.

![style](/assets/4/style.png)

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: One Feature Changes Everything

This week I implemented the portrait feature — which adds a lot of character to the world part — along with the core logic for Anne's four attack types.

ORK Framework provides portrait and dialogue features separately, but the UI we needed — both running together — had to be built from scratch. I wrote custom code to attach portrait HUD functionality on top of the existing dialogue UI, and got a custom portrait dialogue UI working inside the schematic node. Adding just that one UI made the whole thing suddenly feel like a game. There are these moments as the features pile up where the screen starts to look and feel like something real — this week was one of those moments.

That said, the portrait UI felt a bit heavy for lighter moments — a character muttering to themselves, or tossing out a quick joke. So I also built a separate speech bubble UI for short exchanges and throwaway lines, giving us the flexibility to handle all kinds of conversational moments naturally. It's functionally complete for now and will get further polish down the line.

![speechbubble](/assets/4/speech_bubble.gif)

I also designed the core logic for Anne's four attack types — some of the trickier implementation work I've tackled so far.

**Basic Attack**: Watch the timing bar, and press the spacebar the moment it turns green.

![normalattack](/assets/4/normal_attack.gif)

**Rapid Attack**: Mash the spacebar for two seconds to fill the timing bar.

![comboattack](/assets/4/combo_attack.gif)

**Charge Attack**: Hold the spacebar, then release it when the bar turns green.

![chargeattack](/assets/4/charge_attack.gif)

**The Big Speech**: A derivative of the fast basic attack. Anne launches into a rapid-fire string of loud words, dealing mental damage to the enemy. It felt very Anne — and honestly, it was fun to build.

![yap_attack](/assets/4/yap_attack)

All four are built around timing as the core mechanic, so the intention is for players to feel like they're riding a rhythm rather than just pressing buttons. A combat system that keeps you focused every moment without getting boring — that's exactly why we didn't walk away from the timing ARPG concept.

---

## Closing

Looking back at everything we put together this week, it's honestly a lot. If we keep stacking weeks like this, there'll come a point where we have something that looks pretty convincingly like a real game. With Anne's standing images now confirmed working, next week we'll be moving on to Noah's standing images, laying out the overall structure of the first map, and writing up the detailed specs for the battle phase.

Bit by bit, but unmistakably. _Elsewhere_ is still growing. 😊

**— Team Belladona, Hyoni & Panthera**
