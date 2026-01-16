
function CustomReact(element,container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        domElement.setAttribute(prop,element.props[prop])
        }
        container.appendChild(domElement)
    
}

const element =  {
    type : "a",
    props:{
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click here to visit google.com (Best for surfing)"

}

const container = document.querySelector("#root")

CustomReact(element,container)