import { render } from '@testing-library/react';

import RecentGames from './recent-games';

describe('RecentGames', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecentGames />);
    expect(baseElement).toBeTruthy();
  });
});
