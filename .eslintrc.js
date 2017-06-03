module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: ['html'],
    // custom rules
    'rules': {
        'no-new': 'off',
        'indent': 0,
        // 'indent': [2, 2, { 'SwitchCase': 1 }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
