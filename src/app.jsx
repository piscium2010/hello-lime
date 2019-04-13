import React from 'react'
import ReactDOM from 'react-dom'
import Ripple from '@piscium2010/lime/Ripple'
import '@piscium2010/lime/lime.css'
import './app.less'

class Button extends React.Component {
    render() {
        let { children, style: _style, ...rest } = this.props
        let style = { position: 'relative', ..._style }

        return (
            <button {...rest} style={style}>
                {children}
                <Ripple /> {/*parent be position:relative*/}
            </button>
        )
    }
}


class App extends React.Component {
    render() {
        const style = { marginRight: 'auto' }
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-start', maxWidth: 600 }}>
                <Button style={style} className='lime-button primary lime-raised'>Primary</Button>
                <Button style={style} className='lime-button primary'>Primary</Button>
                <Button style={style} className='lime-button'>Default</Button>
                <Button style={style} className='lime-button text'>Text</Button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))