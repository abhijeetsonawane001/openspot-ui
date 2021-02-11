import { Component } from 'react'
import Link from 'next/link'

class Card extends Component {
    render(props) {
        return(
            <Link href={this.props.href}>
            <div className='p-5 bg-gray-100 rounded-xl cursor-pointer'>
                <img src={this.props.img} className='w-full rounded-xl'></img>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-xl font-semibold'>{this.props.title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </Link>
        )
    }
}

export default Card;