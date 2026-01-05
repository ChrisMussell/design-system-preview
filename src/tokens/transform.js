import tokens from './tokens.json';

// Resolve token references like {colors.blue.500}
function resolveValue(value, tokensObj) {
  if (typeof value !== 'string') return value;
  
  const referenceMatch = value.match(/\{([^}]+)\}/g);
  if (!referenceMatch) return value;
  
  let resolved = value;
  referenceMatch.forEach(ref => {
    const path = ref.slice(1, -1).split('.');
    let current = tokensObj;
    
    for (const key of path) {
      if (current[key]) {
        current = current[key];
      }
    }
    
    if (current && typeof current === 'object' && current.$value !== undefined) {
      const resolvedValue = resolveValue(current.$value, tokensObj);
      resolved = resolved.replace(ref, resolvedValue);
    }
  });
  
  // Handle math expressions
  try {
    if (resolved.includes('*') || resolved.includes('/')) {
      resolved = String(eval(resolved));
    }
  } catch (e) {
    // If eval fails, return as is
  }
  
  return resolved;
}

// Flatten token object to CSS variables
function flattenTokens(obj, prefix = '', result = {}) {
  for (const key in obj) {
    if (key.startsWith('$')) continue; // Skip metadata
    
    const value = obj[key];
    const newPrefix = prefix ? `${prefix}-${key}` : key;
    
    if (value && typeof value === 'object' && value.$value !== undefined) {
      // This is a token
      let resolved = resolveValue(value.$value, tokens);
      
      // Add px unit for dimensions if no unit specified
      if (value.$type === 'dimension' || value.$type === 'spacing' || 
          value.$type === 'borderRadius' || value.$type === 'fontSizes') {
        if (!isNaN(resolved) && !String(resolved).includes('px')) {
          resolved = `${resolved}px`;
        }
      }
      
      result[newPrefix] = resolved;
    } else if (value && typeof value === 'object') {
      // Recurse into nested objects
      flattenTokens(value, newPrefix, result);
    }
  }
  
  return result;
}

export function generateCSSVariables(theme = 'light') {
  const coreTokens = flattenTokens(tokens.core);
  const themeTokens = theme === 'light' 
    ? flattenTokens(tokens.light) 
    : flattenTokens(tokens.dark);
  const componentTokens = flattenTokens(tokens.theme);
  
  return { ...coreTokens, ...themeTokens, ...componentTokens };
}

export const cssVars = generateCSSVariables();
