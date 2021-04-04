import React from 'react'
import { render, screen } from '@testing-library/react'
import CounterDisplay from './index'

describe('CounterDisplay', () => {
    it('should display title passed by props', () => {
        const testTitle = 'test title'
        render(<CounterDisplay title={testTitle} />)

        expect(screen.getByText(testTitle)).toBeInTheDocument()
    })
})