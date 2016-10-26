var out = {};

// font

out.fontFamily = "Colfax, 'Helvetica Neue', 'Arial', sans-serif";
out.fontFamilyHelvetica = "'Helvetica Neue', 'Arial', sans-serif";
out.lineHeight = '1.5';
out.headingFontFamily = out.fontFamily;
out.headingFontWeight = 'bold';
out.headingLineHeight = '1.25';
out.monospaceFontFamily = "'Source Code Pro', Menlo, Consolas, monospace",
out.boldFontWeight = 'bold';
out.buttonFontSize = 'inherit';
out.buttonFontWeight = 'bold';
out.buttonLineHeight = '20px';
out.buttonPaddingY = '.75rem';
out.buttonPaddingX = '1.5rem';
out.containerWidth = '672px';

// colors

out.color = {};

out.color.azure = 'hsl(234, 42%, 95%)';
out.color.black = 'hsl(210, 24%, 13%)';
out.color.jetBlack = 'hsla(210, 25%, 5%, 1)';
out.color.blue = 'hsl(220, 60%, 62%)';
out.color.charcoal = 'hsl(210, 17%, 25%)';
out.color.cyan = 'hsl(181, 48%, 58%)';
out.color.gray = 'hsl(210, 11%, 47%)';
out.color.grayBlue = 'hsl(210, 15%, 33%)';
out.color.green = 'hsl(154, 48%, 54%)';
out.color.lightGreen = 'hsl(76, 58%, 61%)';
out.color.orange = 'hsl(35, 80%, 58%)';
out.color.pink = 'hsl(303, 78%, 73%)';
out.color.red = 'hsl(2, 69%, 59%)';
out.color.redOrange = 'hsl(12, 73%, 59%)';
out.color.royal = 'hsl(220, 73%, 59%)';
out.color.silver = 'hsl(204, 9%, 89%)';
out.color.violet = 'hsl(271, 54%, 58%)';
out.color.white = 'hsl(234, 42%, 100%)';
out.color.yellow = 'hsl(49, 75%, 50%)';
out.color.brown = 'hsl(50, 73%, 26%)';

out.color.primary = out.color.red;
out.color.accent = out.color.cyan;

out.color.good = out.color.green;
out.color.info = out.color.blue;
out.color.warn = out.color.orange;
out.color.bad = out.color.red;

out.color.facebook = '#3B5998';
out.color.twitter = '#4099ff';
out.color.gplus = '#de4b3a';
out.color.tumblr = '#37465c';
out.color.reddit = '#c8def6';
out.color.pinterest = '#c9232d';
out.color.linkedin = '#4875B4';

// borders

out.borderWidth = '2px';
out.borderColor = out.color.silver;
out.borderRadius = 0;

// shadows

out.shadow0 = '0';
out.shadow1 = '0 1px 4px hsla(0, 0%, 0%, 0.37)';
out.shadow2 = '0 6px 10px hsla(0, 0%, 0%, 0.3), 0 2px 2px hsla(0, 0%, 0%, 0.2)';
out.shadow3 = '0 13px 25px hsla(0, 0%, 0%, 0.3), 0 11px 7px hsla(0, 0%, 0%, 0.19)';
out.shadow4 = '0 20px 40px hsla(0, 0%, 0%, 0.3), 0 14px 12px hsla(0, 0%, 0%, 0.17)';
out.shadow5 = '0 27px 55px hsla(0, 0%, 0%, 0.3), 0 17px 17px hsla(0, 0%, 0%, 0.15)';

// font sizes

out.h1 = '66px';
out.h2 = '48px';
out.h3 = '36px';
out.h4 = '24px';
out.h5 = '21px';
out.h6 = '18px';
out.h7 = '16px';
out.h8 = '14px';
out.h9 = '12px';
out.h10 = '10px';

exports['default'] = module.exports = out;
