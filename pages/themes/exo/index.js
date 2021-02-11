import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Preview } from '../../../themes/main/index'

// Exo Theme Components
import { Alert, Badge, Button } from '../../../themes/exo/index'




export default class Exo extends React.Component {
    // Alerts
    AlertPreview() {
        return (
            <div className='flex flex-col space-y-6'>
                <Alert text='Lorem ipsum is placeholder text commonly used.' />
                <Alert text='Lorem ipsum is placeholder text commonly used.' type='success' />
                <Alert text='Lorem ipsum is placeholder text commonly used.' type='danger' />
                <Alert text='Lorem ipsum is placeholder text commonly used.' type='warning' />
                <Alert text='Lorem ipsum is placeholder text commonly used.' type='pending' />
            </div>
        )
    }
    AlertCode() {
        return `
    <!-- Alert type='default' -->
    <div class="flex justify-between items-center px-3 sm:px-4 py-2 rounded-lg shadow-md bg-gray-100">
        <div class="flex items-center space-x-2">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Lorem ipsum is placeholder text commonly used. </span>
        </div>
        <svg class="w-7 self-start cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg px-1 py-1 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    
    <!-- Alert type='success' -->
    <div class="flex justify-between items-center px-3 sm:px-4 py-2 rounded-lg shadow-md bg-green-500 text-white">
        <div class="flex items-center space-x-2">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Lorem ipsum is placeholder text commonly used. </span>
        </div>
        <svg class="w-7 self-start cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg px-1 py-1 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    
    <!-- Alert type='danger' -->
    <div class="flex justify-between items-center px-3 sm:px-4 py-2 rounded-lg shadow-md bg-red-500 text-white">
        <div class="flex items-center space-x-2">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Lorem ipsum is placeholder text commonly used. </span>
        </div>
        <svg class="w-7 self-start cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg px-1 py-1 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    
    <!-- Alert type='warning' -->
    <div class="flex justify-between items-center px-3 sm:px-4 py-2 rounded-lg shadow-md bg-yellow-500 text-white">
        <div class="flex items-center space-x-2">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Lorem ipsum is placeholder text commonly used. </span>
        </div>
        <svg class="w-7 self-start cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg px-1 py-1 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
    
    <!-- Alert type='pending' -->
    <div class="flex justify-between items-center px-3 sm:px-4 py-2 rounded-lg shadow-md bg-blue-500 text-white">
        <div class="flex items-center space-x-2">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Lorem ipsum is placeholder text commonly used. </span>
        </div>
        <svg class="w-7 self-start cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg px-1 py-1 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>`
    }
    BadgePreview() {
        return (
            <div className='flex flex-col space-y-6'>
                <div className='flex space-x-4'>
                    <Badge text='Primary' iconDirection='start' />
                    <Badge text='Success' type='success' iconDirection='start' />
                    <Badge text='Danger' type='danger' iconDirection='start' />
                    <Badge text='Warning' type='warning' iconDirection='start' />
                    <Badge text='Pending' type='pending' iconDirection='start' />
                </div>
                <div className='flex space-x-4'>
                    <Badge text='Primary' iconDirection='end' />
                    <Badge text='Success' type='success' iconDirection='end' />
                    <Badge text='Danger' type='danger' iconDirection='end' />
                    <Badge text='Warning' type='warning' iconDirection='end' />
                    <Badge text='Pending' type='pending' iconDirection='end' />
                </div>
                <div className='flex space-x-4'>
                    <Badge text='Primary' iconDirection='start' size='small' />
                    <Badge text='Success' type='success' iconDirection='start' size='small' />
                    <Badge text='Danger' type='danger' iconDirection='start' size='small' />
                    <Badge text='Warning' type='warning' iconDirection='start' size='small' />
                    <Badge text='Pending' type='pending' iconDirection='start' size='small' />
                </div>
                <div className='flex space-x-4'>
                    <Badge text='Primary' iconDirection='end' size='small' />
                    <Badge text='Success' type='success' iconDirection='end' size='small' />
                    <Badge text='Danger' type='danger' iconDirection='end' size='small' />
                    <Badge text='Warning' type='warning' iconDirection='end' size='small' />
                    <Badge text='Pending' type='pending' iconDirection='end' size='small' />
                </div>
            </div>

        )
    }
    BadgeCode() {
        return (`
        <!-- 1st Row -->
        <!-- Big badge Primary - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-gray-400 px-3 py-1">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Primary</span>
        </div>
        <!-- Big badge Success - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-green-500 px-3 py-1">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Success</span>
        </div>
        <!-- Big badge Danger - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-red-500 px-3 py-1">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Danger</span>
        </div>
        <!-- Big badge Warning - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-yellow-500 px-3 py-1">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Warning</span>
        </div>
        <!-- Big badge Pending - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-blue-500 px-3 py-1">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Pending</span>
        </div>
        <!-- 2nd Row -->
        <!-- Big badge Primary - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-gray-400 px-3 py-1">
            <span>Primary</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Big badge Success - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-green-500 px-3 py-1">
            <span>Success</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Big badge Danger - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-red-500 px-3 py-1">
            <span>Danger</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Big badge Warning - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-yellow-500 px-3 py-1">
            <span>Warning</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Big badge Pending - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-blue-500 px-3 py-1">
            <span>Pending</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- 3rd Row -->
        <!-- Big badge Primary - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-gray-400 px-2 py-1 text-sm">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Primary</span>
        </div>
        <!-- Big badge Success - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-green-500 px-2 py-1 text-sm">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Success</span>
        </div>
        <!-- Big badge Danger - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-red-500 px-2 py-1 text-sm">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Danger</span>
        </div>
        <!-- Big badge Warning - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-yellow-500 px-2 py-1 text-sm">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Warning</span>
        </div>
        <!-- Big badge Pending - Icon start -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-blue-500 px-2 py-1 text-sm">
            <svg class="mr-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg><span>Pending</span>
        </div>
        <!-- 4th Row -->
        <!-- Small badge Primary - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-gray-400 px-2 py-1 text-sm">
            <span>Primary</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Small badge Success - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-green-500 px-2 py-1 text-sm">
            <span>Success</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Small badge Danger - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-red-500 px-2 py-1 text-sm">
            <span>Danger</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Small badge Warning - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-yellow-500 px-2 py-1 text-sm">
            <span>Warning</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <!-- Small badge Pending - Icon end -->
        <div class="inline-flex items-center rounded-lg text-white font-medium bg-blue-500 px-2 py-1 text-sm">
            <span>Pending</span>
            <svg class="ml-1 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>`)
    }
    smallButtonPreview() {
        return (
            <div className='flex flex-col space-y-8'>
                <div className='flex space-x-4'>
                    <Button type='primary'>Primary</Button>
                    <Button type='success'>Success</Button>
                    <Button type='danger'>Danger</Button>
                    <Button type='warning'>Warning</Button>
                    <Button type='pending'>Pending</Button>
                    <Button type='disabled'>Disabled</Button>
                </div>
                <div className='flex space-x-4'>
                    <Button type='primary' rounded='full'>Primary</Button>
                    <Button type='success' rounded='full'>Success</Button>
                    <Button type='danger' rounded='full'>Danger</Button>
                    <Button type='warning' rounded='full'>Warning</Button>
                    <Button type='pending' rounded='full'>Pending</Button>
                    <Button type='disabled' rounded='full'>Disabled</Button>
                </div>
                <div className='flex space-x-4'>
                    <Button type='primary'><svg className='h-4 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>Previous</Button>
                    <Button type='primary'>Next<svg className='h-4 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg></Button>
                </div>
            </div>
        )
    }
    largeButtonPreview() {
        return (
            <div className='flex flex-col space-y-8'>
                <div className='flex space-x-4'>
                    <Button type='primary' size='big'>Primary</Button>
                    <Button type='success' size='big'>Success</Button>
                    <Button type='danger' size='big'>Danger</Button>
                    <Button type='warning' size='big'>Warning</Button>
                    <Button type='pending' size='big'>Pending</Button>
                    <Button type='disabled' size='big'>Disabled</Button>
                </div>
                <div className='flex space-x-4'>
                    <Button type='primary' size='big' rounded='full'>Primary</Button>
                    <Button type='success' size='big' rounded='full'>Success</Button>
                    <Button type='danger' size='big' rounded='full'>Danger</Button>
                    <Button type='warning' size='big' rounded='full'>Warning</Button>
                    <Button type='pending' size='big' rounded='full'>Pending</Button>
                    <Button type='disabled' size='big' rounded='full'>Disabled</Button>
                </div>
                <div className='flex space-x-4'>
                    <Button type='primary' size='big'><svg className='h-5 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>Previous</Button>
                    <Button type='primary' size='big'>Next<svg className='h-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg></Button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <main className='font-sans antialiased'>
                <Head>
                    <title>Exo - OpenSpot UI</title>
                </Head>
                <Menu></Menu>
                <section className='px-4 sm:px-48 py-12 sm:py-16 bg-gray-100'>
                    <h1 className='text-7xl font-bold'>Exo</h1>
                    <p className='text-gray-600 mt-3'>Design Credit: <a href='https://dribbble.com/AnthonyChoren/' target='_blank' className='font-semibold text-primary'>https://dribbble.com/AnthonyChoren/</a></p>
                </section>
                {/* Components */}
                <div className='py-12'>
                    {/* Start Alerts */}
                    <section className='px-4 sm:px-48 py-12 sm:py-8'>
                        <h2 className='text-4xl font-semibold'>Alerts</h2>
                        <div className='flex flex-col space-y-6 py-8'>
                            <Preview preview={this.AlertPreview()} previewSpacing={true} requiredJS={true} language="html" text={this.AlertCode()} />
                        </div>
                    </section>
                    {/* End Alerts */}
                    {/* Start Badges */}
                    <section className='px-4 sm:px-48 py-12 sm:py-8'>
                        <h2 className='text-4xl font-semibold'>Badges</h2>
                        <div className='flex flex-col space-y-6 py-8'>
                            <Preview preview={this.BadgePreview()} previewSpacing={true} requiredJS={false} language="html" text={this.BadgeCode()} />
                        </div>
                    </section>
                    {/* End Badges */}
                    {/* Start Buttons */}
                    <section className='px-4 sm:px-48 py-12 sm:py-8'>
                        <h2 className='text-4xl font-semibold'>Buttons</h2>
                        <div className='flex flex-col space-y-6 py-8'>
                            <h3 className='text-xl font-medium'>Small Buttons</h3>
                            <Preview preview={this.smallButtonPreview()} previewSpacing={true} requiredJS={false} language="html" text={this.BadgeCode()} />
                            <h3 className='text-xl font-medium'>Large Buttons</h3>
                            <Preview preview={this.largeButtonPreview()} previewSpacing={true} requiredJS={false} language="html" text={this.BadgeCode()} />
                        </div>
                    </section>
                    {/* End Buttons */}
                </div>
            </main>
        )
    }
}
