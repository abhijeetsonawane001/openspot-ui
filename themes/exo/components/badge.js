import { Component } from 'react'

class Badge extends Component {
    render(props) {
        const type = this.props.type
        const size = this.props.size
        const iconDirection = this.props.iconDirection
        let typeClass = "bg-gray-400 "
        let sizeClass = " px-3 py-1 "
        const bigSizeSVG = " w-6 "
        const smallSizeSVG = " w-5 "

        if(type === "primary") {
            typeClass = " bg-gray-400 "
        }
        else if (type === "success") {
            typeClass = " bg-green-500 "
        }
        else if (type === "danger") {
            typeClass = " bg-red-500 "
        }
        else if (type === "warning") {
            typeClass = " bg-yellow-500 "
        }
        else if (type === "pending") {
            typeClass = " bg-blue-500 "
        }

        if ( size === "small" ) {
            sizeClass = " px-2 py-1 text-sm"
        }
        return(
            <div className={'inline-flex items-center rounded-lg text-white font-medium ' + typeClass + sizeClass}>
                { iconDirection === "start" && 
                    <svg className={`mr-1 ${size === 'small' ? smallSizeSVG : bigSizeSVG}` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 
                }
                <span>{this.props.text}</span>
                { iconDirection === "end" && 
                    <svg className={`ml-1 ${size === 'small' ? smallSizeSVG : bigSizeSVG}` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 
                }
            </div>
        )
    }
}

export default Badge;