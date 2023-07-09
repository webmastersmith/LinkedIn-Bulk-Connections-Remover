(async function () {
  let connections = +document.querySelector('.mn-connections__header > h1').innerText.split(' ')[0];
  async function getContactsAndDelete() {
    // get all meatball menu nodes
    const meatballMenus =
      document.querySelectorAll('ul > li.mn-connection-card button.artdeco-dropdown__trigger') || [];
    // sleep function to allow page load
    function sleep(i) {
      return new Promise((resolve) => setTimeout(resolve, i));
    }

    // loop through and click
    for (const item of meatballMenus) {
      item.click();
      // click the remove connection button
      await sleep(500);
      document.querySelector('.artdeco-dropdown__content-inner button').click();
      // click the popup
      await sleep(500);
      document.querySelector('.artdeco-modal__actionbar > button:nth-child(2)').click();
      connections--;
    }
  }
  while (connections > 0) {
    await getContactsAndDelete();
  }
})();
