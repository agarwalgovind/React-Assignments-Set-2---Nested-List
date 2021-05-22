import React, {useState} from "react";
import Towns from "./Towns";

const Cities = ({name, towns}) => {
    const [flag, setflag] = useState(false)
    return (
        <div>
            <div>
                <button onClick={() => setflag(!flag)}>{name}</button>
            </div>
            <div>
                {flag && <div>
                    {towns.map((town, id) => (
                        <div key={id}>
                            <ul>
                                <li><Towns name={town.name}/></li>
                            </ul>
                        </div>
                    ))
                    }
                </div>
                }
            </div>
        </div>
    )

}

export default Cities;