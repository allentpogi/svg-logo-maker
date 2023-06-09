// Constructor CircleLogo is imported.
const CircleLogo = require("./circle");

// A testing suite for CircleLogo is created.
describe("Test for circle logo generation.", () => {
    // A test is created to check that the resulting svg template is correct
    describe("The SVG code generated by the circle logo generation", () => {
      it("should match the expected SVG code for circle logo.", () => {
        const textColour = "white";
        const textValue = "WWW";
        const backgroundColour = "black";
        const logo = new CircleLogo(textValue, textColour, backgroundColour);
        const expectedSVG =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="90" fill="black" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">WWW</text>
</svg>

`;
        expect(logo.generateCirclelogo()).toEqual(expectedSVG)

      });
    });
  });