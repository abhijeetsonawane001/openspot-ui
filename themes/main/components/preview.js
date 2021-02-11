import { Component } from 'react'
import { CopyBlock as CopyBlock, atomOneDark } from 'react-code-blocks'

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'preview'
        }
    }
    handleTab(currentTab) {
        this.setState({
            tab: currentTab
        })
    }

    render() {
        let activeClass = 'text-white bg-primary rounded-lg'
        return (
            <div className='border border-gray-200 rounded-lg shadow-md'>
                <div className='flex justify-start items-center space-x-3 border-b border-gray-200 py-2 px-4 bg-gray-50 text-gray-800'>
                    {/* Options */}
                    <button onClick={() => this.handleTab('preview')} className={`focus:outline-none px-3 py-2 text-sm font-medium ${this.state.tab === 'preview' ? activeClass : ''}`}>Preview</button>
                    <button onClick={() => this.handleTab('code')} className={`focus:outline-none px-3 py-2 text-sm font-medium ${this.state.tab === 'code' ? activeClass : ''}`}>Code</button>
                    { this.props.requiredJS && <span className='text-sm font-medium bg-red-100 px-3 py-1 rounded-lg text-red-700'>Requires JS</span>}
                </div>
                <div>
                    {/* Show Preview */}
                    {
                        this.state.tab === 'preview' &&
                        <div className={`overflow-scroll ${this.props.previewSpacing ? 'p-6': ''}`}>
                            {this.props.preview}
                        </div>
                    }

                    {/* Show Code */}
                    {
                        this.state.tab === 'code' &&
                        <div className='font-mono'>
                            <CopyBlock
                                language={this.props.language}
                                text={this.props.text}
                                codeBlock
                                theme={atomOneDark}
                                showLineNumbers={this.props.showLineNumbers ? true : false}
                            />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Preview;