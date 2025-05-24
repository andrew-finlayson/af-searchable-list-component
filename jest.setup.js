require('@testing-library/jest-dom');

// Extend Jest matchers
expect.extend({
  toBeInTheDocument(received) {
    const pass = received !== null;
    return {
      pass,
      message: () => `expected ${received} ${pass ? 'not ' : ''}to be in the document`,
    };
  },
  toHaveAttribute(received, name, value) {
    const pass = received.hasAttribute(name) && (!value || received.getAttribute(name) === value);
    return {
      pass,
      message: () => `expected ${received} ${pass ? 'not ' : ''}to have attribute ${name}${value ? ` with value ${value}` : ''}`,
    };
  },
  toHaveStyle(received, style) {
    const computedStyle = window.getComputedStyle(received);
    const pass = Object.entries(style).every(([prop, value]) => computedStyle[prop] === value);
    return {
      pass,
      message: () => `expected ${received} ${pass ? 'not ' : ''}to have style ${JSON.stringify(style)}`,
    };
  },
}); 