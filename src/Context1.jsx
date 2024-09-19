import Context2 from "./Context2"
import { UserContext } from "./context/UserContext"
import { useContext } from "react"

function Context1() {
    return (
        <div>
            <h1>Hi im ... from context1</h1>

            <Context2/>
        </div>
    )
}

export default Context1