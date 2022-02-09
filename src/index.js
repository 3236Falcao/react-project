import { render } from "react-dom";
import { App } from "./App"

// function teste() {
//     return <h1>Ola mundo</h1>
// }

//o render recebe como primeiro parâmetro quem será renderizado e no segundo parâmetro onde ele será rendereizado
render(<App/>, document.getElementById('root'))