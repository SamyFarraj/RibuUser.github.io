'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "d31bcaf041db66c63847cdd8987d0152",
"assets/AssetManifest.smcbin": "3736306008cfdda2ec3babb2b0961181",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/apple_icon.svg": "920f999fe00326a0d2630e4cdc05539c",
"assets/assets/icons/date.svg": "53c7f60d1ab760cce28f775ae9efbbc1",
"assets/assets/icons/date_icons.svg": "53c7f60d1ab760cce28f775ae9efbbc1",
"assets/assets/icons/dele.svg": "f7c13cbccc4a0a354b7a6543fa3b3984",
"assets/assets/icons/edit_icon.svg": "1672cc07f66ec42c9f4093e1902d742e",
"assets/assets/icons/facebook.svg": "abb6f7d1ca5784a070970e53762a3b79",
"assets/assets/icons/facebook_icon.svg": "2c4e071990b4122634eb3f3a6742e5b3",
"assets/assets/icons/filters-home.svg": "03d7f3c8ad5c9a36430c3c508c052794",
"assets/assets/icons/filters_icon.svg": "898c030284f1c75186c467c44146f4e2",
"assets/assets/icons/google.svg": "468addf26e8d115880dfeb4a8a00016d",
"assets/assets/icons/list.svg": "dc75e72cbb7eb92bd0707a6d9335226f",
"assets/assets/icons/logo_white.svg": "46479561d2d186846e9c2ecdb1de8447",
"assets/assets/icons/menu.svg": "b8041d107c83745efaf06025735f7da8",
"assets/assets/icons/miniGift.svg": "27cc49c068981fae2b801723d3c694fe",
"assets/assets/icons/mini_gift_colored.svg": "633d6479951519d5dbe7c314d8c5e8e5",
"assets/assets/icons/minus.svg": "9fcdc527d28c5c095d91fb44f5e40ee4",
"assets/assets/icons/nav_bar/categories.svg": "771be23a0847d05ea97b54918b3bbb5e",
"assets/assets/icons/nav_bar/d3.svg": "751aa4a1016097fc1938d51def7ad7b5",
"assets/assets/icons/nav_bar/favorite.svg": "11bce1d8e29a34121a3c8dcad9b4faea",
"assets/assets/icons/nav_bar/home.svg": "263b70a553c82c6d8e90489fe2c034f0",
"assets/assets/icons/nav_bar/profile.svg": "1e183d20bdf7e344423c0d8e8084efc3",
"assets/assets/icons/nav_bar/shopping_cart.svg": "22e834ac052f63038b190dee091c4580",
"assets/assets/icons/person.svg": "007ef795a2c8616350fb89b7200b15e2",
"assets/assets/icons/plus.svg": "9d633294e584b3996b3826d498de5388",
"assets/assets/icons/redeem_colored.svg": "4ebfb72bb4d76817021c7f953d2a2b7f",
"assets/assets/icons/redeem_gray.svg": "fcf876cd0dece59211db359232fcb153",
"assets/assets/icons/redeem_not_colored.svg": "64545472bf79f7d39d4dc3310d76b534",
"assets/assets/icons/rewards.svg": "8918d546cd563e8a7ba0f99c488bda82",
"assets/assets/icons/search_icon.svg": "2c77bd6d11bc4f1252a57bbaad1c49ce",
"assets/assets/icons/trash_icon.svg": "eee1cc9fb33cde8876a4700e0ee0c22b",
"assets/assets/images/food.jpg": "84f70f908e0859137e2ba750a9b3eecd",
"assets/assets/images/food.png": "d3146c58a14f14fcc10d62ede79bf64d",
"assets/assets/images/food2.png": "496553981c392e3c567f5d8eaa0adde0",
"assets/assets/images/food3.png": "abd3a02f776099f28d8a34b585a5a194",
"assets/assets/images/gift_wrap.png": "e2e9b1a1f444248ae59493a6194dd89f",
"assets/assets/images/img.png": "88313630d1ca61d4cc1c642c9e777a8c",
"assets/assets/images/img_1.png": "88313630d1ca61d4cc1c642c9e777a8c",
"assets/assets/images/KFC.png": "4e6b2470368ea0f546983e9d76c5805f",
"assets/assets/images/KFCWhite.jpg": "82f5c2e826c66bc817ced15ce2872287",
"assets/assets/images/no.png": "c4d0e18a09113cf4ed1d8d61e7e9b373",
"assets/assets/images/red_transparency.png": "19c427e91f247832a09efc71dcbc222c",
"assets/assets/images/ribu": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Ribu-2.png": "f42e583db41628a1d1271d197a2ba5f5",
"assets/assets/images/ribu_icon.png": "587c3638e7292324176e391c207134bc",
"assets/assets/temp_images/s": "6b1cce5e212ce53afb2ca1b03dd425ff",
"assets/assets/temp_images/temp_img.png": "238fc6ca85dd567b403c90607703e777",
"assets/FontManifest.json": "59bb993f9b70a7e6977218d7a70a8373",
"assets/fonts/MaterialIcons-Regular.otf": "7db21ac154c296926fcf64f52e517170",
"assets/lib/data/api/session/check_session_status_api.dart": "0783bf7de98aeb0b03752357e0db79d3",
"assets/lib/data/api/session/join_session_api.dart": "e28d111a02066a081f925def05418c9b",
"assets/lib/view/auth/forgot_password/forgot_password_screens/email_forget_passowrd_screen.dart": "723db39fe6cf1bbbada41dd7cf1e56f3",
"assets/lib/view/auth/forgot_password/forgot_password_screens/new_password_screen.dart": "1b51bd8fb3da9c2b0f34a6241a667b33",
"assets/lib/view/auth/forgot_password/forgot_password_screens/validation_code_screen.dart": "f4368921085b2432579add0b0640e85f",
"assets/NOTICES": "1108a4e6e1f2155fa3a4080f2c85fd20",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02eee99d449fd4da7b462ff5a2025737",
"/": "02eee99d449fd4da7b462ff5a2025737",
"main.dart.js": "92d7078fd0b2e1d4a9ec57aa4ea78ee4",
"manifest.json": "343cb8ff2aa997aec7db3b17fcbb2c35",
"version.json": "c49b41b4e11190b195dfe85cabd7325e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
