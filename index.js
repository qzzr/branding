var out = {};

// font

out.fontFamily = "Colfax, effra, 'Helvetica Neue', Helvetica, sans-serif";
out.lineHeight = '1.5';
out.headingFontFamily = out.fontFamily;
out.headingFontWeight = 'bold';
out.headingLineHeight = '1.25';
out.monospaceFontFamily = "'Source Code Pro', Consolas, monospace",
out.h1 = '2rem';
out.h2 = '1.5rem';
out.h3 = '1.25rem';
out.h4 = '1rem';
out.h5 = '.875rem';
out.h6 = '.75rem';
out.h7 = '1rem';
out.h8 = '.875rem';
out.h9 = '.75rem';
out.h10 = '.625rem';
out.boldFontWeight = 'bold';
out.space1 = '.5rem';
out.space2 = '1rem';
out.space3 = '2rem';
out.space4 = '4rem';
out.buttonFontSize = 'inherit';
out.buttonFontWeight = 'bold';
out.buttonLineHeight = '1.125rem';
out.buttonPaddingY = '.5rem';
out.buttonPaddingX = '1rem';
out.containerWidth = '672px';

// colors

out.color = {};

out.color.red = 'hsl(2, 69%, 59%)';
out.color.orange = 'hsl(35, 80%, 58%)';
out.color.yellow = 'hsl(49, 75%, 50%)';
out.color.green = 'hsl(154, 48%, 54%)';
out.color.blue = 'hsl(220, 60%, 62%)';
out.color.cyan = 'hsl(181, 48%, 58%)';
out.color.violet = 'hsl(271, 54%, 58%)';

out.color.white = 'hsl(234, 42%, 95%)';
out.color.silver = 'hsl(204, 9%, 89%)';
out.color.gray = 'hsl(210, 11%, 47%)';
out.color.black = 'hsl(210, 6%, 14%)';

out.color.primary = out.color.red;
out.color.accent = out.color.cyan;

out.color.good = out.color.green;
out.color.info = out.color.blue;
out.color.warn = out.color.orange;
out.color.bad = out.color.red;

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

exports['default'] = module.exports = out;
