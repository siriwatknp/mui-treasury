// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { matchers } from "@emotion/jest";

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);
