import React, { Component } from 'react';
import { translate } from "react-translate";

class Button extends Component{
	render(){
		let { t } = this.props;
		return (<button>{t(this.props.name)}</button>);
	}
}	

export default translate('buttons')(Button);