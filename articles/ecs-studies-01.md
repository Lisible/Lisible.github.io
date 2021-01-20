---
slug: "/articles/some-article"
date: "2021-01-18"
title: "ECS Studies - 01 - What's an Ecs ?"
published: false
---

In this article series I'll talk about my journey implementing an
**Entity component system (Ecs)** which is a pattern commonly used in game and
game engine development.


## The pattern

An Entity component system allows to describe a game's entities as a
set of components. The components are plain data with no logic
attached to them. The logic is done through systems which will query
and mutate the components stored in the Ecs.


Some entity could be a Character entity which has a Sword and a Health
component. We could then have some system that checks if a Character
attacks another one and updates the Health component of the attacked entity.


In summary, there are 3 types of actors in an Ecs:
- Entities: Uniquely identifiable sets of components
- Components: The data defining entities
- Systems: The logic applied to the entities' components
