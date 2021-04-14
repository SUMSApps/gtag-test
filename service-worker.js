self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});
var cacheName = 'DCatH-v1';
var appShellFiles = [
'analytics-frame.html',
'index.html',
'meta.xml',
'/html5/',
'/html5/data/',
'/html5/data/css',
'/html5/data/css/output.min.css',
'/html5/data/js',
'/html5/lib/img',
'/html5/lib/scripts',
'/html5/lib/scripts/bootstrapper.min.js',
'/html5/lib/scripts/frame.desktop.min.js',
'/html5/lib/scripts/frame.mobile.min.min.js',
'/html5/lib/scripts/slides.min.js',
'/html5/lib/stylesheets',
'/html5/lib/stylesheets/desktop.min.css',
'/html5/lib/stylesheets/mobile.min.css',
'/html5/lib/stylesheets/mobile-fonts',
'/html5/lib/stylesheets/mobile-fonts/open-sans-bold.woff',
'/html5/lib/stylesheets/mobile-fonts/open-sans-light.woff',
'/html5/lib/stylesheets/mobile-fonts/open-sans-regular.woff',
'/mobile/',
'/mobile/notes/',
'/mobile/slides/',
'/mobile/txt__default_6ie9NvofiDZ.png',
'/mobile/Shape6ZKCv2paJOi.png',
'/mobile/Shape6YjNnzQJrFb.png',
'/mobile/Shape6Y7pshZpu8o.png',
'/mobile/Shape6Y2TtUdJQJH.png',
'/mobile/Shape6XB57Asef1D.png',
'/mobile/Shape6X0aL78gBjr.png',
'/mobile/Shape6VcRch8m3n0.png',
'/mobile/Shape6To3k2zsEn1.png',
'/mobile/Shape6Swxn5hhLSa.png',
'/mobile/Shape6SrGsndX7Sp.png',
'/mobile/Shape6SKTyQST9pC.png',
'/mobile/Shape6S52Lca5sFn.png',
'/mobile/Shape6Q0SMatMEF1.png',
'/mobile/Shape6ookwji5Bp9.png',
'/mobile/Shape6OKOJKI6z8V.png',
'/mobile/Shape6oi4ulUY99Y.png',
'/mobile/Shape6nmBX4oizdC.png',
'/mobile/Shape6nhdHiZptm9.png',
'/mobile/Shape6MpGjcb9HDa.png',
'/mobile/Shape6MIxlRfsCXQ.png',
'/mobile/Shape6LcNDYIqNzX.png',
'/mobile/Shape6lb4vh6bQCY.png',
'/mobile/Shape6l3xOn7mL1f.png',
'/mobile/Shape6iy7nZUIaB9.png',
'/mobile/Shape6iPsbSc4vaE.png',
'/mobile/Shape6hCe4lMCUcm.png',
'/mobile/Shape6gjnsSam9mB.png',
'/mobile/Shape6fzKefYr1dL.png',
'/mobile/Shape6fNuhkxvfjj.png',
'/mobile/Shape6fKfqbHpkAk.png',
'/mobile/Shape6fcoJEzmt1B.png',
'/mobile/Shape6E0MvlYp2IF.png',
'/mobile/Shape6d83b1RhqAv.png',
'/mobile/Shape6CpHQ1V67az.png',
'/mobile/Shape6bFLSEXXyHP.png',
'/mobile/Shape6BCNQY5JaQs.png',
'/mobile/Shape6AfpXsppdl7.png',
'/mobile/Shape6AemTwpA8zA.png',
'/mobile/Shape69fZk1JE4ES.png',
'/mobile/Shape67XNmTZG3Eb.png',
'/mobile/Shape67LgLeFstHK.png',
'/mobile/Shape66iiBEw7VPg.png',
'/mobile/Shape66cC8Gtd5DI.png',
'/mobile/Shape65IWKEMOcR0.png',
'/mobile/Shape64pRY0O7RtP.png',
'/mobile/Shape5ZlvbMt8NnK.png',
'/mobile/Shape5z2DymShn4Y.png',
'/mobile/Shape5Y985Amsaek.png',
'/mobile/Shape5wx2r2C6v9G.png',
'/mobile/Shape5weYjpJ2THs.png',
'/mobile/Shape5WeHi3ccA2L.png',
'/mobile/Shape5VWF95T42BM.png',
'/mobile/Shape5vk26caLEMJ.png',
'/mobile/Shape5u9aQ6CBhLK.png',
'/mobile/Shape5qeXWPimYGH.png',
'/mobile/Shape5pZmyOkKkYg.png',
'/mobile/Shape5p99ueoRRIJ.png',
'/mobile/Shape5p4RBTgWw0E.png',
'/mobile/Shape5oreW16zika.png',
'/mobile/Shape5ofkBkH2Gic.png',
'/mobile/Shape5nMmUiROnZ5.png',
'/mobile/Shape5nArt56nl3B.png',
'/mobile/Shape5l6KzLIEOoa.png',
'/mobile/Shape5kuifs4RW4Y.png',
'/mobile/Shape5kdDKsvxi76.png',
'/mobile/Shape5k7g8cTt6G7.png',
'/mobile/Shape5jClYk4baY9.png',
'/mobile/Shape5enbhlv1eg5.png',
'/mobile/Shape5brRwiTUGLZ.png',
'/mobile/Shape5b6fMzY94h3.png',
'/mobile/Shape5avIAYe9dJ4.png',
'/mobile/poster_6qjglo0tc2W_video_5viYVAPReBF_22_48_1334x750.jpg',
'/mobile/6X6m0HMzwM6_80_P_178_160_1165_314_DX1436_DY1436_CX834_CY225.png',
'/mobile/6X6m0HMzwM6_80_P_178_160_1165_314_DX1436_DY1436_CX333_CY90.png',
'/mobile/6UDj7RPJJrj_80_DX318_DY318_CX215_CY238.png',
'/mobile/6Swr1aPUSiO_80_DX792_DY792_CX512_CY512.png',
'/mobile/6S5ebWo9d2L_80_DX248_DY248_CX79_CY186.png',
'/mobile/6rhNBGerUi8_80_DX588_DY588_CX441_CY441.png',
'/mobile/6QrKg0NGM4g_80_DX318_DY318_CX215_CY238.png',
'/mobile/6QiMQwehg61_80_DX162_DY162_CX121_CY121.png',
'/mobile/6QEhijc8OHk_80_DX48_DY48_CX24_CY24.png',
'/mobile/6q72gMBvAQV_80_DX1786_DY1786_CX1242_CY1125.png',
'/mobile/6PO5Id4mnjF_80_DX224_DY224_CX168_CY168.png',
'/mobile/6pAmudwhqqU_80_DX162_DY162_CX121_CY92.png',
'/mobile/6OagoP00Ae4_80_DX562_DY562_CX278_CY281.gif',
'/mobile/6N3fyItWCap_80_DX678_DY678_CX493_CY250.png',
'/mobile/6MGJm07V8S8_80_P_0_0_902_545_DX1156_DY1156_CX867_CY525.png',
'/mobile/6M9edfgsHa5_80_DX672_DY672_CX501_CY280.png',
'/mobile/6lTWsWDHJYl_80_P_0_0_535_659_DX1602_DY1602_CX535_CY659.png',
'/mobile/6Lj9V0xQYwK_80_P_219_223_946_525_DX792_DY792_CX405_CY225.png',
'/mobile/6Lj9V0xQYwK_80_P_219_223_946_525_DX792_DY792_CX162_CY90.png',
'/mobile/6lIbiHK04xe_80_DX318_DY318_CX215_CY238.png',
'/mobile/6KppwYSmu3A_80_DX250_DY250_CX187_CY187.png',
'/mobile/6KBMR76s7g5_80_DX218_DY218_CX163_CY143.png',
'/mobile/6JvFqkYUWwO_80_DX1140_DY1140_CX854_CY433.gif',
'/mobile/6JrqIzOASB2_80_DX1118_DY1118_CX838_CY567.gif',
'/mobile/6jgA17RTeiy_80_P_0_64_322_396_DX1602_DY1602_CX322_CY396.png',
'/mobile/6jFRMVzEHAb_80_DX162_DY162_CX121_CY121.png',
'/mobile/6J5aFPc29pR_80_P_147_0_530_550_DX1222_DY1222_CX530_CY550.gif',
'/mobile/6J1c8hcpM00_80_DX792_DY792_CX512_CY512.png',
'/mobile/6IvXYXoOetJ_80_DX672_DY672_CX493_CY250.png',
'/mobile/6iSxwbVNti2_80_DX86_DY86_CX64_CY64.png',
'/mobile/6imq1rIcjo9_80_P_182_0_1037_595_DX1802_DY1802_CX952_CY546.png',
'/mobile/6iI8YaYWDHW_80_DX52_DY52_CX10_CY35.png',
'/mobile/6I2VFDkal2L_80_DX318_DY318_CX215_CY238.png',
'/mobile/6hnly09BVcZ_80_DX650_DY650_CX487_CY224.png',
'/mobile/6hnly09BVcZ_80_DX650_DY650_CX195_CY90.png',
'/mobile/6h2iBuxG1Cq_80_DX318_DY318_CX215_CY238.png',
'/mobile/6GV2Eu42X0f_80_DX96_DY96_CX48_CY70.png',
'/mobile/6gRmbYmhzv4_80_DX1078_DY1078_CX805_CY145.png',
'/mobile/6gRmbYmhzv4_80_DX1078_DY1078_CX500_CY90.png',
'/mobile/6fZYXTABxSO_80_DX678_DY678_CX505_CY256.png',
'/mobile/6EtIwczKD7i_80_DX234_DY234_CX108_CY175.png',
'/mobile/6ekxPHetKkj_80_DX318_DY318_CX215_CY238.png',
'/mobile/6DxKDU3BN61_80_DX562_DY562_CX278_CY281.gif',
'/mobile/6c1v5erUfLo_80_DX1440_DY1440_CX662_CY801.png',
'/mobile/69lmchdm1KJ6MpR5EHvBdm{Width=616, Height=582}Light_80_DX1232_DY1232_CX616_CY582.jpg',
'/mobile/69ailDtGXMy_80_DX626_DY626_CX469_CY238.png',
'/mobile/66e9TDUw8Kq_80_DX162_DY162_CX121_CY121.png',
'/mobile/64W9fBWIgfX_80_DX162_DY162_CX121_CY121.png',
'/mobile/62UTHSgMKmD_80_DX162_DY162_CX121_CY121.png',
'/mobile/5YVQdbBRqga_80_DX162_DY162_CX121_CY121.png',
'/mobile/5yRFRpImUtv_80_P_74_50_367_403_DX716_DY716_CX367_CY404.png',
'/mobile/5vEuwFXVTKz_80_DX162_DY162_CX121_CY121.png',
'/mobile/5uXBLN0bzJX_80_DX634_DY634_CX475_CY241.png',
'/mobile/5qoprBe1tjD_80_DX1132_DY1132_CX849_CY474.gif',
'/mobile/5oZUWoGyB3H_80_DX162_DY162_CX121_CY121.png',
'/mobile/5ozMYaRRP6U_80_P_0_0_1489_414_DX1482_DY1482_CX808_CY225.png',
'/mobile/5ozMYaRRP6U_80_P_0_0_1489_414_DX1482_DY1482_CX324_CY90.png',
'/mobile/5jYsmXsAlUS_80_DX162_DY162_CX121_CY118.png',
'/mobile/5fSLziwc6UK_80_DX318_DY318_CX215_CY238.png',
'/mobile/5dUApCnO57P_80_DX162_DY162_CX121_CY121.png',
'/mobile/5caHNAUrtR4_80_DX318_DY318_CX215_CY238.png',
'/story_content/',
'/story_content/frame.xml',
'/story_content/thumbnail.jpg',
'/story_content/user.js',
'/story_content/video_5viYVAPReBF_22_48_1334x750',
'/story_content/notes/',
'/story_content/slides/',
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource '+e.request.url);
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

