import { UserContext } from "./context/UserContext"
import { useContext } from "react"

function Context2() {
    const value = useContext(UserContext)
    return (
        <div>
            <h1>Hi im {value.name} from context2</h1>
            <h1>im {value.age} years old</h1>
        </div>
    )
}

export default Context2