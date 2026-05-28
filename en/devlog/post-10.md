---
title: "#10 Stepping Out"
date: 2026-05-28
tags: elsewhere-en
layout: post-en.njk
---

![thumbnail](/assets/thumbnail.png)

Hello! This is the tenth entry in Team Belladona's development log.

This week was about more than just polishing the game — it was a week where Team Belladona started making contact with the wider world. Business cards designed, a thoughtful reply sent to a fellow developer, and the combat systems refined further.

We also made a quick stop at **PlayX4** together this week, since our schedules happened to line up. We talk every day over Discord, but actually being in the same place is something that only happens on special occasions — so seeing the same games side by side in person felt genuinely new. It was a short visit, but walking through indie game booths and actually playing things gave us a useful kind of inspiration. Feeling firsthand how a game pulls someone in is a different kind of experience when you're a developer yourself.

![play_logo](/assets/10/play_logo.png)

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: Business Cards and a New Character Look

This week I finished the **business card design** in preparation for upcoming offline meetings. It started with revisiting the team logo. Looking at it over and over, I felt it needed to go somewhere more neutral — something that carries the paper puppet show atmosphere of _Elsewhere_ without being too heavy-handed.

![team_logo](/assets/10/team_logo.png)

After several rounds of iteration, we landed on a final design that Panthera approved. It's the first time I've put the team's face onto paper, so to speak, and I ended up putting more into it than I expected. I wanted every part of it to feel like it carries the team's sensibility.

![name](/assets/10/name.png)

This week also brought a special sprite project: **Anne's imagined self**, appearing exclusively in Chapter 0 battle sections. The skin is named `imagine`, and since it follows the existing bone structure, it's compatible with most of the existing combat animations. Drawing the same character in a different form was more interesting than I expected — like peeking at a side of Anne that usually stays hidden.

![imagine_idle](/assets/10/imagine_idle.gif)

I also kept chipping away at the map. I fixed the side fencing that had been bothering me, and put together a simple version of the new dialogue choice speech bubble UI. None of it is dramatic on its own, but these small details accumulate — and the game feels noticeably more put-together for it.

![start](/assets/10/start.png)

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: Building Features, Writing Back

This week I assembled ORK components into **two new nodes for showing and hiding cutscenes**: `Show Cutscene Overlay` and `Hide Cutscene Overlay`. Sprite-based cutscenes can now be controlled directly from the schematic. Building these nodes turned out to be less difficult than I'd expected — which opens up a lot of possibilities going forward.

Text effects also took a step forward. By dropping `<wave>`, `<shake>`, or `<wiggle>` tags into dialogue text, words can now tremble, shake, or ripple on screen. It's a small addition, but it does a lot for the expressiveness of the dialogue. Words that move carry emotion in a way that static text just can't.

![demo](/assets/10/demo.gif)

I also spent time this week replying to a message from an aspiring indie developer who reached out to the team. Between the two of us, we covered a lot of ground — tool selection, how we use AI, thoughts on team building, and feedback on their synopsis. We wrote it carefully, hoping our own experiences might be useful to someone just starting out. Getting a message like that is a small reminder that people are paying attention to what we're building.

---

## Closing

A week of polishing the inside and reaching a little further outside. With business cards in hand, messages coming in, and a Steam page live, _Elsewhere_ feels less and less like something only the two of us know about. Seeing the circle of people looking in the same direction slowly grow — that's quietly energizing.

There's also a conversation underway about making a short, self-contained game on the side — a way to stay fresh while the longer project continues. Whether it ends up as a game jam entry, a collaboration, or something else entirely, we're not sure yet. But the idea has some energy to it, and we're curious where it leads. More soon.

We hope you'll look forward to the next devlog. 😊

**— Team Belladona, Hyoni & Panthera**
