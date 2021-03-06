// ==UserScript==
// @name         TwitterのDraft画面に出る文字をsudoの注意書きに変更するやつ
// @namespace    https://github.com/yuuki76
// @updateURL    https://github.com/yuuki76/Twittersudo/blob/master/Twittersudo.js
// @version      1.0.0
// @description  名前のまんま
// @author       Kris57 aka yuuki76
// @match        https://twitter.com/*
// @grant        none
// @licence      CC-BY-SA-4.0; https://creativecommons.org/licenses/by-sa/4.0/
// ==/UserScript==
(
    window.onload = function() {
        document.getElementsByClassName('public-DraftEditorPlaceholder-inner')[0].innerHTML = "#1) Respect the privacy of others.\n#2) Think before you type.\n#3) With great power comes great responsibility.\n"
    }
)();