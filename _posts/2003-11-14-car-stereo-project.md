---
layout: post
title:  "Car Stereo Project"
date:   2003-11-14 00:00
tags: [hardware, software, car, project]
---
In January of 2003, the stereo was stolen from my car.
I have been without a sound system since, and I'm getting quite tired of listening to a tiny little radio with poor reception.

> This article was originally posted in 2003, and was lost during the move from PHPNuke to some other long-forgotten content management system for my site.
> I have recovered the text of the article, and am reposting it here with very few changes.
> 
> There's bound to be some link rot, but I have left the links alone if only to shame the respective webmasters.

After spending hours researching new receivers and even bidding on one or two, I did some research.
I decided to create my own sound system.
I have an MP3 collection, and I will be encoding my CD collection as [Ogg Vorbis](http://www.ogg.org/ogg/vorbis/).

But I also want to be able to listen to the stereo.
After googling for hours, I found the hardware that I have been looking for.
Since I enjoy writing software, I will be integrating all of it myself.

Of course, all of the software I write will be licensed under the GPL, so check back soon for some code.
If you are interested in helping me write or test this get-up, please visit the [Sourceforge Project Page](http://sourceforge.net/projects/music-control/).

## Specifications
* Uses a laptop running Linux hidden away in the vehicle.  Mine is a sometimes-working Thinkpad 600.
* For display, an [LCD such as this one](http://www.crystalfontz.com) connected to the laptop through USB. ($75.00)
* For control, a numeric keypad connected to the laptop through USB. ($22.00)
* To be able to listen to the radio, a D-Link DSB-R100 FM Tuner, connected to the laptop through USB. ($34.95)
* My existing two-channel amplifier to connect the factory speakers, and a 1/8&quot; headphone to male RCA adapter to connect it to the laptop. ($7.00)
* My control application uses mpg321/mpg123 and ogg123 to play files.  These have a [Remote Mode](http://search.cpan.org/src/MLEHMANN/Audio-Play-MPG123-0.62/mpg123/README.remote) that my application uses.
* Note that vorbis-tools-1.0 must be patched for ogg123 to include Remote Mode.  See [this posting on the Vorbis Development List](http://www.xiph.org/archives/vorbis-dev/200210/0008.html).  Also, you must have automake-1.4.  No other version will work when compiling vorbis-tools.

## Status
1.  Specify parts and place orders
    * [AC Inverter](http://catalog.belkin.com/IWCatProductPage.process?Product_Id=122375) (Done)
    * [Display](http://www.crystalfontz.com/products/634usb/index.html) - I chose the gray on white backlight (Done)
    * [Numeric Keypad](http://products.insight.com/product/Presentation/index.vm?product_id=FEL9919306)
    * [Bus-powered USB Hub](http://www.cdw.com/shop/products/default.asp?EDC=278647)
    * [D-Link USB Radio Tuner](http://www.dlink.com/products/usb/dsbr100/) (Done)
    * Wiring harness adapter for my car (Done)
1.  Design user interface for 4x20 display and numeric keypad. (Mostly done.)
1.  Write software front-end for control of mpg123, ogg123, Radio Ttuner, and CD player.  Use code from:
    * lcdproc
    * tunerd
1.  Must also handle controlled shutdown and wakeup based on power loss and restoration.
1.  Test my software in my car.
1.  Create housing/face for display to mount in stereo hole
1.  Network server software for management of playlists, etc, from a network-attached PC.

## Future Upgrades

* Wireless network adapter, so that I can download music to the player from my home network.
* Manage playlists while the laptop is offline, and upon powerup, have laptop replicate over the wireless network.
* [The Griffin Powermate USB Knob](http://www.eviloverlord.net/powermate.html) as a volume control.  Only $39.
