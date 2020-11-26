# peerjs-prototype
(very) Rough prototype to explore Angular/Firebase and the feasibility of creating a serverless, no-download game.

Uses Firebase realtime database to manage a central model which is observed and modified by all players. Sessions are initiated by an 'host' who generates a new document in the DB and shares the key with players. Benefits include the host being able to create shared 'session' without any user being required to download anything

Motivation for the general idea is to create a remote game for STEM activities (especially during the pandemic) that circumvents the need for paid hosting or other services, and doesn't raise any regulatory or policy concerns due to downloading software.
