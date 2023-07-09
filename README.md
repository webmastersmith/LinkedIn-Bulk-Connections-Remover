# LinkedIn-Bulk-Connections-Remover
1. Copy and past this in your browser console and press enter. 
2. May have to run more than once, depending on internet speed. If crashes to often, increase the sleep times. 
3. To stop program or if program hangs, refresh page.

```js
(async function () {
  // get total connections
  let connections = +document.querySelector('.mn-connections__header > h1').innerText.split(' ')[0];
  async function getContactsAndDelete() {
    // get all connection meatball menu button nodes
    const meatballMenus =
      document.querySelectorAll('ul > li.mn-connection-card button.artdeco-dropdown__trigger') || [];
    // sleep function to allow page load
    function sleep(i) {
      return new Promise((resolve) => setTimeout(resolve, i));
    }

    // loop through and click
    for (const connection of meatballMenus) {
      connection.click();
      // click the remove connection button
      await sleep(500);
      document.querySelector('.artdeco-dropdown__content-inner button').click();
      // click the popup
      await sleep(500);
      document.querySelector('.artdeco-modal__actionbar > button:nth-child(2)').click();
      connections--;
    }
  }
  // Because LinkedIn only loads around 40 connection, loop till connection are empty.
  while (connections > 0) {
    await getContactsAndDelete();
  }
})();
```
