module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
    '*.{html,css,less,scss,ejs,cjs,json}': ['prettier --write']
};
