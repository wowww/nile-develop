import { fireEvent, render } from '@test';

import { Button } from './index';

describe('Button component testing with testing-library', () => {
  it('renders without crashing', () => {
    const component = render(<Button size="lg" onClick={() => undefined} />);

    expect(component).toBeTruthy();
  });

  it('button is clickable', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Button size="lg" onClick={mockFn} />);

    const btn = getByTestId('btn');
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
