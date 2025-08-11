const hero = document.getElementById("hero");
const footer = document.getElementById("footer");
const footerTabs = footer.getElementsByTagName('li');
const color_schemes = [  "is-danger", "is-primary", "is-warning","is-success", "is-link", "is-info" ];
const fullHero = document.getElementsByClassName("hero")[0];
const WIPVideoControl = document.getElementById("WIPVideoControl");


function ChangeHeroColorScheme(color_scheme){
    for (let i = 0; i < color_schemes.length; i++) {
        if (color_schemes[i] === color_scheme) {
            fullHero.classList.add(color_scheme);
        } else {
            fullHero.classList.remove(color_schemes[i]);
        }
    }
}



function ShowMainTab(event) {
    var i, content_tabs, tablinks;
    content_tabs = document.getElementsByClassName("tab-contents");

    for (i = 0; i < content_tabs.length; i++) {
        content_tabs[i].classList.add("is-hidden");
        footerTabs[i].classList.remove("is-active");

  }
  hero.classList.remove("is-hidden");
  ChangeHeroColorScheme("is-info");
  footer.classList.remove("is-hidden");

}

function ShowTab(event, tabName){
    var content_tabs, i, tab_id;
    content_tabs = document.getElementsByClassName("tab-contents");
    for (i = 0; i < content_tabs.length; i++) {
        tab_id = content_tabs[i].id;
        content_tabs[i].classList.add("is-hidden");
        hero.classList.add("is-hidden");
        if (tab_id === tabName){
            content_tabs[i].classList.remove("is-hidden");
            footerTabs[i].classList.add("is-active");
            ChangeHeroColorScheme(color_schemes[i]);
        }
        else{
            content_tabs[i].classList.add("is-hidden");
            footerTabs[i].classList.remove("is-active");
        }
    }


}

function ShowVideo(event, VideoName){
    WIPVideoControl.src = VideoName
}

ShowMainTab();
