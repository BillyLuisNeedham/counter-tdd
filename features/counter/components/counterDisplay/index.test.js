import React from 'react'
import { render, screen } from '@testing-library/react'
import CounterDisplay from './index'

describe('CounterDisplay', () => {
    it('should display title passed by props', () => {
        render(<CounterDisplay title="test title" />)
    });
})