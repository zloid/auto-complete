// import React from 'react'
import App from './App'

import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('render', () => {
        render(<App />)
        expect(screen.getByRole(/mainInput/i).value).toBe('')
        screen.debug()
    })
})
