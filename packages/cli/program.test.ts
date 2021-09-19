import { createProgram } from "./program";

describe("cli - program", function () {
  const mockClone = jest.fn();
  const mockInit = jest.fn();
  let program: ReturnType<typeof createProgram>;
  beforeEach(() => {
    jest.clearAllMocks();
    program = createProgram({
      commands: {
        clone: mockClone,
        init: mockInit,
      },
    });
  });
  describe("version", () => {
    it("can get version", () => {
      const helpInformation = program.helpInformation();

      expect(helpInformation.includes("-v, --version")).toBe(true);
      expect(helpInformation.includes("output the current version")).toBe(true);
    });
  });

  describe("init", () => {
    it("call provided init function", () => {
      program.parse(["init"], {
        from: "user",
      });
      expect(mockInit).toHaveBeenCalled();
    });
  });

  describe("clone", () => {
    it("require at least one source", () => {
      const mockListener = jest.fn();
      program.on("command:clone", mockListener);
      program.parse(["clone", "component-shape"], { from: "user" });
      expect(mockListener).toHaveBeenCalledWith(
        ["component-shape"],
        expect.anything()
      );
    });

    it("can provide multiple sources", () => {
      const mockListener = jest.fn();
      program.on("command:clone", mockListener);
      program.parse(
        ["clone", "component-shape", "style-shape-sticker", "style-shape-2"],
        { from: "user" }
      );
      expect(mockListener).toHaveBeenCalledWith(
        ["component-shape", "style-shape-sticker", "style-shape-2"],
        expect.anything()
      );
    });

    it("has no default directory", () => {
      program.parse(["clone", "component-shape"], {
        from: "user",
      });
      expect(mockClone.mock.calls[0][1].dir).toBeUndefined();
    });

    it("use optional -d as destination directory", () => {
      program.parse(["clone", "component-shape", "-d", "temp"], {
        from: "user",
      });
      expect(mockClone.mock.calls[0][1]).toMatchObject({
        dir: "temp",
      });
    });

    it("support only javascript template", () => {
      program.parse(["clone", "component-shape", "-t", "javascript"], {
        from: "user",
      });
      expect(mockClone.mock.calls[0][1]).toMatchObject({
        template: "javascript",
      });
    });

    it("has no storybook & test by default", () => {
      program.parse(["clone", "component-shape"], {
        from: "user",
      });
      expect(mockClone.mock.calls[0][1]).toMatchObject({});
    });

    it("can provide --storybook", () => {
      program.parse(["clone", "component-shape", "--storybook"], {
        from: "user",
      });
      expect(mockClone.mock.calls[0][1]).toMatchObject({
        storybook: true,
      });
    });

    it("can provide --test", () => {
      program.parse(["clone", "component-shape", "--test"], {
        from: "user",
      });
      expect(mockClone.mock.calls[0][1]).toMatchObject({
        test: true,
      });
    });
  });
});
