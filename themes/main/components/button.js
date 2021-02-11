import { Component } from 'react'
import Link from 'next/link'

class Button extends Component {
    render(props) {
        return (
            <Link href={this.props.href}>
                <a className='flex justify-center items-center px-4 py-2 bg-primary font-medium text-white rounded-md shadow-md hover:bg-primaryDark'>{this.props.children}</a>
            </Link>
        )
    }
}

export default Button;