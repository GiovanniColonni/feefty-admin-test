import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { DeleteButton,DeleteButtonConfirm } from '../src/app/ui/DeleteButton';
import { useRouter } from 'next/navigation';
import DeleteConfirm from '../src/app/ui/DeleteConfirm';

describe('DeleteButton', () => {
  test('renders with correct title', () => {
    const title = 'Delete';
    render(<DeleteButton title={title} onClick={() => { }} />);
    const buttonElement = screen.getByText('Delete');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(title);
  });

  test('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<DeleteButton title="Delete" onClick={onClickMock} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  describe('DeleteButtonConfirm', () => {
    test('renders with correct title', () => {
      const title = 'Click 3 times to confirm';
      render(<DeleteButtonConfirm title={title} onClick={() => { }} />);
      const buttonElement = screen.getByText(title);
      expect(buttonElement).toBeInTheDocument();
    });

    test('calls onClick function when clicked', () => {
      const onClickMock = jest.fn();
      render(<DeleteButtonConfirm title="Click 3 times to confirm" onClick={onClickMock} />);
      const buttonElement = screen.getByRole('button');
      fireEvent.click(buttonElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  /**Can't manage to mock the navigation :( */
  /*
  jest.mock('next/navigation');
  
  describe('DeleteConfirm', () => {
    it('renders delete button with correct title', () => {
      render(<DeleteConfirm onDelete={() => { }} />);
      const deleteButton = screen.getByText('Delete');
      expect(deleteButton).toBeInTheDocument();
    });

    test('opens delete confirmation on delete button click', () => {
      render(<DeleteConfirm onDelete={() => { }} />);
      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);
      const confirmButton = screen.getByText('Click 3 times to confirm');
      expect(confirmButton).toBeInTheDocument();
    });

    test('closes delete confirmation on close button click', () => {
      render(<DeleteConfirm onDelete={() => { }} />);
      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);
      const closeButton = screen.getByText('Close');
      fireEvent.click(closeButton);
      const confirmButton = screen.queryByText('Click 3 times to confirm');
      expect(confirmButton).not.toBeInTheDocument();
    });

    test('calls onDelete function when delete is confirmed', () => {
      const onDeleteMock = jest.fn();
      render(<DeleteConfirm onDelete={onDeleteMock} />);
      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);
      const confirmButton = screen.getByText('Click 3 times to confirm');
      fireEvent.click(confirmButton);
      expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });
  });
  */
});
