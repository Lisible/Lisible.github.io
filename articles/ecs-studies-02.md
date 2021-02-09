---
slug: "/articles/ecs-studies-02"
date: "2021-02-09"
title: "ECS Studies - 02 - Storing entities - Hecs"
published: false
---

This article will be an overview of how Hecs stores entities as of
february 2020.

## hecs

hecs' maintainer is @Ralith. The code is owned by Google LLC and
released under the Apache License version 2.0 or the MIT license. This
includes the code excerpts included in this article.


## The API

The entities of Hecs will reside in a **World**. This is a term commonly
used in Ecs libraries and represent where entities live.


Using Hecs, creating a new entity is as easy as
```rust
let mut world = World::new();
let my_entity = world.spawn((123, true, "abc"))
```


In this short code example that has been taken from Hecs
documentation, we create a new world and store an entity
with three components: an i32, a boolean and a string.


Fetching entities is done like so
```rust
for (id, (number, &flag)) in world.query::<(&mut i32, &bool)>().iter() { 
 if flag { *number *= 2 ;}
}

assert_eq!(*world.get::<i32>(my_entity).unwrap(), 246);
```


In this article we will focus on the implementation of World::spawn.

## World::spawn

World::spawn does 4 actions. 


First, it flushes the reserved entities. The entity store of hecs
allows to lazily allocate entities which will be effectively allocated
when flushed.


Secondly, it allocates a new entity in the entity store.


Thirdly, it spawns the entity by fetching the index of the archetype
based on the components of the entity being created. If it doesn't
exist, the archetype is created.


After that, the entity's component storage is allocated in the
archetype, the components are then stored into it.

