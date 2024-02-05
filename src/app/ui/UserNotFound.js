export default function UserNotFound() {
    return (
        <div className="text-center bg-white px-8 py-64">
            <h1 className="text-6xl font-bold text-danger">404</h1>
            <p className="text-xl font-semibold text-gray-700 mt-4">User Not Found</p>
            <p className="mt-2 text-gray-600">The user you are looking for does not exist or may have been removed.</p>
        </div>
    )
}