import { Component } from 'react'

class Alert extends Component {
    render(props) {
        const type = this.props.type;
        let typeClass = "bg-gray-100";
        if (type === "default") {
            typeClass = 'bg-gray-100'
        }
        else if (type === "success") {
            typeClass = 'bg-green-500 text-white';
        }
        else if (type === "danger") {
            typeClass = 'bg-red-500 text-white'
        }
        else if (type === "warning") {
            typeClass = 'bg-yellow-500 text-white'
        }
        else if (type === "pending") {
            typeClass = 'bg-blue-500 text-white'
        }
        return (
            <div className={'flex justify-between items-center px-3 sm:px-4 py-2 rounded-lg shadow-md ' + typeClass}>
                <div className='flex items-center space-x-2'>
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span>{this.props.text}</span>
                </div>
                <svg className='w-7 self-start cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg px-1 py-1 fill-current text-black' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        )
    }
}

export default Alert;