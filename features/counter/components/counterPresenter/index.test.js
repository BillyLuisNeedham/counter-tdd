import React from "react"
import { render, screen } from "@testing-library/react"
import { CounterPresenter, strings } from "./index.tsx"

describe("CounterPresenter", () => {
  it("should display the correct title ", () => {
    render(<CounterPresenter />)

    expect(screen.getByText(strings.title)).toBeInTheDocument()
  })
})
