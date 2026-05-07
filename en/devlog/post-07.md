---
title: "#7 Wrestling With Bugs, Filling the World"
date: 2026-05-07
tags: elsewhere-en
layout: post-en.njk
---

![thumbnail](/assets/thumbnail.png)

Hello! This is the seventh entry in Team Belladona's development log.

This week brought more surprises than we'd have liked. Bugs to wrestle with, a map to fill, key art to finish — and on top of all that, some personal setbacks along the way. Still, looking back at the end of it, we got a lot done. And a playable build feels like it's just around the corner now. We're almost there.

---

## <img src="/assets/hyoni_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Hyoni: Building the Map, Finishing the Art

The biggest time investment this week was the map. I started by switching from a mesh renderer setup to a sprite-based format — but once it was in, the shadows stopped working and Anne started clipping through objects. So I went back to the mesh renderer. A detour, but it made it clear which approach actually fits our project.

![draft](/assets/7/draft.png)

With that settled, I got back to thinking through where each object should go and placing them one by one. The system we've settled into: I do the first pass of placing objects on the map structure Panthera built, and then Panthera fills in the interaction dialogue for each one.

![mapping](/assets/7/mapping.png)
![interaction](/assets/7/interaction.png)

The map turned out to be bigger than expected, so filling it took a while. But there's something genuinely satisfying about watching the space come together — each object finding its place makes the world feel a little more real.

![map1](/assets/7/map1.png)

One fun discovery along the way: adding a subtle idle animation to objects like houses and trees made the whole scene feel like a paper puppet show in the best way. It's a small thing, but a little bit of movement goes a long way for atmosphere. I also brought in the **PowerPivot asset**, which lets you set custom pivot points and scale or rotate objects from any position — it made placing things a lot more flexible.

![keyart](/assets/7/keyart.png)

The other major work this week was finishing the **key art**. I went through several versions, adjusting brightness and color until something clicked. After a lot of back-and-forth with Panthera — tweaking the character colors, the background tone, and eventually adding a glint to the eyes — it came together. The finished piece will also double as the main menu image. Resources are precious. 😄

---

## <img src="/assets/panthera_head.png" style="height:1.5em; vertical-align:middle; margin-right:0.3em;"> Panthera: The Spine Animator Acting Up Again

Once again, time got spent somewhere I didn't expect. The Spine animator.

As I worked through the actual scenes, a chain of animation bugs surfaced in the transitions between world, battle, and back to world. Leftover state from the previous scene bleeding into the next, a one-frame flicker whenever a skin changed, and — the most disruptive one — Anne becoming completely unable to move in the world after a battle ended.

![solution](/assets/7/solution.png)

The root cause was that the initialization order between components wasn't guaranteed, which led to collisions. From a player's perspective it just looks like a bug, but underneath there's a complex set of systems all running at once. The real challenge was defining exactly who's responsible for what, and when.

The solution was **clear separation of responsibilities**. I drew a firm boundary between the component that handles movement animations and the one that handles custom animations for combat and cutscenes, making sure neither crosses into the other's territory. I also introduced a reset flag that triggers a full animation state reset only at the moment a battle starts or ends — so the cleanup isn't happening every single frame unnecessarily. A few times, fixing one bug surfaced another right next to it. But working through them one condition at a time, things are now stable.

![noah](/assets/7/noah.gif)

With the bugs resolved, I moved on to implementing Noah in the world and getting Anne actually walking around in it. The scene choice UI is in draft form, and the portrait dialogue prefab has been improved as well. We're getting good use out of GitHub — that's something we're quietly proud of.

![condition](/assets/7/condition.png)
![world](/assets/7/world.gif)

---

## Closing

Bugs squashed, a map filled in, key art finished — and a few unexpected personal hurdles cleared along the way. Once the scene where Anne picks up the key and gets pulled into Elsewhere is done, a playable build will finally be within reach. We're looking forward to that moment just as much as you are.

![commit](/assets/7/commit.png)

We hope you'll look forward to the next devlog. 😊

**— Team Belladona, Hyoni & Panthera**
