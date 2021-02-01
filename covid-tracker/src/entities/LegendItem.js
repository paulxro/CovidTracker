class LegendItem{
    constructor(title, color, isFor, textColor, outlineColor){
        this.title = title;
        this.color = color;
        this.isFor = isFor;
        this.textColor = textColor != null ? textColor : 'black';
        this.outlineColor = outlineColor;
    }
}

export default LegendItem;