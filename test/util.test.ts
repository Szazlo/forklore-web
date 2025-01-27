import { describe, it, expect } from "vitest";
import { formatDate, validateEmail, validatePassword } from "../src/lib/utils";

describe("Email validation", () => {
	it("should return true for valid email", () => {
		const email = "person@example.com";

		expect(validateEmail(email)).toBe(true);
	});

	it("returns false for absent user part", () => {
		const email = "@example.com";

		expect(validateEmail(email)).toBe(false);
	});

	it("returns false for absent @", () => {
		const email = "personexample.com";

		expect(validateEmail(email)).toBe(false);
	});

	it("returns false for absent domain", () => {
		const email = "person@.com";

		expect(validateEmail(email)).toBe(false);
	});

	it("returns false for absent top-level domain", () => {
		const email = "person@example";

		expect(validateEmail(email)).toBe(false);
	});

	it("returns false for email with spaces", () => {
		const email = "person @example.com";

		expect(validateEmail(email)).toBe(false);
	});

	it("returns false for empty email", () => {
		expect(validateEmail("")).toBe(false);
	});
});

describe("Password validation", () => {
	it("returns true for valid password", () => {
		const password = "Password123";

		expect(validatePassword(password).valid).toBe(true);
	});

	it("returns false for password less than 8 characters", () => {
		const password = "Pass123";

		expect(validatePassword(password).valid).toBe(false);
	});

	it("returns false for password greater than 20 characters", () => {
		const password = "Password123Password123Password123";

		expect(validatePassword(password).valid).toBe(false);
	});

	it("returns false for password without a number", () => {
		const password = "Password";

		expect(validatePassword(password).valid).toBe(false);
	});

	it("returns false for password without an uppercase letter", () => {
		const password = "password123";

		expect(validatePassword(password).valid).toBe(false);
	});

	it("returns correct number of error messages", () => {
		expect(validatePassword("sword").messages.length).toBe(3);
		expect(validatePassword("password").messages.length).toBe(2);
		expect(validatePassword("password123").messages.length).toBe(1);
	});
});
