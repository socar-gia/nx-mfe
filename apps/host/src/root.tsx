import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { init } from '@module-federation/runtime';
import App from './app/app';
import './styles.css';
import Layout from './layout';

init({
    name: 'host',
    remotes: []
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <Layout>
            <App />
        </Layout>
    </StrictMode>
);
