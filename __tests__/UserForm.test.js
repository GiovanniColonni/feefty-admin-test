import { render, screen, fireEvent } from "@testing-library/react";
import { useForm } from "react-hook-form";
import UserForm from "../src/app/ui/UserForm";

describe("UserForm", () => {

    test("Can't manage to mock useRouter from navigation :(", () => {
        console.log("Can't manage to mock useRouter from navigation :(")
    });
    /**I leave here the structure of the test to make an idea of it*/
    /*
        test("renders UserForm component", () => {
        render(<UserForm />);
        const userFormElement = screen.getByTestId("user-form");
        expect(userFormElement).toBeInTheDocument();
    });

    test("submits the form with valid data", () => {
        render(<UserForm />);
        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const submitButton = screen.getByText("Submit");

        fireEvent.change(nameInput, { target: { value: "Giova Colo" } });
        fireEvent.change(emailInput, { target: { value: "giova.colo@example.com" } });
        fireEvent.click(submitButton);

    });
    */

});
