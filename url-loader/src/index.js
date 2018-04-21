import './style/index.css'

var music = require('./music/bg.mp3')
var audio = document.querySelector('audio')
audio.src = music // 插入
audio.play()

var box = require('./img/box.jpg') // 获取图片路径
document.querySelector('img').src = box // 插入
