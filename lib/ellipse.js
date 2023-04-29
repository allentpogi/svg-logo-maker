class EllipseLogo {
    constructor(logoText, logoTextcolour, logoShapecolour) {
      this.logoText = logoText;
      this.logoTextcolour = logoTextcolour;
      this.logoShapecolour = logoShapecolour;
    }

    generateEllipselogo() {
        const svgEllipsetemplate =
`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="150" cy="100" rx="100" ry="50" fill="${this.logoShapecolour}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextcolour}">${this.logoText}</text>
</svg>

`;
        return svgEllipsetemplate;
    }
}

module.exports = EllipseLogo;