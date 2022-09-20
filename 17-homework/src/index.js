import './styles/styles.scss'
import { getMaxDigit } from "../../04-homework/main.js"
import { pairBoyGirrl, students } from './HWs/05HW.js'
import { getRandomArray } from '../../07-homework/main'

import { createBtn } from "./Button/button.js"
import DurtVaider from "./assets/Darth_vader.jpg"


// functions from HWorks
console.log('getMaxDigit(1234587): ', getMaxDigit(1234587))
console.log('pairBoyGirrl', pairBoyGirrl(students))
console.log('getRandomArray', getRandomArray(15, 1, 100))

// some image and page content
const rootElement = document.getElementById("root");

const runBtn = createBtn({
    title: "Run something",
    onClick: () => {
        alert("Hello!");
    },
});

const innerDivBtn = document.createElement("div");
innerDivBtn.append(runBtn)

const innerDiv = document.createElement("div");
const innerImg = document.createElement("img");
innerImg.setAttribute("src", DurtVaider)
innerDiv.append(innerImg)


rootElement.append(innerDivBtn);
rootElement.append(innerDiv);
