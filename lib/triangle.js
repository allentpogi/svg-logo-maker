class TriangleLogo {
    constructor(logoText, logoTextcolour, logoShapecolour) {
      this.logoText = logoText;
      this.logoTextcolour = logoTextcolour;
      this.logoShapecolour = logoShapecolour;
    }

    generateTrianglelogo() {
        const svgTriangletemplate =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="50,180 150,20 250,180" fill="${this.logoShapecolour}" />
<text x="150" y="125" font-size="35" text-anchor="middle" fill="${this.logoTextcolour}">${this.logoText}</text>
</svg>

`;
        return svgTriangletemplate;
    }
}

module.exports = TriangleLogo;