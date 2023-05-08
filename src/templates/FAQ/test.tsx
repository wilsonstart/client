import { render, screen } from '@testing-library/react'

import AboutUs from '.'

describe('<AboutUs />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutUs />)

    expect(screen.getByRole('heading', { name: /AboutUs/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
