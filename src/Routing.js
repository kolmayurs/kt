import {Paths} from './Paths';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

const appRoute =Paths.map((items) => {
	if(items.exact){
		return (<Route path={items.path} exact component={items.component} />)
	}
	else{
		return (<Route path={items.path} component={items.component} />)
	}
})
const Routing = () =>(<Router>
						<Switch>
							{appRoute}	
							<Route render={() => <h1>404: page not found</h1>} />
						</Switch>
						</Router>)

export default Routing;