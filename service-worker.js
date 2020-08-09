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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "46c41cba43b28acd89b64ebcfe16aaf6"
  },
  {
    "url": "about.html",
    "revision": "a7418bf9a9fceb2da26b520e2481a61a"
  },
  {
    "url": "assets/css/0.styles.03d54a3d.css",
    "revision": "48f63bc9999b07e7c8ddd1a527cd263f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e01e715b.js",
    "revision": "8d3bd5018c2df6dc4208e8ffcfe7c0c2"
  },
  {
    "url": "assets/js/11.b5a1c8ae.js",
    "revision": "07db2f1177aef2fed1a5c511e70adfb5"
  },
  {
    "url": "assets/js/12.e143a2a8.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.46d1ee80.js",
    "revision": "8f06cd2e56cba9445873e1005ab45013"
  },
  {
    "url": "assets/js/14.a1d6d8b5.js",
    "revision": "bc457c1e2c535a1619900aa235531da1"
  },
  {
    "url": "assets/js/15.8b5ce9d6.js",
    "revision": "979df655f35062b7b7e4a4730563147f"
  },
  {
    "url": "assets/js/16.b9a13676.js",
    "revision": "aaa87b501913cf3c85d91add352c25a2"
  },
  {
    "url": "assets/js/17.a34929ea.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.c09bab57.js",
    "revision": "cba400f0e979fc5817e30b1c5c34764a"
  },
  {
    "url": "assets/js/19.e65517bd.js",
    "revision": "68dd8186414a3a9162f9af0a09aa56cd"
  },
  {
    "url": "assets/js/2.f54036ce.js",
    "revision": "5faefb317fd5aed55559281934d48b8f"
  },
  {
    "url": "assets/js/20.92ad27bc.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.da9d1920.js",
    "revision": "0fe8989100b21bd120c7046410ec9c10"
  },
  {
    "url": "assets/js/22.f965f926.js",
    "revision": "91dbfb5db90eddbf6bfc7c7c548b049e"
  },
  {
    "url": "assets/js/23.74cbd8e6.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.233ab05c.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.1d5e01d7.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.62fad6be.js",
    "revision": "521e7032fdb5de6c787adf6b65584b9f"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.bb121728.js",
    "revision": "1ba76477d44bf9c2cc160d8840f2506f"
  },
  {
    "url": "assets/js/4.ead37252.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.cd069c5e.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.ff832bdb.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.55938e81.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.d8180423.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.0d8bac3a.js",
    "revision": "c16054b389ec4f1bae2f39b0d2e0df5a"
  },
  {
    "url": "demo.html",
    "revision": "fbaaedfb86c4ced095c6dae9bbd68d56"
  },
  {
    "url": "en/about.html",
    "revision": "8904c2e6b0b32a4f234578b8f4fe47ba"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "e502defafb7a47249af3548079906871"
  },
  {
    "url": "en/guide/config.html",
    "revision": "a3d49bc2f75e012a3a730341765f1d3e"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "5aca60b5ededd43268d8de49f8958b35"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "d17f770e02207647845802fa10ee43f6"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c96784b573fc8629f29678f01ed54ef1"
  },
  {
    "url": "en/guide/page.html",
    "revision": "c09dffc891a031c7ee4249e775612747"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "1279ddff573ff46a645765540a56a60a"
  },
  {
    "url": "en/index.html",
    "revision": "64aa65b479b3b428bbdd768920503612"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "d8a91b0fda5a534309d0bafd00805ccf"
  },
  {
    "url": "guide/config.html",
    "revision": "850747b7da014c296f3a2c900be7a765"
  },
  {
    "url": "guide/faq.html",
    "revision": "27edcf8613dd03e28cc2968ad12cfc2d"
  },
  {
    "url": "guide/icon.html",
    "revision": "747eda8d43ef5edb37100870f7dbcd51"
  },
  {
    "url": "guide/index.html",
    "revision": "41c3aa13f5251dbe88fb9397d8d9c910"
  },
  {
    "url": "guide/migrate.html",
    "revision": "e15c1374eb5ee0b34f77619670f3f974"
  },
  {
    "url": "guide/page.html",
    "revision": "28c475a71dcd7c3c8200282713af9cf2"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "3c3649eadb5a5a775e16a73daf03003f"
  },
  {
    "url": "index.html",
    "revision": "5e13b6c3c149ba3e6c4d2ef37050a1db"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
