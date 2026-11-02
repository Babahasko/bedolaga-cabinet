// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

<<<<<<< HEAD
/** Вкладки как в оригинале bsbord.com: хосты панели, IP / домен, скан CIDR, VPN-тест — и история проверок. */
=======
/** Вкладки как в оригинале bsbord.com: хосты панели, IP / домен, скан CIDR, VPN-тест, GEO — и история проверок. */
>>>>>>> upstream/main

vi.mock('react-i18next', async () => (await import('./testUtils')).i18nMock());

import { ModeSwitch } from './ModeSwitch';

afterEach(cleanup);

describe('ModeSwitch', () => {
<<<<<<< HEAD
  it('пять вкладок, активная отмечена, клик отдаёт вкладку наверх', () => {
=======
  it('шесть вкладок, активная отмечена, клик отдаёт вкладку наверх', () => {
>>>>>>> upstream/main
    const onChange = vi.fn();
    render(<ModeSwitch value="hosts" onChange={onChange} />);
    expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
      'Хосты',
      'IP / домен',
      'Скан CIDR',
      'VPN-тест',
<<<<<<< HEAD
=======
      'GEO',
>>>>>>> upstream/main
      'История',
    ]);
    expect(screen.getByRole('tab', { name: 'Хосты' }).getAttribute('aria-selected')).toBe('true');
    fireEvent.click(screen.getByRole('tab', { name: 'Скан CIDR' }));
    expect(onChange).toHaveBeenCalledWith('cidr');
    fireEvent.click(screen.getByRole('tab', { name: 'История' }));
    expect(onChange).toHaveBeenCalledWith('history');
  });
});
