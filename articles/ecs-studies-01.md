---
slug: "/articles/ecs-studies-01"
date: "2021-02-04"
title: "ECS Studies - 01 - What's an Ecs ?"
published: true
---

In this article series I'll talk about my journey implementing an
**Entity component system (Ecs)** which is a pattern commonly used in game and
game engine development. I will implement it in Rust, and thus these
articles will be Rust-centered. These articles aren't meant to be a tutorial,
these are my personal study notes.


## The pattern

An Entity component system allows to describe a game's entities as a
set of components. The components are plain data with no logic
attached to them. The logic is done through systems which will query
and mutate the components stored in the Ecs.


Some entity could be a Character entity which has a Sword and a Health
component. We could then have some system that checks if a Character
attacks another one and updates the Health component of the attacked entity.


In summary, there are 3 types of actors in an Ecs:
- **Entities**: Uniquely identifiable sets of components
- **Components**: The data defining entities
- **Systems**: The logic applied to the entities' components


This pattern has the advantage of easily allowing to add and remove
components from entities at runtime. It can also be implemented in a
cache-friendly way and a "parallel-friendly" way.


## Different approaches

Writing an Ecs can be challenging in several ways. First, if ensuring
fast access is wanted, it is required to decide of a smart way of
storing the entities and their components. I learnt from [this article](https://csherratt.github.io/blog/posts/specs-and-legion/)
written by [@csherratt](https://github.com/csherratt) two ways of
storing Ecs data that are used in the two most known Ecs library for
the Rust programming language.


**Specs** stores each component of the same type in a single storage while
**Legion** groups them by "**Archetypes**". An Archetype is a collection of
the components of identically structured entities.


I won't explore the definition of these concepts more in depth in this article since
@csherratt's article already fulfill this purpose.


Another challenging aspect is, as in any data structure and particularly
the ones used in a parallel concepts, ensuring its soundness. This is
especially true in the context of using a programming language like
Rust which will either scream at you if you try to do is unsound or
will go brrrr if unsound unsafe code is used to get around it.

## Conclusion

This short introduction will be followed by several case studies of
implementation details of several Ecs implementations in Rust, such as
the previously cited [**Specs**](https://github.com/amethyst/specs) and [**Legion**](https://github.com/amethyst/legion), but also [**hecs**](https://github.com/Ralith/hecs) or [**bevy_ecs**](https://github.com/bevyengine/bevy/tree/master/crates/bevy_ecs)
(which is a fork of hecs).
