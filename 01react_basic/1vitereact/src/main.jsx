import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
    <h1>Welocmeeeeeeeeeeeeeeeee</h1>
    </div>
    )
}

//const reactElement = {  
//type: 'a',
//props: {
//    href: 'https://google.com',
//    target: '_blank'
//},
//children:'Click to visit google'
//}

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit gooogleee</a>
)

const anotherUser = "golu bolte golu"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click to visit',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
 
)
