const reactDomTemplate = (code, config, state) => {
    const props = {};
    let result = `import React from 'react'\n\n`;
    result += `const ${state.componentName} = ${props} => ${code}\n\n`;
    result += `export default ${state.componentName}`;
    return result
};

module.exports = reactDomTemplate;