"use client";
import { PlusIcon } from '@heroicons/react/24/solid';

const AddButton = ({ children,onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-transparent hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // Tailwind classes
        >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
            <span>{children}</span>
        </button>
    );
};

export default AddButton;
