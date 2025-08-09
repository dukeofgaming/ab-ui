/**
 * ESLint rule to enforce that every Storybook .stories.tsx file has a Figma design link in parameters.design.url
 */

export default {
  meta: {
    type    : 'problem',

    docs    : {
      description: 'Require Figma design link in Storybook stories',
    },

    schema  : [],

    messages: {
      missingFigma: 'Storybook story is missing a Figma design link in parameters.design.url (should be a Figma URL).',
      notFigmaUrl : 'Storybook story parameters.design.url is not a Figma link.'
    },
  },

  create(context) {
    const FIGMA_HOST_PREFIX = 'https://www.figma.com';

    const reportMissing = (astNode) => (
      context.report({ node: astNode, messageId: 'missingFigma' })
    );

    const isPropertyNamed = (property, name) => (
      property
      && property.type === 'Property'
      && property.key
      && property.key.name === name
    );

    const getPropertyByName = (objectExpression, propertyName) => (
      objectExpression
      && objectExpression.properties
      && objectExpression.properties.find((property) => (
        isPropertyNamed(property, propertyName)
      ))
    );

    const checkFigmaLink = (parametersExpression, reportAstNode) => {
      const designProperty = getPropertyByName(parametersExpression, 'design');
      if (!designProperty) return reportMissing(reportAstNode);

      const urlProperty = getPropertyByName(designProperty.value, 'url');
      if (!urlProperty) return reportMissing(reportAstNode);

      const figmaUrl = urlProperty.value && urlProperty.value.value;
      const isValid = (typeof figmaUrl === 'string') && figmaUrl.startsWith(FIGMA_HOST_PREFIX);

      if (!isValid) {
        context.report({ node: urlProperty, messageId: 'notFigmaUrl' });
      }
    };

    let declarations = {};

    const getParameters = (declarationNode) => {
      if (declarationNode?.type === 'ObjectExpression') {
        return getPropertyByName(declarationNode, 'parameters')?.value;
      }

      if (declarationNode?.type === 'Identifier') {
        const objectExpression = declarations[declarationNode.name];
        return objectExpression && getPropertyByName(objectExpression, 'parameters')?.value;
      }

      return undefined;
    };

    return {
      VariableDeclarator(astNode) {
        const isIdentifier          = astNode.id?.type === 'Identifier';
        const isObjectExpression    = astNode.init?.type === 'ObjectExpression';

        if (isIdentifier && isObjectExpression) {
          declarations[astNode.id.name] = astNode.init;
        }
      },

      ExportDefaultDeclaration(astNode) {
        const parametersExpression = getParameters(astNode.declaration);

        if (!parametersExpression) {
          context.report({ node: astNode, messageId: 'missingFigma' });
          return;
        }

        checkFigmaLink(parametersExpression, astNode);
      },
    };

  },
  
};
