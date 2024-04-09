const presets = [
    '@babel/env',
    '@babel/preset-react'
];

const plugins = [
    [
        'import',
        {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,

        },
        "antd"
    ],[
        "import",
        {
            "libraryName": "tntd",
            "libraryDirectory": "es"
        },
        "tntd"
    ],
    [
        '@babel/plugin-proposal-decorators',
        {
            legacy: true
        }
    ],
    [
        '@babel/plugin-proposal-class-properties',
        {
            loose: true
        }
    ],
    [
        '@babel/plugin-proposal-optional-chaining',
        {
            loose: true
        }
    ]
];


module.exports = {presets, plugins};
