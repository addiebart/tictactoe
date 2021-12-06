/*! darkmode.js for gh:addiebart/tictactoe | (c) Addie 2021*/
'use strict';
document.addEventListener('DOMContentLoaded', function () {
const themeBtn = document.getElementById('themeBtn');
let themeCookie = undefined;
try {themeCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('darkmode=')).split('=')[1];}
catch {console.log('no theme cookie');}
let themeSheet = document.createElement('style');
themeSheet.id='theme';
document.head.appendChild(themeSheet);

if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) && (themeCookie == undefined)) { /*browser dark, cookie none*/
    themeBtn.textContent = 'Go Light!';
}

const goLight = function() {
    for (let x = 0; themeSheet.sheet.cssRules.length > 0; x++) {
        themeSheet.sheet.deleteRule(0);
    }
    let style1 = 'body{background-color:#fff;color:#222;}';
    let style2 = '.line{background-color:#222;}';
    themeSheet.sheet.insertRule(style1,0);
    themeSheet.sheet.insertRule(style2,1);
    document.cookie = 'darkmode=0;max-age=31536000';
    themeBtn.textContent = 'Go Dark!';
}

const goDark = function() {
    console.log('dark')
    for (let x = 0; themeSheet.sheet.cssRules.length > 0; x++) {
        themeSheet.sheet.deleteRule(0);
    }
    let style1 = 'body{background-color:#222;color:#ddd;}';
    let style2 = '.line{background-color:#ddd;}';
    themeSheet.sheet.insertRule(style1,0);
    themeSheet.sheet.insertRule(style2,1);
    document.cookie = 'darkmode=1;max-age=31536000';
    themeBtn.textContent = 'Go Light!';
}

if (themeCookie == '0') { /*cookie light*/
    goLight();
}

if (themeCookie == '1') { /*cookie dark*/
    themeBtn.textContent = 'Go Light!';
    goDark();
}

const handler = (function() {
    if (themeBtn.textContent.includes('Dark')) {
        goDark();
    }

    else { if (themeBtn.textContent.includes('Light')) {
        goLight();
    }
    else {
        alert('Error! Please reload page.');
    }}
});
themeBtn.addEventListener('click',handler);

});