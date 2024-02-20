/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../src/lib/modal";
import "@testing-library/jest-dom";

describe("Given I am on the Modal component", () => {
	describe("When the Modal has contents", () => {
		test("Then, the Modal displays it's contents", () => {
			const modalContent = "The modal contents go here.";
			render(<Modal isOpen={true} content={<p>{modalContent}</p>} />);
			expect(screen.getByText(modalContent)).toBeInTheDocument();
		});
	});

	describe("When I click on 'x'", () => {
		test("Then, the Modal closes", () => {
			const modalContent = "The modal contents go here.";
			const handleClose = jest.fn();
			render(
				<Modal
					isOpen={true}
					content={<p>{modalContent}</p>}
					onClose={handleClose}
					buttonLabel="x"
				/>
			);
			fireEvent.click(screen.getByText("x"));
			expect(handleClose).toHaveBeenCalled();
		});
	});
});
