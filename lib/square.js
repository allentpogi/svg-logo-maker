class SquareLogo {
    constructor(logoText, logoTextcolour, logoShapecolour) {
      this.logoText = logoText;
      this.logoTextcolour = logoTextcolour;
      this.logoShapecolour = logoShapecolour;
    }

    generateSquarelogo() {
        const svgSquaretemplate =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="60" y="10" rx="20" ry="20" width="180" height="180" fill="${this.logoShapecolour}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextcolour}">${this.logoText}</text>
</svg>

`;
        return svgSquaretemplate;
    }
}

module.exports = SquareLogo;