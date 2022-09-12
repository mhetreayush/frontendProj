import React from "react"
import { Link } from "react-router-dom"
export default function ButtonLink(props) {
    const styles = {
        backgroundColor: props.on ? "#93c5fd" : "#D1D5DB",
    }
    return (
        <button
            className="rounded-md"
            style={styles} 
            onClick={()=>{
                return props.toggle(props.id, props.component)
                }
            }
        ><img className="p-4 rounded-md" src={require(`../Icons/${props.id}.png`)}/>
        </button>
    )
}