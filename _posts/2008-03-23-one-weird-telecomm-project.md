---
layout: post
title:  "One Weird Telecomm Project"
date:   2008-03-23 23:20
tags: [telecomm, project]
---
In 2003, I worked at a company with offices spread over four states in the Midwest United States.

The company was moving one of its branch offices to a new address, and we had placed the order to get the data services moved.
The branch office connected to the main office via a T1, which carried voice calls and data.

As the move date drew closer, we began to get nervous: the carrier had taken the order to move, but no order had been placed with the local phone company.

Without our T1, the office staff would not be connected to a voicemail system to take their unanswered calls.
In addition, the incoming calls that normally went to the call center in the main office would overwhelm the small staff at the branch office.

Only three weeks before the day of the move, our carrier told us they would not be able to move their service to the new location.

After an engineering discussion with my boss, I ended up purchasing a Dialogic T1 card and writing software for a special, temporary, and urgent application.

The application would pretend to our branch telephone system to be main office.
It would take every phone call that came in to the branch, and then transfer the call back out to our automated attendant.
The automated attendant would take the call and send it to the extension that was originally desired.

So when a person in the branch dialed an extension at any other branch, the call went out as a long-distance call, and our automated attendant would then transfer the call automatically.
To the user, this added a 5-10 second delay, but other than that, everything worked normally.

I had about three weeks to design, write, and test it.
And it had to work perfectly, because it would be a two-hour drive away, so if anything went wrong, I would have to talk an inexperienced user through troubleshooting it.

In addition to all of this, I also learned to configure ISDN modems so that our AS/400 would be able to connect to our 5494 host controller in the branch office.

The day of the move came, and I went to the branch, removed all of the equipment, moved it to the new location, and hooked everything up.
Our temporary solution ran for about three months until the carrier got their act together.
