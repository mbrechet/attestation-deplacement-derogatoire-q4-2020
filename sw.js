/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-192x192.4ad985c0.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.47463c43.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.5fbfa6af.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.ad0fe6f0.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.887585e1.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.aaba99a7.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.1e3570bc.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "certificate.9e278a37.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "confidentialite.2f395007.js",
    "revision": "fdaad1887614bbc6822d8a5abb2234ff"
  },
  {
    "url": "confidentialite.61ebdf7a.js",
    "revision": "4c21f6e832e62b3c995d15e99b14f254"
  },
  {
    "url": "confidentialite.c78b95e8.css",
    "revision": "b6a24c8fab09b560551b8db2716a2090"
  },
  {
    "url": "confidentialite.daef9682.css",
    "revision": "9caf330c4bbb593fbc8d2eb58a9e085c"
  },
  {
    "url": "confidentialite.faa79232.css",
    "revision": "d93aee5cf723ea05fdaebefb663677ea"
  },
  {
    "url": "confidentialite.faa79232.js",
    "revision": "36a3c9a819aadf7d102353a980efbe0b"
  },
  {
    "url": "confidentialite.html",
    "revision": "2bba0f684e8f1b2ed1bb82ac341c8ccf"
  },
  {
    "url": "favicon-16x16.a0a61c08.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "favicon-32x32.bd6b9d71.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "2289fcca9a126e645de4777b6240e156"
  },
  {
    "url": "logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum_dark.e9bb3588.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "logo_dnum.411ea756.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "main.07621043.js",
    "revision": "68b3ecb7d8d01dfd6fbf62240d459c9c"
  },
  {
    "url": "main.46abc703.js",
    "revision": "0a91735ebd12b37d0d43cc2fe59a131b"
  },
  {
    "url": "main.c78b95e8.css",
    "revision": "de9511575d474e964625afe3559c7a6e"
  },
  {
    "url": "main.daef9682.css",
    "revision": "7d236ed06e460d3f2096e07384bbc079"
  },
  {
    "url": "main.fb6bbcaf.css",
    "revision": "a6fed0b15468b6a6e4c41d251c35f2ec"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-bold-webfont.db730b38.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-bold-webfont.f8428997.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-regular-webfont.0529dd78.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.78905f1b.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB_dark.375fe714.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "MIN_Interieur_RVB.6e85e781.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "safari-pinned-tab.1551797e.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "safari-pinned-tab.a198a050.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "./",
    "revision": "00b421bd8d633e26d274138b698887ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("https://mbrechet.github.io/attestation-deplacement-derogatoire-q4-2020/index.html"));
