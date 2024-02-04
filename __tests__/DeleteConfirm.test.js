import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteConfirm from '../src/app/ui/DeleteConfirm'; // Adjust the import path accordingly

jest.mock('next/navigation', () => require('next-router-mock'));

describe('DeleteConfirm', () => {
  it('should render the delete button initially', () => {
    render(
        <DeleteConfirm onDelete={() => {}} />
    );
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
  
  it('should open confirmation dialog when delete button is clicked', () => {
    render(<DeleteConfirm onDelete={() => {}} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });

  it('should call onDelete when confirmation is accepted', () => {
    const handleDelete = jest.fn();
    render(<DeleteConfirm onDelete={handleDelete} />);
    
    // Open the confirmation dialog
    fireEvent.click(screen.getByText('Delete'));
    
    // Click the "Yes" button to confirm deletion
    fireEvent.click(screen.getByText('Yes'));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('should not call onDelete when confirmation is declined', () => {
    const handleDelete = jest.fn();
    render(<DeleteConfirm onDelete={handleDelete} />);
    
    // Open the confirmation dialog
    fireEvent.click(screen.getByText('Delete'));
    
    // Click the "No" button to cancel deletion
    fireEvent.click(screen.getByText('No'));
    expect(handleDelete).not.toHaveBeenCalled();
  });

});
