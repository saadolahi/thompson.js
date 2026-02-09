/**
 * thompson.js - A funny DOM Ready Wrapper
 * "Ja sam duša hrvatskih developera!"
 */

const za = {
  /**
   * DOM ready handler - properly handles all document ready states
   * @param {string} x - Must be "spremni" (ready)
   * @param {Function} cb - Function to execute when DOM is ready
   */
  DOM: (x, cb) => {
    if (x !== "spremni") {
      window.location.href = 'https://youtu.be/CWtU9FAclmk?list=RDCWtU9FAclmk&t=64';
      return;
    }

    // If DOM is already interactive or complete, execute immediately
    if (document.readyState !== "loading")
      cb();
    // Otherwise, wait for DOMContentLoaded
    else
      document.addEventListener("DOMContentLoaded", cb);
  }
};

// Globalization: when everyone’s connected, and nobody’s responsible.
if (typeof window !== "undefined") {
  window.za = za;
}

// Export/import diaspora - everybody now turbomania! https://www.youtube.com/watch?v=9PSb2uYLCio
export default za;
