import { screen, render } from '@testing-library/react';
import { lazyImport } from './lazyImport';

const MockComponent = () => {
    return <div>MockComponent</div>;
};

describe('lazyImport', () => {
    test('コンポーネントがレンダリングされているか', async () => {
        const { LazyMockComponent } = lazyImport(
            async () => ({ LazyMockComponent: MockComponent }),
            'LazyMockComponent'
        );
        render(<LazyMockComponent />);
        await screen.findByText('MockComponent');
    });
});
