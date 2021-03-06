# vidya-chatter

## Summary

- MVP, you visit the site and click a button to generate a code or submit a code you already have.
- When you submit a code, you connect to the person who gave you that code.
- When you give someone a code they can connect to you by submitting it.
- Submitting your own code is not valid.
- Connection will be UDP video with sound.

## Notes

- Web RTC
  - (Tl;dr) The other user needs the SDP which can be sent raw, in a QR code or conveyed with WebSocket.
  - [What is it?](https://www.youtube.com/watch?v=FExZvpVvYxA&ab_channel=HusseinNasser)(43:50) Example(48:17)
    - Works best with 1-to-1 NAT (Full-cone NAT), Address restricted NAT, Port restricted NAT router configs (18:10)
    - Works with STUN(Session Traversal Utilities for NAT) server to interact with public on port (3478) or (5349) for TLS (Secure STUN)(27:30)
      - STUN doesn't work with Symmetric NAT
      - STUN servers are extremely lightweight
      - Tells us our public presence and communicates that to someone else so they can communicate with us (we are hiding behind NAT(Router))
    - In case of Symmetric NAT we use TURN(Traversal Using Relays around NAT)(33:47)
      - TURN servers are expensive.
      - Symmetric NAT is the most secure router config
    - ICE(Interactive Connectivity Establishment) collects all the possible candidates to connect(36:00)
    - SDP(Session Description Protocol) is the file(collection of strings) that actually holds the session info(all the options)(38:00)
      - Most important concept in WebRTC.
      - Discord is WebRTC using custom SDP options. (1:08:00)
      - The whole goal of WebRTC is to send the SDP generated by one user and send it "somehow" to the other party.
      - You will have two SDPs, one is local and one is remote.
    - Signaling is how you send the SDP (tweet, QR code, Whatsapp, WebSockets, HTTP, etc.)(41:20)
    - Security Flaws(NAT SlipStreaming)(44:45)
    - Cons
      - TURN servers are expensive. Reverse proxies and create an application layer server instead.(1:01:00)
      - Falls apart with participants(P2P doesn't scale well O(n^2)) Centralized server to host those connections is work around.
    - Create your [STUN / TURN server](github.com/coturn/coturn)
    - Google has public STUN servers
  -[Google Presentation](https://www.youtube.com/watch?v=p2HzZkd2A40&feature=emb_title&ab_channel=GoogleDevelopers) gets into the code
    - MediaStream(getUserMedia)
      - Getting audio and video(tracks)
      - Obtained with navigator.getUserMedia(constraints, successCallback, errorCallback)(5:20)
        - Constraints -> video? resolution? (7:30)
        - Success -> video stream
        - Error -> What is the error?
    - RTCPeerConnection(10:15)
      - code (11:13)
    - RTCDataChannel
      - Same API as websockets E.G.(15:20)
    - Resources
      - RFC5766-turn-server (free google vm turn server)(21:58)
      - restund (STUN Server)
      - chrome://webrtc-internals (displays detailed and advanced information about current call in browser)(27:47)
      - adapter.js (polyfills for different versions so you can use the same code in all browsers)
    - Security
      - Use HTTPS for signalling (23:07)
        - This enables SRTP for Audio/Video and DTLS for Data
    - Multi-channel call
      - Create MCU to host calls
    - Mobile (25:24)
      - sipML5 (Open source JS SIP client)
      - Phono (Open source JS phone API)
      - Zingaya (embeddable phone widget)
    - Libraries
      - SimpleWebRTC
      - easyRTC
      - webRTC.io

  - [Docs](https://webrtc.org/getting-started/overview)
