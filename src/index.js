import img from './images/img.jpg'
// import  style from  './index.scss'
import './index.scss'
const m = new Image()
m.src = img
m.classList.add('img')
document.getElementById('root').append(m)

document.getElementById('root').innerHTML = "<div class='iconfont icon-zhizhen'>aaa</div>"

// const m1 = new Image()
// m1.src = img
// m1.classList.add('img')
// document.getElementById('root').append(m1)