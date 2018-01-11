import React, { Component } from 'react';
import { TranslatorProvider } from "react-translate";
import Button from './components/Button';
class App extends Component{


	_getLayout(lang){
		return (<TranslatorProvider translations={require('./assets/i18n/'+lang+'.json')}>
			<div>
				<Button name="login"/>
				<Button name="create_account"/>
			</div>
		</TranslatorProvider>)
	}

	render(){
		let url  = window.location.href;
		if(url.search('/en') !== -1){
			return this._getLayout('en')
		}else{
			return this._getLayout('es');
		}
	}
}

export default App;