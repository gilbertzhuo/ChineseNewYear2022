let chinese_phrase = [
    ["新", "年", "快", "樂"],
    ["恭", "喜", "發", "財"],
    ["大", "吉", "大", "利"],
    ["萬", "事", "如", "意"],
    ["年", "年", "有", "餘"],
    ["身", "體", "健", "康"],
    ["心", "想", "事", "成"],
    ["恭", "賀", "新", "禧"],
]

let pin_yin = [
    ["xīn", "nián", "kuài", "lè"],
    ["gōng", "xǐ", "fā", "cái"],
    ["dà", "jí", "dà", "lì"],
    ["wàn", "shì", "rú", "yì"],
    ["nián", "nián", "yǒu", "yú"],
    ["shēn", "tǐ", "jiàn", "kāng"],
    ["xīn", "xiǎng", "shì", "chéng"],
    ["gōng", "hè", "xīn", "xǐ"],
]

let english_phrase = [
    "(Happy new year)",
    "(Congratulations on your prosperity)",
    "(Great luck and prosperity)",
    "(May 10,000 things go according to your wishes)",
    "(Every year have more than you need)",
    "(Wishing you good health)",
    "(May all your heart's desires come true)",
    "(Congratulations in the new year)"
]
var p_1 = document.getElementById("p_1");
var p_2 = document.getElementById("p_2");
var p_3 = document.getElementById("p_3");
var p_4 = document.getElementById("p_4");

var c_1 = document.getElementById("c_1");
var c_2 = document.getElementById("c_2");
var c_3 = document.getElementById("c_3");
var c_4 = document.getElementById("c_4");

var english = document.getElementById("english");
var onClick = function() {
    let num = Math.floor(Math.random() * english_phrase.length);
    p_1.textContent = pin_yin[num][0];
    p_2.textContent = pin_yin[num][1];
    p_3.textContent = pin_yin[num][2];
    p_4.textContent = pin_yin[num][3];

    c_1.textContent = chinese_phrase[num][0];
    c_2.textContent = chinese_phrase[num][1];
    c_3.textContent = chinese_phrase[num][2];
    c_4.textContent = chinese_phrase[num][3];
    english.textContent = english_phrase[num];

}

button.addEventListener("click", onClick);