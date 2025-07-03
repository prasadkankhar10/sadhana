import '@testing-library/jest-dom';

// Jest setup file to mock window.matchMedia for jsdom
if (typeof window !== 'undefined') {
  window.matchMedia =
    window.matchMedia ||
    function (query) {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: function () {}, // deprecated
        removeListener: function () {}, // deprecated
        addEventListener: function () {},
        removeEventListener: function () {},
        dispatchEvent: function () {},
      };
    };
}
