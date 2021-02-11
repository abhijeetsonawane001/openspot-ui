import { Component } from 'react'

class Button extends Component {
    render(props) {
        const type = this.props.type
        const size = this.props.size
        const rounded = this.props.rounded
        const appearance = this.props.appearance

        let typeClass = "bg-primary hover:bg-primaryLight focus:bg-primaryDark"
        let sizeClass = "px-4 py-1.5 text-sm"
        let roundedClass = "rounded-lg"
        let appearanceClass = "ring-2 ring-primary"
        // Type
        if ( type === "success" ) {
            typeClass = "bg-green-500 hover:bg-green-400 focus:bg-green-600"
        }
        else if ( type === "danger" ) {
            typeClass = "bg-red-500 hover:bg-red-400 focus:bg-red-600"
        }
        else if ( type === "warning" ) {
            typeClass = "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600"
        }
        else if ( type === "pending" ) {
            typeClass = "bg-blue-500 hover:bg-blue-400 focus:bg-blue-600"
        }
        else if ( type === "disabled" ) {
            typeClass = "bg-gray-300 cursor-not-allowed"
        }
        // Size
        if (size === "big") {
            sizeClass = "px-6 py-3"
        }
        // Border
        if (rounded === "full") {
            roundedClass = "rounded-full"
        }
        return (
            <button className={`flex justify-center items-center focus:outline-none shadow-md text-white font-medium ${typeClass} ${sizeClass} ${roundedClass}`}>{this.props.children}</button>
        )
    }
}

export default Button;