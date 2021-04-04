import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonBase from './index.tsx'

const TEST_LABEL = 'test label'

describe('ButtonBase', () => {
    const mockOnClick = jest.fn()
    const props = {
        label: TEST_LABEL
    }

    it('should render label passed by props', () => {
      render(<ButtonBase {...props} />)  

      expect(screen.getByText(TEST_LABEL)).toBeInTheDocument()
    })

    it('should fire onClick function passed by props when button is clicked', () => {
        render(<ButtonBase onClick={mockOnClick} {...props} />)

        
    })
})