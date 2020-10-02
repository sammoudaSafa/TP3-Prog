// // import { BookEditor } from 'component/bookeditor';
// // import { Company } from 'component/company';
// import { Home } from 'component/home';
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<Home />, document.getElementById('coreContainer'));
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './component/home';
import { Owner } from './component/owner';
import { Product } from './component/product';



ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/owner' component={Owner} />
            <Route path='/product' component={Product} />
        </Switch>
    </Router>
    , document.getElementById('coreContainer'));
