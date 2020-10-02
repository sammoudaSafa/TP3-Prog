import React from 'react';
import { Link } from 'react-router-dom';
interface Props { }
interface State { }
export class Nav extends React.Component<Props, State> {
    public render() {
        return <div className='header-main'>
            <div className='main-nav'>
                <ul>
                    <Link to='/'> <li>Accueil</li> </Link>
                    <Link to='/owner'> <li>Gérant</li> </Link>
                    <Link to='/product'> <li>Produit</li></Link>
                </ul>

            </div>
        </div>;
    }
}
