import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../Register";

describe("Register component", () => {
  it("빈칸 submit 시 validation 확인", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    // screen.debug();
  });
  
  test("", () => {
    render(<Register />);
    // const element = screen.getByRole("heading", { level: 2 });
    const element = screen.getByRole("heading", {
      name: /please enter your details below to register yourself\./i
    });
    expect(element).toBeInTheDocument();
  });
});