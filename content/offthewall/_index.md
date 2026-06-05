+++
title = "Off The Wall"
sort_by = "weight"
+++

<a id="offthewall-logo-link" href="/offthewall/app/" title="Launch">
  <img src="/offthewall/app-store-icon.webp" alt="Off The Wall Logo">
</a>

<script>
  const offthewallIsIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (offthewallIsIOS) {
    document.getElementById("offthewall-logo-link").href =
      "https://apps.apple.com/app/off-the-wall/id6774084827";
  }
</script>

[Launch Web App](/offthewall/app/) | [Get iOS App](https://apps.apple.com/us/app/off-the-wall/id6774084827)

---

Off The Wall is an app for Kilter Board users who want to have fun with the wall between climbs. It connects to your Kilter training board over Bluetooth and lets you draw pictures, create animations, and play games using the Kilter Board as a giant screen.

- Draw pictures on the Kilter Board in real time. Import photos and display them on the board. Create animations. Save and load everything locally.

- Create reaction boards from GIFs to quickly send reactions to the board when a climbing buddy sends or fails.

- Play games live on the Kilter Board, such as the 70s classic "Pong" or the exhausting "Hold Rush". More games coming soon.

---


### Free and private

Off The Wall does not require an account, does not include ads, and does not collect personally identifiable information.
Anonymous usage analytics may be collected to help improve the app.

Supported boards:
- Kilter Board Homewall
- Kilter Board Original

More boards may follow in the future. Let me know if there are any you want added.

Requires Bluetooth Low Energy and a compatible Aurora/Kilter controller for
board control. The app can still be opened and used without a board.


---

## Limitations

This app has not been tested on all Kilter Board configurations and hardware. Use at your own risk.

Kilter Boards with older hardware may not refresh as fast as newer hardware, making games less fun and reaction animations slower.

The Safari browser does not support Web Bluetooth, so you will have to use the iOS App if you are on an iOS device.

---

## Related pages:

- [Support](/offthewall/support/)
- [Privacy](/offthewall/privacy/)
