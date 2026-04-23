---
title: "#5 Making It Together"
date: 2026-04-23
tags: elsewhere-en
layout: post-en.njk
---

![thumbnail](/assets/thumbnail.png)

Hello! This is the fifth entry in Team Belladona's development log.

This week we were running at full speed, juggling multiple decisions at once. Art, development, and planning all moving in parallel — and in the middle of all that, we got an unexpected boost. From our players, of all places.

We'd been going back and forth on the direction for the UI and just couldn't land on anything.

![think](/assets/5/think.png)

Then it hit us: why are we spinning our wheels when we could just ask? We opened a poll on Hyoni's X account, and the response was way beyond what we expected. Five thousand impressions, and around 300 votes. We knew the algorithm had reach, but seeing it in action was something else entirely.

![result](/assets/5/result.jpg)

On top of the votes, we got a lot of comments too — reading through each one, we picked up ideas we could actually use and came away with more than a few useful insights. If we ever hit another wall like this, asking the community is definitely going on the shortlist.

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: The World Keeps Filling In

This week I focused on map textures and shaders, UI work, and producing animation assets for several in-game elements.

I took the textures and atmosphere I'd been developing for the world part and carried them over into the battle scene — good timing, since Panthera had just wrapped up his work on the battle systems. I adjusted the camera angle for battle and added more set pieces, and then Panthera applied post-processing to the foreground objects to blur them out of focus. The result makes the forest feel like a real place you're fighting in. Putting it side by side with an earlier version, the difference is night and day.

![before](/assets/5/before.png)
![battleresult](/assets/5/battleresult.png)

I also made the animation assets for the speech bubble and the directional arrow that Panthera implemented this week. The speech bubble is used for short lines and asides during battle — I animated it popping in and fading out naturally.

![speechbubble](/assets/5/speechbubble.gif)

The arrow points the player toward their next destination. I gave it a bouncy up-and-down motion that feels light and alive. It's easy to underestimate how much these small touches add up — but every one of them makes the screen feel like it's breathing.

![arrow](/assets/5/arrow.gif)

The UI direction was also a big question this week. To match the paper fairy tale feel of the game, should we go with a paper-textured UI, or lean into something more gothic? I asked Panthera, and he was stuck too. So we opened it up to a vote — and as I mentioned at the top, the response was far beyond what either of us expected.

![gothic](/assets/5/gothic.png)
![gothiclight](/assets/5/gothiclight.png)
![paper](/assets/5/paper.png)

The paper-textured UI won out, with over half the votes. On top of that, I gained new followers and received a lot of encouraging messages. It felt like more than we deserved, honestly — and it made me want to push even harder. Every bit of support is fuel.

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: The Dodge System Was a Whole Thing

Another busy week on the implementation side.

First I went back and cleaned up the animation issues and camera framing that surfaced during last week's attack work. That kind of polish ends up mattering more than the underlying feature, honestly — it's what people actually feel when they play.

Then came the real puzzle this week: the **dodge system**. I thought it'd be straightforward. It wasn't. ORK's built-in evasion mechanic determines dodge outcomes based on stats — it doesn't support the kind of real-time dodge where the result changes based on _when_ the player presses the key. That's what we needed, and it meant building the whole thing from scratch.

Since this is a turn-based game, it made sense to break dodge down into phases. I landed on four:

**Phase 0 (Inactive)**: Outside of combat, or during the player's turn. Dodge input is ignored.

**Phase 1 (PreWindow)**: While the enemy is moving toward Anne. Pressing dodge here is too early — an exclamation mark appears and Anne does a little stumble animation. Early fail.

![evadefailed](/assets/5/evadefailed.gif)

**Phase 2 (WindowOpen)**: A 300ms window just before the attack lands. When the flash hits the screen, that's the moment — press dodge then and the dodge animation plays. Miss it, and you take the hit.

![evade](/assets/5/evade.gif)

**Phase 3 (PostWindow)**: From attack resolution through end of cycle. Input is locked.

Once the phase structure was in place, the rest came together faster than expected — but this was still the hardest thing I implemented this week, no question. In contrast, inventory, save/load, and similar systems were already beautifully handled by the framework and took almost no time to wire up.

![potion](/assets/5/potion.png)

The in-battle dialogue sequence was similarly well-supported — as long as the timing is defined, connecting it to the schematic is almost automatic.

After that, I moved into the environment Hyoni had set up: locked in the camera angles, filled in the remaining UI gaps, and got the map to a state where the full game flow can actually run from start to finish. The core systems are done. Next up is cutscene work. We're close.

---

## Closing

Another week that flew by. I happened to pull up some work from three weeks ago, and the difference was stark. It's hard to believe how much ground we've covered in under a month.

This week also reminded us that we're not building this alone. The poll, the comments, the encouragement — all of it means more than we can say. It's in the work.

We're now moving into the final push: finishing the first-pass map, setting up camera movement, and weaving in the narrative and cutscenes. _Elsewhere_ is starting to look like a real game. We hope you'll look forward to the next devlog. 😊

**— Team Belladona, Hyoni & Panthera**
