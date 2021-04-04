import React from 'react'
import { render, screen } from '@testing-library/react'
import CounterDisplay from './index'

const TEST_TITLE = 'test title'
const TEST_COUNT = 58

describe('CounterDisplay', () => {
    const props = {
        title: TEST_TITLE,
        count: TEST_COUNT
    }

    it('should display title passed by props', () => {
        render(<CounterDisplay title={TEST_TITLE} {...props} />)

        expect(screen.getByText(TEST_TITLE)).toBeInTheDocument()
    })
    it('should display count passed by props', () => {
        render(<CounterDisplay count={TEST_COUNT} {...props} />)

        expect(screen.getByText(TEST_COUNT)).toBeInTheDocument()
    })
})