import { procedureDB } from "../src/lib/prisma/utils";
import { PrismaClientInitializationError,PrismaClientKnownRequestError } from "@prisma/client";
/**
 * Mock the PrismaClient to avoid connecting to the database
 * maybe there are better approach to mock the prisma client
 * in case the test suite get complex (like: https://github.com/demonsters/prisma-mock)
 * for now it's enough to test the procedureDB function.
 */
jest.mock('@prisma/client', () => {

    class PrismaClientInitializationError extends Error {
        constructor(message) {
            super(message);
            this.name = "PrismaClientInitializationError";
        }
    }

    class PrismaClientKnownRequestError extends Error {
        constructor(message) {
            super(message);
            this.name = "PrismaClientKnownRequestError";
        }
    }

    return {

        __esModule: true, // Use it when using ES modules
        // Mock the specific methods you use from the Prisma client
        PrismaClient: jest.fn().mockImplementation(() => {
            // Constructor-like behavior
            console.log('Mock PrismaClient is being instantiated');

            // Simulated instance properties or methods
            const $connect = jest.fn().mockResolvedValue(undefined);
            const $disconnect = jest.fn().mockResolvedValue(undefined);
            // Add other methods or properties as needed

            // Return the mock instance
            return { $connect, $disconnect };
        }),
        PrismaClientInitializationError,
        PrismaClientKnownRequestError,
    };
});

describe("procedureDB", () => {
    it("should execute the provided function and return its result", async () => {
        // Define a mock function to be passed to procedureDB
        const mockFunction = jest.fn(() => "Mock result");

        // Call procedureDB with the mock function and any additional parameters
        const result = await procedureDB(mockFunction, "param1", "param2");

        // Assert that the mock function was called with the correct parameters
        expect(mockFunction).toHaveBeenCalledWith("param1", "param2");

        // Assert that the result matches the expected value
        expect(result).toBe("Mock result");
    });

    it("CASE-FUNCTON should handle errors and return false", async () => {
        // Define a mock function that throws an error
        const mockFunction = jest.fn(() => {
            throw new Error("Error from the function to execute (ex. an undefined in the id)");
        });

        // Call procedureDB with the mock function and any additional parameters
        const result = await procedureDB(mockFunction, "param1", "param2");

        // Assert that the mock function was called with the correct parameters
        expect(mockFunction).toHaveBeenCalledWith("param1", "param2");

        // Assert that the result is false
        expect(result).toBe(false);
    });
    it("CASE_DB_NO_CONNECTION should handle errors and return false", async () => {
        // Define a mock function that throws an error
        const mockFunction = jest.fn(() => {
            throw new PrismaClientInitializationError("Error from the database");
        });

        // Call procedureDB with the mock function and any additional parameters
        const result = await procedureDB(mockFunction, "param1", "param2");

        // Assert that the mock function was called with the correct parameters
        expect(mockFunction).toHaveBeenCalledWith("param1", "param2");

        // Assert that the result is false
        expect(result).toBe(false);
    })
    it("CASE_DB_KNOWN_ERROR should handle errors and return false", async () => {
        // Define a mock function that throws an error
        const mockFunction = jest.fn(() => {
            throw new PrismaClientKnownRequestError("Error from the database");
        });

        // Call procedureDB with the mock function and any additional parameters
        const result = await procedureDB(mockFunction, "param1", "param2");

        // Assert that the mock function was called with the correct parameters
        expect(mockFunction).toHaveBeenCalledWith("param1", "param2");

        // Assert that the result is false
        expect(result).toBe(false);
    })
});
