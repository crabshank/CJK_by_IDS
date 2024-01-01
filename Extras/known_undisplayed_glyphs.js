/* TO GET PATHS FROM SVG:
let glyphs=[...document.getElementsByTagName('glyph')];
function getGlyphsSvg(){
	var arr=[];
	for (let i=0, len=glyphs.length; i<len; i++){
		let u=glyphs[i].getAttribute('glyph-name');
		if(u.startsWith('uni')){
			arr.push(['0x'+u.substring(3),glyphs[i].getAttribute('d')]);
		}else if(u.startsWith('u')){
			arr.push(['0x'+u.substring(1),glyphs[i].getAttribute('d')]);
		} 
	}
	return arr;
}
let glyphsSvg=getGlyphsSvg();
let glyphsSvgUnk=glyphsSvg.filter((g)=>{return known_undisplayed_glyphs.includes(g[0]);});
*/

/* TO REGENERATE AFTER ADDDING SVG PATHS:
let v=glyphsSvgUnk.map(s=>{return s[0]}); let k=known_undisplayed_glyphs.filter((g)=>{return !v.includes(g);}); console.log(k);
*/

const known_undisplayed_glyphs=[
    "0x2D063",
    "0x2B89A",
    "0x2D421",
    "0x2BE46",
    "0x2CF52",
    "0x2E68F",
    "0x2D8E1",
    "0x2DD05",
    "0x2C6B0",
    "0x2D049",
    "0x2D556",
    "0x2DEB1",
    "0x2E5DF",
    "0x2E815",
    "0x2D422",
    "0x2CF0C",
    "0x2DD22",
    "0x2E3B9",
    "0x2CFB5",
    "0x2D64C",
    "0x2E3D2",
    "0x2BCE4",
    "0x2DAC8",
    "0x2DC41",
    "0x2E159",
    "0x2E42F",
    "0x2E5C6",
    "0x2CFF2",
    "0x2D085",
    "0x2C575",
    "0x2D433"
];