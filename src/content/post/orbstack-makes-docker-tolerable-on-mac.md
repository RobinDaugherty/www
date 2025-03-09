---
title: 'Orbstack Makes Docker Tolerable on Mac'
publishedDate: 2025-03-09T18:23:00Z
tags: [docker]
category: Tech
---

In my work I need to write/design docker images for my projects that will be deployed.
I try not to use Docker for my development itself because of the way that Docker has historically worked on macOS.

Docker Desktop on Mac is a terrible experience.
The desktop app itself is an Electron app, so it loads _yet another_ copy of Chrome, eating memory and adding more CPU load.
You have to allocate an amount of memory to the container process, and that memory will always be occupied unless you fully stop Docker Desktop.

I used [colima](https://github.com/abiosoft/colima) for a while, and that works well, as long as you remember to stop it when you're not using Docker.

Like Docker Desktop, it runs Docker's containerd inside of a Linux virtual machine, which requires a chunk of allocated memory.

It's a big improvement over Docker Desktop, as long as you're comfortable using the command line for everything—something that I have to do anyway when managing server deployment.

But recently, I discovered [Orbstack](https://orbstack.dev).

Instead of an Electron app, it's a native Mac app.
They somehow manage to run the container processes without a virtual machine.

It has a few [other advantages](https://docs.orbstack.dev/compare/docker-desktop).
Maybe give it a try.

Demand good experience for your development tools—you're worth it!
