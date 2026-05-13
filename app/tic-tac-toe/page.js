import { StrictMode } from 'react';
import App from './App';
import "./styles.css";

export default function Page() {
    return (
        <main className="page-container" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
            <StrictMode>
                <App />
            </StrictMode>
        </main>
    );
}
