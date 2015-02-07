---
layout: post
title:  "Spectrum Wallboard Sign Protocol"
date:   2003-05-23 00:00
categories: Reference
---
This document was created to document the serial-line protocol to control [Spectrum](http://www.specorp.com/)
signs, which come in many sizes and flavors. Spectrum is unwilling to
accurately document this protocol, and has actually released a document
which is poorly written, and almost completely inaccurate. Since I am
writing software which uses this protocol, it was necessary to
reverse-engineer another piece of software to get the codes. My
findings are here so that nobody has to go through this again. You
might think it would make sense to Spectrum Corp to make this
information widely usable, so that they can sell more signs, but they
don't seem too bright (pun intended).

The software that I wrote that implements this protocol is called [Huddle](http://sourceforge.net/projects/huddle), which is GPL and hosted by Sourceforge.

In order to send a control message, the serial port should be set to
7 data bits, even parity, 2 stop bits. The baud rate is 1200, 2400,
4800, or 9600. There is no setting in the sign for baud rate, as the
sign determines the speed based on the first characters in each
message. Because of this, each control message starts with a series of
zeros (0x30), about ten of them for good measure.

Next comes a 0x01, followed by the sign Type Code (see table below).
This tells each type of sign whether you want it to process this
message. The Type Code is followed by a two-character hexidecimal sign
address. This is in the range of `00` (0x30 0x30) to `ff`, and matches
that set in your sign. For a Type Code that addresses all boards, leave
this as `00`.

Next comes an STX character, 0x02, to begin sending command(s). Each
command is prefaced with a Command Code (see table below). Some Command
Codes require one or more characters to follow it as parameters. For
commands where a file is being stored, such as `A`, simply start the
text of the message.

You can end each command with an ETX character (0x03), and send multiple
commands, ending the entire control message with an EOT character
(0x04).

A sign holds one or more messages in memory, in files with a
one-character name. You must send a command to reserve memory with the
name of the file you will be using. This is done with a [Write Special Functions](#Write_Special_Functions) command (see the table).

## Type Codes
<table border="1">
	<thead>
		<tr>
			<th>Char</th>
			<th>ASCII</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><tt>Z</tt></td>
			<td><tt>0x5A</tt></td>
			<td>All Message Centers</td>
		</tr>
		<tr>
			<td><tt>?</tt></td>
			<td><tt>0x3F</tt></td>
			<td>All Message Centers</td>
		</tr>
		<tr>
			<td><tt>0</tt></td>
			<td><tt>0x30</tt></td>
			<td>Response Type Code - Used only when a sign responds to a request</td>
		</tr>
		<tr>
			<td><tt>!</tt></td>
			<td><tt>0x21</tt></td>
			<td>All Message Centers with Visual Verification - This code will cause the wallboards to give a visual indication "Transmission OK" on the wallboard screen if the transmission frame format was received without error.</td>
		</tr>
		<tr>
			<td><tt>1</tt></td>
			<td><tt>0x31</tt></td>
			<td>All One line wallboards</td>
		</tr>
		<tr>
			<td><tt>2</tt></td>
			<td><tt>0x32</tt></td>
			<td>All Two line wallboards</td>
		</tr>
		<tr>
			<td><tt>#</tt></td>
			<td><tt>0x23</tt></td>
			<td>All Matrix Products</td>
		</tr>
		<tr>
			<td><tt>$</tt></td>
			<td><tt>0x24</tt></td>
			<td>Full Matrix Products</td>
		</tr>
		<tr>
			<td><tt>%</tt></td>
			<td><tt>0x25</tt></td>
			<td>Character Matrix Products</td>
		</tr>
		<tr>
			<td><tt>a</tt></td>
			<td><tt>0x61</tt></td>
			<td>3214C Wallboard</td>
		</tr>
		<tr>
			<td><tt>b</tt></td>
			<td><tt>0x62</tt></td>
			<td>3614C Wallboard</td>
		</tr>
		<tr>
			<td><tt>c</tt></td>
			<td><tt>0x63</tt></td>
			<td>3024C Wallboard</td>
		</tr>
		<tr>
			<td><tt>d</tt></td>
			<td><tt>0x64</tt></td>
			<td>3424C Wallboard</td>
		</tr>
		<tr>
			<td><tt>e</tt></td>
			<td><tt>0x65</tt></td>
			<td>1512R Wallboard</td>
		</tr>
		<tr>
			<td><tt>f</tt></td>
			<td><tt>0x66</tt></td>
			<td>1512C Wallboard</td>
		</tr>
		<tr>
			<td><tt>g</tt></td>
			<td><tt>0x67</tt></td>
			<td>3214R Wallboard</td>
		</tr>
		<tr>
			<td><tt>h</tt></td>
			<td><tt>0x68</tt></td>
			<td>3614R Wallboard</td>
		</tr>
		<tr>
			<td><tt>i</tt></td>
			<td><tt>0x69</tt></td>
			<td>3024R Wallboard</td>
		</tr>
		<tr>
			<td><tt>j</tt></td>
			<td><tt>0x6A</tt></td>
			<td>3424R Wallboard</td>
		</tr>
		<tr>
			<td><tt>k</tt></td>
			<td><tt>0x6B</tt></td>
			<td>1023/1033 Wallboards</td>
		</tr>
		<tr>
			<td><tt>l</tt></td>
			<td><tt>0x6C</tt></td>
			<td>3XX7 Series (3217, 3617, 3027 Wallboards)</td>
		</tr>
		<tr>
			<td><tt>m</tt></td>
			<td><tt>0x6D</tt></td>
			<td>Power Light Series 16 row</td>
		</tr>
		<tr>
			<td><tt>n</tt></td>
			<td><tt>0x6E</tt></td>
			<td>Power Light Series 24 row</td>
		</tr>
		<tr>
			<td><tt>z</tt></td>
			<td><tt>0x7A</tt></td>
			<td>All Message Centers will first configure memory for 26 files of 150 characters (A-Z) then execute the specified command.</td>
		</tr>
		<tr>
			<td><tt>C</tt></td>
			<td><tt>0x43</tt></td>
			<td>7430I</td>
		</tr>
		<tr>
			<td><tt>D</tt></td>
			<td><tt>0x44</tt></td>
			<td>7440I</td>
		</tr>
		<tr>
			<td><tt>E</tt></td>
			<td><tt>0x45</tt></td>
			<td>7460I</td>
		</tr>
		<tr>
			<td><tt>U</tt></td>
			<td><tt>0x55</tt></td>
			<td>790I</td>
		</tr>
		<tr>
			<td><tt>"</tt></td>
			<td><tt>0x22</tt></td>
			<td>Serial Clocks</td>
		</tr>
		<tr>
			<td><tt>^</tt></td>
			<td><tt>0x5E</tt></td>
			<td>205C</td>
		</tr>
	</tbody>
</table>

## Command Codes
<table border="1">
	<thead>
		<tr>
			<th>Char</th>
			<th>ASCII</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><tt>A</tt></td>
			<td><tt>0x41</tt></td>
			<td>[[#Write Text File|Write Text File]]</td>
		</tr>
		<tr>
			<td><tt>B</tt></td>
			<td><tt>0x42</tt></td>
			<td>Read Text File</td>
		</tr>
		<tr>
			<td><tt>E</tt></td>
			<td><tt>0x45</tt></td>
			<td>[[#Write Special Functions|Write Special Functions]]</td>
		</tr>
		<tr>
			<td><tt>F</tt></td>
			<td><tt>0x46</tt></td>
			<td>Read Special Functions</td>
		</tr>
		<tr>
			<td><tt>G</tt></td>
			<td><tt>0x47</tt></td>
			<td>Write String File</td>
		</tr>
		<tr>
			<td><tt>H</tt></td>
			<td><tt>0x48</tt></td>
			<td>Read String File</td>
		</tr>
		<tr>
			<td><tt>I</tt></td>
			<td><tt>0x49</tt></td>
			<td>Write Dots Picture File</td>
		</tr>
		<tr>
			<td><tt>J</tt></td>
			<td><tt>0x4A</tt></td>
			<td>Read Dots Picture File</td>
		</tr>
		<tr>
			<td><tt>M</tt></td>
			<td><tt>0x4D</tt></td>
			<td>Write Matrix Picture File</td>
		</tr>
		<tr>
			<td><tt>N</tt></td>
			<td><tt>0x4E</tt></td>
			<td>Read Matrix Dots Picture File</td>
		</tr>
		<tr>
			<td><tt>O</tt></td>
			<td><tt>0x4F</tt></td>
			<td>Write Bulletin Message </td>
		</tr>
	</tbody>
</table>

## Write Text File
Writing text to a file is necessary for the message to be displayed.
The text of the message can use the control codes documented below. The
first character following the `A` is a name of the file you are
writing. This can apparently be any character of the ASCII table above
and including 0x20.

To insert a String File in a message, send a DLE (0x10) followed by
the one-character file name. String files can be changed at any time
without re-sending the entire Text File, and the sign will update the
message.

### Colors

Send 0x1c followed by a single character.

<table border="1">
	<thead>
		<tr>
			<th>Char</th>
			<th>Color</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>Red</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Green</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Amber</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Dim Red</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Dim Green</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Brown</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Orange</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Yellow</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Rainbow Horizontal</td>
		</tr>
		<tr>
			<td>A</td>
			<td>Rainbow Checker</td>
		</tr>
		<tr>
			<td>B</td>
			<td>Rainbow Mix</td>
		</tr>
	</tbody>
</table>

### Transitions

Send 0x1b followed by one or two characters.

A transition is sent before the text which will be 'brought in' with the transition.

<table border="1">
	<thead>
		<tr>
			<th>Identifier</th>
			<th>Transition</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><tt>a</tt></td>
			<td>Rotate Left</td>
		</tr>
		<tr>
			<td><tt>b</tt></td>
			<td>Hold</td>
		</tr>
		<tr>
			<td><tt>c</tt></td>
			<td>Flash</td>
		</tr>
		<tr>
			<td><tt>d</tt></td>
			<td>Line Split Out/In ("Switch")</td>
		</tr>
		<tr>
			<td><tt>e</tt></td>
			<td>Roll Up</td>
		</tr>
		<tr>
			<td><tt>f</tt></td>
			<td>Roll Down</td>
		</tr>
		<tr>
			<td><tt>g</tt></td>
			<td>Roll Left</td>
		</tr>
		<tr>
			<td><tt>h</tt></td>
			<td>Roll Right</td>
		</tr>
		<tr>
			<td><tt>i</tt></td>
			<td>Wipe Up</td>
		</tr>
		<tr>
			<td><tt>j</tt></td>
			<td>Wipe Down</td>
		</tr>
		<tr>
			<td><tt>k</tt></td>
			<td>Wipe Left</td>
		</tr>
		<tr>
			<td><tt>l</tt></td>
			<td>Wipe Right</td>
		</tr>
		<tr>
			<td><tt>m</tt></td>
			<td>Scroll</td>
		</tr>
		<tr>
			<td><tt>n0</tt></td>
			<td>Twinkle</td>
		</tr>
		<tr>
			<td><tt>n1</tt></td>
			<td>Sparkle</td>
		</tr>
		<tr>
			<td><tt>n2</tt></td>
			<td>Snow</td>
		</tr>
		<tr>
			<td><tt>n3</tt></td>
			<td>Interlock</td>
		</tr>
		<tr>
			<td><tt>n4</tt></td>
			<td>Switch</td>
		</tr>
		<tr>
			<td><tt>n5</tt></td>
			<td>Slide</td>
		</tr>
		<tr>
			<td><tt>n6</tt></td>
			<td>Spray</td>
		</tr>
		<tr>
			<td><tt>n7</tt></td>
			<td>Starburst</td>
		</tr>
		<tr>
			<td><tt>n8</tt></td>
			<td>Graphic: Welcome</td>
		</tr>
		<tr>
			<td><tt>n9</tt></td>
			<td>Graphic: Slot Machine</td>
		</tr>
		<tr>
			<td><tt>nS</tt></td>
			<td>Graphic: Thank You</td>
		</tr>
		<tr>
			<td><tt>nU</tt></td>
			<td>Graphic: No Smoking</td>
		</tr>
		<tr>
			<td><tt>nV</tt></td>
			<td>Graphic: Don't Drink and Drive</td>
		</tr>
		<tr>
			<td><tt>nW</tt></td>
			<td>Graphic: Animal Running</td>
		</tr>
		<tr>
			<td><tt>nX</tt></td>
			<td>Graphic: Fireworks</td>
		</tr>
		<tr>
			<td><tt>nY</tt></td>
			<td>Graphic: Turbo Car</td>
		</tr>
		<tr>
			<td><tt>nZ</tt></td>
			<td>Graphic: Cherry Bomb</td>
		</tr>
		<tr>
			<td><tt>o</tt></td>
			<td>Auto Mode</td>
		</tr>
		<tr>
			<td><tt>p</tt></td>
			<td>Roll In</td>
		</tr>
		<tr>
			<td><tt>q</tt></td>
			<td>Roll Out</td>
		</tr>
		<tr>
			<td><tt>r</tt></td>
			<td>Wipe In</td>
		</tr>
		<tr>
			<td><tt>s</tt></td>
			<td>Wipe Out</td>
		</tr>
		<tr>
			<td><tt>t</tt></td>
			<td>Compress Rotate (rotates left, with letters being half as wide)</td>
		</tr>
	</tbody>
</table>

### Speed
To adjust the speed of transitions, send one of the following:

<table border="1">
	<thead>
		<tr>
			<th>Type Code</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><tt>0x15</tt></td>
			<td>Speed 1</td>
		</tr>
		<tr>
			<td><tt>0x16</tt></td>
			<td>Speed 2</td>
		</tr>
		<tr>
			<td><tt>0x17</tt></td>
			<td>Speed 3</td>
		</tr>
		<tr>
			<td><tt>0x18</tt></td>
			<td>Speed 4</td>
		</tr>
		<tr>
			<td><tt>0x19</tt></td>
			<td>Speed 5</td>
		</tr>
	</tbody>
</table>

### Text Formatting
To format text, place in front of the text to be altered.

<table border="1">
	<thead>
		<tr>
			<th>Code</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><tt>0x05</tt></td>
			<td><strong>Double High</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
		<tr>
			<td><tt>0x06</tt></td>
			<td><strong>True Descender</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
		<tr>
			<td><tt>0x07</tt></td>
			<td><strong>Character Flash</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
		<tr>
			<td><tt>0x1d 0x30</tt></td>
			<td><strong>Double Stroke</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
		<tr>
			<td><tt>0x1d 0x31</tt></td>
			<td><strong>Double Width</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
		<tr>
			<td><tt>0x1d 0x34</tt></td>
			<td><strong>Fixed Width</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
		<tr>
			<td><tt>0x1d 0x35</tt></td>
			<td><strong>Fancy</strong> Followed by '1' for on, '0' for off.</td>
		</tr>
    <tr>
      <td><tt>0x12</tt></td>
      <td><strong>Wide Character</strong> enable.</td>
    </tr>
    <tr>
      <td><tt>0x11</tt></td>
      <td><strong>Wide Character</strong> disable.</td>
    </tr>
		<tr>
			<td><tt>0x1a 0x38</tt></td>
			<td><strong>Full Height Fancy</strong></td>
		</tr>
		<tr>
			<td><tt>0x1a 0x39</tt></td>
			<td><strong>Full Height Standard</strong></td>
		</tr>
		<tr>
			<td><tt>0x1a 0x33</tt></td>
			<td><strong>Seven-High Standard</strong></td>
		</tr>
		<tr>
			<td><tt>0x1a 0x31</tt></td>
			<td><strong>Five-High Standard</strong></td>
		</tr>
		<tr>
			<td><tt>0x1e 0x30</tt></td>
			<td><strong>Proportional</strong></td>
		</tr>
		<tr>
			<td><tt>0x1e 0x31</tt></td>
			<td><strong>Fixed</strong></td>
		</tr>
		<tr>
			<td><tt>0x22 0x6f</tt></td>
			<td><strong>Line Position Top</strong></td>
		</tr>
		<tr>
			<td><tt>0x20 0x6f</tt></td>
			<td><strong>Line Position Middle</strong></td>
		</tr>
		<tr>
			<td><tt>0x26 0x6f</tt></td>
			<td><strong>Line Position Bottom</strong></td>
		</tr>
		<tr>
			<td><tt>0x30 0x6f</tt></td>
			<td><strong>Line Position Fill</strong></td>
		</tr>
	</tbody>
</table>

## Write Special Functions {#Write_Special_Functions}
These are used to for many different things, which are listed below.  This is only a partial list, however.

<table border="1">
	<thead>
		<tr>
			<th>Type Code</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><tt>$</tt></td>
			<td>Reserve Memory.  Followed by:
				<ul>
					<li>The one-character name of the file (any ASCII char above 0x1f)</li>
					<li>The type of file ('A' for text file, 'B' for string file)</li>
					<li>Some parameters (which are not documented).  "AU" works for text files, "L" works for string files.</li>
					<li>The length of the file in four hex characters.</li>
					<li>For text files, "FF00".  For string files, "0000".  This might mean something, but it's undocumented.</li>
					</ul>
			</td>
		</tr>
	</tbody>
</table>
