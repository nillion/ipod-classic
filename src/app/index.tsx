import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { Body, Container, Controls, Screen } from '../lib/components/layout';
import { white } from '../lib/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={white}>
            <Container>
                <Body>
                    <Screen />
                    <Controls />
                </Body>
            </Container>
        </ThemeProvider>
    );
};

export default App;
