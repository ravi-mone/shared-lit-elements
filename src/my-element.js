

class TopMenu extends HTMLElement {

  connectedCallback() { 
    const style = import('./style.css')
.then((res)=>{
console.log('RES: ', res);
});
    const menuContainer = document.createElement('div');
    
    const menuItem1 = document.createElement('div'); 

    menuItem1.innerHTML = `<h1 class="red">HomeDDDEDD</h1>`;

    menuContainer.appendChild(menuItem1);

    this.attachShadow({ mode: 'open' }).appendChild(menuContainer);
  }
}

customElements.define('top-menu', TopMenu);
