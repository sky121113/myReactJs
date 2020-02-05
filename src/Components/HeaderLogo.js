// @flow
import React, { Component } from 'react';
type Props = {
    abc:string, 
}
class HeaderLogo extends Component<Props> {
    render() {
        var text = "尛馬工作室";
        var text1= "尛馬工作室132";
        var aaa = 
            <div>
                <h1 className='my-logo'>{text}</h1>
                <h2>{this.props.abc}</h2>
                <div>
                    <h1 className='my-logo'>{text1}</h1>
                    <h2>{this.props.abc}</h2>
                </div>
            </div>
            
    return (
            aaa
        ); 
    }
}

export default HeaderLogo