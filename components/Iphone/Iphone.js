
export const jsPhone = (nodeChild) => {
    const d = document

    const sideButo = d.createElement("div")
    sideButo.classList.add("side-buttons")
    sideButo.innerHTML = "<div></div>"

    const top = d.createElement("div")
    top.classList.add("top")
    top.innerHTML = `<div>
            <span class="camera"></span>
            <span class="speaker"></span>
        </div>`;

    const screen = d.createElement("div")
    screen.classList.add("screen")
    screen.appendChild(nodeChild)

    const bottom = d.createElement("div")
    bottom.classList.add("bottom")
    bottom.innerHTML = `<div></div>`;

    const phoneC = d.createElement("div")
    phoneC.classList.add("phone")
    phoneC.appendChild(top)
    phoneC.appendChild(screen)
    phoneC.appendChild(bottom)

    const padre = d.createElement("figure")
    padre.classList.add("iphone")
    padre.appendChild(sideButo)
    padre.appendChild(phoneC)

    return padre
}

export default ({ children }) => (
    <figure class="iphone">
        <div class="side-buttons">
            <div></div>
        </div>
        <div class="phone">
            <div class="top">
                <div>
                    <span class="camera"></span>
                    <span class="speaker"></span>
                </div>
            </div>

            <div class="screen">
                {
                    children
                }
            </div>

            <div class="bottom">
                <div></div>
            </div>
        </div>
    </figure>
)