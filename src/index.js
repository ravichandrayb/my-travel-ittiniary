import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports

import Album from './components/Album';
import StickyFooter from './components/footer';

// style + assets

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
    
        <BrowserRouter>
            <Album />
            
        </BrowserRouter>,
    
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

