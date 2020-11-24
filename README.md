# peerjs-prototype
(very) Rough prototype to explore PeerJS library and the feasibility of creating a serverless, no-download game.

Uses the PeerJS package, which wraps webRTC, to allow several peers to connect to (and update) a central peer (the 'host').
Benefits include the host being able to create shared 'session' without any user being required to download anything.
This is done by updating an in-memory data model which is broadcasted to all connected peers ('clients') after a peer updates the host.

Motivation for the general idea is to create a remote game for STEM activities (especially during the pandemic) that circumvents the need
for paid hosting or other services, and doesn't raise any regulatory or policy concerns due to downloading software. 
