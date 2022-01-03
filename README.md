# Ableton Live recordings parser
A simple Node.js script for getting all of the audio you've recorded or freezed.
<br />
![demo](https://s10.gifyu.com/images/animationa36992d7ae398583.gif)
<br />
Automatically scans Live Recordings directory tree and dig all of your records.

Requires Node.js being installed.

How to use:<br />
1.Download "index.js" and "packgage.json" files from this repository. You can place them anywhere.<br />
2.Open index.js file with any code or text editor and specify <br />
startPath (your Live Recordings folder) <br />
destination (a folder where all of the files will be copied to)<br />
also you can change filter properties, by default script will catch all "audio" and "freeze" files.<br />
3.Save changes.<br />
4.Open console and go to directory where the "index.js" is located<br />
5.Type "node index.js" and press enter<br />
The process may take some time, depending of how many folders you have and how large are your files.<br />
