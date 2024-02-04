import '@testing-library/jest-dom'
import { GoodToast } from "../src/app/ui/Toast";
import { render, screen, fireEvent } from '@testing-library/react'


describe("home", () => {
  it('should not render when show is false', () => {
    render(<GoodToast show={false} message="Test message" onClose={() => { }} />);
    expect(screen.queryByText('Test message')).not.toBeInTheDocument();
  });
  it('should render correctly when show is true', () => {
    render(<GoodToast show={true} message="Test message" onClose={() => { }} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });
  // TODO test onClose
})