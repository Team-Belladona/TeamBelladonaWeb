---
title: "#1 Busy Days, and a Town of Monsters"
date: 2026-06-11
tags: nowhere-en
layout: post-en.njk
---

![title_black](/assets/nowhere/01/title_black.png)

Hello! I'm Panthera, handling development and game design at Team Belladona.

The _Elsewhere_ devlog has been something Hyoni and I write together, but this time I'm starting something a little different — a separate devlog for _NOWHERE_, a side project we've been working on. The plan is to write it from my perspective, logging things as they take shape, one entry at a time.

_Nowhere_ is a horror visual novel that begins when a human protagonist wanders alone into a town with no name and no map. Every resident is a monster, and over the course of seven days, the endings change depending on how you build — or burn — those relationships. One-line pitch: _a human who gets trapped in a town full of monsters._ Writing it out like that, it sounds equal parts compelling and unsettling. 😁

---

## Why a Side Project, and Why Now

Working on _Elsewhere_ taught me something. I joined the team after things were already underway, which meant I wasn't really involved in the early design phase — the part where you figure out what the core loop is, what the game's skeleton looks like. I assumed my partner had the planning side well in hand, and I didn't want to step in too heavily from the start.

But as we worked together, I started to see something clearly. Game design is harder than it looks. Not for lack of ideas — but converting ideas into actual game mechanics, being able to articulate _why_ something is in the game, _how_ it functions, and _what experience it creates for the player_ — that's where things get tricky.

![design](/assets/nowhere/01/design.png)

_Nowhere_ is my chance to walk through that entire process from the beginning. Not just landing on a broad direction, but working out the reasoning behind each mechanism before touching any code. It's also a way of reviewing everything I've been learning through _Elsewhere_.

---

## What I Did This Week

The first task was turning the design document into something that actually works.

The early draft had a world, characters, and an ending structure — but reading it, something felt ungrounded. The affection system was there in concept, but how it moved, what weight each choice carried, what path a player would need to take to reach a good ending — none of that was spelled out. A skeleton without the connective tissue.

So this week was about filling that in. Figuring out how to tier the weight of choices, mapping how each relationship develops over seven days, then simulating it to check whether the intended flow actually held together.

![flowchart](/assets/nowhere/01/flowchart.png)

The process turned out to be more enjoyable than I expected. Looking closely at the design surfaces gaps you wouldn't otherwise notice. There's a scenario where a player makes all the right moves, but the structure still locks them out of a good ending — and since the affection values are hidden, they'd never know why. Catching that kind of thing before writing the actual script is the whole point of this stage. One small adjustment, but it carries a whole design philosophy inside it: _a player who slips up once should still be able to reach a good ending._ That's the kind of thing you have to find here.

---

## Ren'Py, and Knowing What You Can Actually Build

The engine is **Ren'Py** — a visual novel-focused framework I've built several projects with before. The low technical barrier is an advantage, but it also means I can assess what's realistically achievable with unusual clarity.

The main focus at this stage isn't capability — it's making sure _finishing_ isn't the risk. A lot of ideas don't make it to completion, and that's usually not a talent problem. So some of the more elaborate systems are sitting in the backlog for now. Not because they can't be built, but because it hasn't been proven yet that they're necessary for the game to work. The affection system, the branching endings, the actual dialogue with each monster — those need to be solid first.

The next step is writing actual script. There's something that happens when you start writing dialogue for a character — you find out what they actually sound like, how they respond in the moment. The monsters of _Nowhere_ are a long way from walking across a screen. But their voices are getting closer.

---

See you in the next devlog. Looking forward to it. 😊

**— Panthera**

---

![nowhere](/assets/nowhere/01/nowhere.png)

**NOWHERE. A town with no name.**
No one knows why it was built, or how. What is certain is this: the town draws monsters in and makes them part of itself. No one has ever found a way out. Death, it turns out, is no exit either.
