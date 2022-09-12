import React from "react"
export default function ButtonLink(props) {
    const styles = {
        backgroundColor: props.on ? "#93c5fd" : "transparent",
    }
    return (
        <button
            className="rounded-md"
            style={styles} 
            onClick={()=>{
                return props.toggle(props.id, props.component)
                }
            }
        ><img alt={props.id} className="p-4 rounded-md" src={require(`../Icons/${props.id}.png`)}/>
        </button>
    )
}