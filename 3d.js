import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {RoughnessMipmapper} from 'three/examples/jsm/utils/RoughnessMipmapper';

let mouseX = 0, mouseY = 0;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(windowWidth, windowHeight);
document.body.appendChild(renderer.domElement);

let MD5 = function (d) {
    var r = M(V(Y(X(d), 8 * d.length)));
    return r.toLowerCase()
};

function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f
}

function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _
}

function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _
}

function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
        var h = m, t = f, g = r, e = i;
        f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
    }
    return Array(m, f, r, i)
}

function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
}

function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
}

function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
}

function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
}

function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
}

function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
}

function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
}

function get_answer(request) {
    let best_answers = [];
    for (let i = 0; i < qa.length; i++) {
        let answer_fidelity = intersection(request, qa[i].q);
        if (answer_fidelity > 1.25) {
            best_answers.push({q: qa[i].a, f: answer_fidelity});
            // return CryptoJS.MD5(qa[i].a);
            // break;
        }
    }
    best_answers.sort((a, b) => b.f - a.f);
    console.log(best_answers);
    if (best_answers.length > 0) {
        return CryptoJS.MD5(best_answers[0].q);
    }
    else {
        return "repeat"
    }
}

function replaceWords(sentence, dictionary) {
    const words = sentence.split(" ");
    const replacedWords = words.map((word) => {
        if (dictionary.hasOwnProperty(word)) {
            return dictionary[word];
        }
        return word;
    });
    return replacedWords.join(" ");
}

function removeStopwords(text) {
    const stopwords = new Set(rustopwords);
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => !stopwords.has(word.toLowerCase()));
    const result = filteredWords.join(' ');
    return result;
}

function intersection(s1, s2) {
    s1 = replaceWords(s1, substitution);
    s1 = removeStopwords(s1);
    s2 = removeStopwords(s2);
    let a = new Set(s1.toLowerCase().split(' '));
    let b = new Set(s2.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").split(' '))
    let intersectA = new Set([...a].filter(i => b.has(i)));
    let intersectB = new Set([...b].filter(i => a.has(i)));
    return intersectA.size / a.size + intersectB.size / b.size;
}

function levenshteinDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            );
        }
    }

    return dp[m][n];
}

function substituteWords(sentence, dictionary) {
    const words = sentence.split(" ");
    const modifiedWords = [];

    // for (let i = 0; i < words.length; i++) {
    //     words[i] = transliterate(words[i]);
    // }

    for (let word of words) {
        let minDistance = 5;
        let substitute = word;

        for (let dictWord of dictionary) {
            const distance = levenshteinDistance(word, dictWord);
            if (distance < minDistance) {
                minDistance = distance;
                substitute = dictWord;
            }
        }

        modifiedWords.push(substitute);
    }

    const modifiedSentence = modifiedWords.join(" ");
    return modifiedSentence;
}

// const dictionary = [
//     "кэш тую",
//     "пэй24",
//     "оной",
//     "квикпэй",
//     "куикпэй",
//     "мегапэй",
//     "мегапей",
//     "эльсом",
//     "элсом",
//     "кейджи",
//     "комиссии",
//     "003"
// ];

const sentences = [
    "Что такое кештою?",
    "Что такое кештую?",
    "pay24 расскажи про это",
    "элсон",
    "мегапей"
];

let dictionary = new Set();
dictionary = buildDictionary(qa, rustopwords);

function buildDictionary(qaArray, stopwords) {
    const dictionary = new Set();

    // Function to remove punctuation from a word
    function removePunctuation(word) {
        var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
        var spaceRE = /\s+/g;
        return word.replace(punctRE, '').replace(spaceRE, " ");
    }

    function isStopword(word) {
        return stopwords.includes(word.toLowerCase());
    }

    for (let i = 0; i < qaArray.length; i++) {
        const {q} = qaArray[i];

        const words = [...q.split(' ')];
        for (let j = 0; j < words.length; j++) {
            let word = removePunctuation(words[j].toLowerCase());
            if (word === '') {
                continue;
            }
            dictionary.add(word);
        }
    }

    return dictionary;
}

function transliterate(word) {
    const substitutions = {
        ck: "к",
        ay: "эй",
        a: 'а',
        b: 'б',
        c: 'к',
        d: 'д',
        e: 'э',
        f: 'ф',
        g: 'г',
        h: 'х',
        i: 'и',
        j: 'дж',
        k: 'к',
        l: 'л',
        m: 'м',
        n: 'н',
        o: 'о',
        p: 'п',
        q: 'к',
        r: 'р',
        s: 'с',
        t: 'т',
        u: 'у',
        v: 'в',
        w: 'в',
        x: 'кс',
        y: 'й',
        z: 'з',
        ch: 'ч',
        sh: 'ш',
        sch: 'щ',
        ya: 'я',
        ye: 'е',
        yo: 'ё',
        yu: 'ю',
        zh: 'ж',
    };

    for (let [key, value] of Object.entries(substitutions)) {
        word = word.replace(new RegExp(key, 'g'), value);
    }

    return word;
}

let mixer;
const clock = new THREE.Clock();
const roughnessMipmapper = new RoughnessMipmapper(renderer);

const camera = new THREE.PerspectiveCamera(70, windowWidth / windowHeight, 1, 10000);
camera.position.z = 5;

const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
scene.add(ambientLight);

const loader = new GLTFLoader();
loader.load('./public/model.glb', function (gltf) {
    const model = gltf.scene;

    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
            roughnessMipmapper.generateMipmaps(child.material);
        }
    });

    mixer = new THREE.AnimationMixer(model);
    initAnimations(gltf);
    console.log(actions);

    // actions["Speaking"].setEffectiveWeight(1);
    // prepareCrossFade(actions["Greeting"], actions["Speaking"]);
    setTimeout(() => {
        prepareCrossFade(actions["Idle"], actions["greeting"])
        setTimeout(() => {
            prepareCrossFade(actions["greeting"], actions["Idle"])
        }, 4000)
    }, 5000)

    setInterval(() => {
        actions["Blinking"].weight = 1;
        setTimeout(() => {
            actions["Blinking"].weight = 0;
        }, 5000)
    }, 5000)

    // setInterval(() => {
    //     prepareCrossFade(actions["Speaking"], actions["Greeting"])
    //     setTimeout(() => {
    //         prepareCrossFade(actions["Greeting"], actions["Speaking"])
    //     }, 5000);
    // }, 10000)

    gltf.scene.traverse(function (child) {
        if (child.isMesh === true) {
            if (child.material.name == 'Glass') {
                child.material.transparent = true;
                child.material.opacity = 0.3;
            }
        }
    });

    model.position.set(0, -2.5, 0);
    model.scale.set(4.9, 4.9, 4.9);
    model.rotation.set(0.2, 0, 0);
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

document.addEventListener('mousemove', onDocumentMouseMove);

function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowWidth / 2;
    mouseY = event.clientY - windowHeight / 2;
}

const actions = {};

function initAnimations(gltf) {
    gltf.animations.forEach(animation => {
        const action = mixer.clipAction(animation);
        actions[animation.name] = action;
        if (animation.name == "Idle") {
            action.setEffectiveWeight(0.2);
            action.setEffectiveTimeScale(1);
            action.play();
        } else {
            action.setEffectiveWeight(0);
        }
        action.setEffectiveTimeScale(1);
        action.play();
    });
}

function prepareCrossFade(startAction, endAction) {
    const duration = 1;

    if (startAction === actions["Idle"]) {
        executeCrossFade(startAction, endAction, duration);
    } else {
        synchronizeCrossFade(startAction, endAction, duration);
    }
}

function synchronizeCrossFade(startAction, endAction, duration) {
    mixer.addEventListener('loop', onLoopFinished);

    function onLoopFinished(event) {
        if (event.action === startAction) {
            mixer.removeEventListener('loop', onLoopFinished);
            executeCrossFade(startAction, endAction, duration);
        }
    }
}

function executeCrossFade(startAction, endAction, duration) {
    setWeight(endAction, 1);
    endAction.time = 0;
    startAction.crossFadeTo(endAction, duration, true);
}

function setWeight(action, weight) {
    action.enabled = true;
    action.setEffectiveWeight(weight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    // controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.sayHello = function() {
    const audio = new Audio("./public/voice/hello.wav");
    audio.play().then();
    speaking = true;
    actions["Mouth loop"].setEffectiveWeight(1);
    audio.onended = function () {
        actions["Mouth loop"].setEffectiveWeight(0);
        speaking = false;
        recognition.start();
    };
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const microphoneIcon = document.getElementById("mic");
const animationOutline = document.getElementsByClassName("outline");
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
const running = '0';
let speaking = false;

const grammar = "#JSGF V1.0; grammar cash2u; public <cash2u> = кэш тую | пэй24 | оной | квикпэй | куикпэй | мегапэй | мегапей | эльсом | элсом | кейджи ;";
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-EN';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

microphoneIcon.onclick = function () {
    if (!speaking) {
        recognition.start();
    }
};

recognition.onaudiostart = function () {
    // microphoneWrapper.style.visibility = 'hidden';
    // audioRecordAnimation.style.visibility = 'visible';
    animationOutline[0].style.animationIterationCount = 'infinite';
};

console.log(dictionary);

recognition.onresult = function (event) {
    const last = event.results.length - 1;
    console.log(event.results[last][0].transcript);
    let text = event.results[last][0].transcript;
    document.getElementById("caption").innerHTML = text;
    text = removeStopwords(text.toLowerCase());
    console.log(substituteWords(text, dictionary));
    let audio_answer_id = get_answer(text);
    if (audio_answer_id === undefined) audio_answer_id = get_answer(substituteWords(text, dictionary));
    console.log(audio_answer_id);
    if (audio_answer_id !== undefined) {
        const audio = new Audio("./public/voice/" + audio_answer_id + ".wav");
        audio.play().then();
        audio.playbackRate = 1.0;
        speaking = true;
        actions["Mouth loop"].setEffectiveWeight(1);
        audio.onended = function () {
            actions["Mouth loop"].setEffectiveWeight(0);
            speaking = false;
            recognition.start();
        };
    } else {
        // console.log(recognition);
        setTimeout(() => {
            recognition.start()
        }, 1000);
    }

};



recognition.onspeechend = function () {
    recognition.stop();
    console.log('stop')
    animationOutline[0].style.animationIterationCount = '0';
    // microphoneWrapper.style.visibility = 'visible';
    // audioRecordAnimation.style.visibility = 'hidden';
};

recognition.onend = () => {
    recognition.stop();
    animationOutline[0].style.animationIterationCount = '0';
};
