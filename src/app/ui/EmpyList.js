import { body_div } from "./Boxes";

export default function EmptyList() {
    return (
        <div className="bg-white drop-shadow-lg py-6 px-4 w-full">
            <p className="text-center text-gray-600 font-medium">Oh well...</p>
            <p className="text-center text-gray-600 font-normal">
                Looks like there are no users here yet.
                <br />
                Add a new user to see it here!
            </p>
        </div>

    )
}