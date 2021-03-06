let tabs = document.getElementsByClassName('tabLink');

function removeTabActiveClass() {
    let activeTabs = document.getElementsByClassName('tabLink active');
    for (n = 0; n<activeTabs.length; n++) {
        let activeTab = activeTabs[n];
        activeTab.classList.remove('active');
    }
}

for (i=0; i<tabs.length; i++) {
    let tab = tabs[i];

    tab.addEventListener('click', function (event) {
        event.preventDefault();
        let tabAttr = tab.getAttribute('href').slice(1);
        let containerId = document.getElementById(tabAttr);
        let activeContainers = document.getElementsByClassName('active');

        if (event.target != tab) return;

        for (x = 0; x<activeContainers.length; x++) {
            if (activeContainers[x].getAttribute('class') == 'container active') {
                activeContainers[x].classList.remove('active');
            }
        }

        removeTabActiveClass();

        this.classList.add("active");
        containerId.classList.add('active');
    });
}

let arrow = document.getElementById('arrow');
let funnyList = document.getElementById('funnyList');
arrow.innerHTML = '>';

arrow.onclick = function() {
    if (funnyList.style.display == 'block') {
        arrow.innerHTML = '>';
        funnyList.style.display = 'none';
    } else {
        arrow.innerHTML = '<';
        funnyList.style.display = 'block';
    }
};


