import "./button.scss";

export const createBtn = ({title, onClick, className}) => {
    const btn = document.createElement("button")

    btn.classList.add(className? className:"primary");
    btn.textContent = title;
    btn.onclick = onClick;

    return btn;
};
