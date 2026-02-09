# 🇭🇷 thompson.js

> **DOM Ready Wrapper - The Croatian Way** - "Ajmo programirati kao ljudi!"

A minimal, properly-implemented DOM ready wrapper with Croatian flavor. Just one method, done right.

## Why "thompson.js"?

Named after the legendary Thompson submachine gun, because this library is **fast, reliable, and gets the job done**. No bloat, no nonsense - just a proper DOM ready handler.

## Installation

Just download `thompson.js` and include it in your project:

```html
<script type="module" src="thompson.js"></script>
```

Or use it as a module:

```javascript
import za from './thompson.js';
```

## Usage

### The Famous DOM Ready Statement

```javascript
za.DOM("spremni", () => {
  console.log("Puče thompson.js, console.log a bez jQuery-a!");
});
```

**Note:** It MUST be `"spremni"` (ready in Croatian). Try anything else and you'll get a friendly warning! 😄

## How It Works

The `za.DOM()` method properly handles all document ready states:

- **If DOM is already ready** (`interactive` or `complete` state): Executes your callback immediately
- **If DOM is still loading**: Waits for `DOMContentLoaded` event

This is the correct way to handle DOM ready - no race conditions, no unnecessary delays.

## API Reference

#### `za.DOM(sta, callback)`

Wait for the DOM to be ready.

**Parameters:**
- `x` (string): Must be `"spremni"` - yes, it's enforced!
- `cb` (function): Your code to run when DOM is ready

**Example:**

```javascript
import za from './thompson.js';

za.DOM("spremni", () => {
  const element = document.querySelector("#myElement");
  element.textContent = "Ready!";
});
```

## Why Use This?

- ✅ **Tiny** - Only ~20 lines of actual code
- ✅ **Correct** - Properly handles all document ready states
- ✅ **Modern** - ES6 modules, works everywhere
- ✅ **Funny** - Because `za.DOM("spremni")` is more fun than `DOMContentLoaded`
- ✅ **Zero dependencies** - Just pure JavaScript

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>thompson.js Example</title>
</head>
<body>
  <h1 id="title">Loading...</h1>

  <script type="module">
    import za from './thompson.js';

    za.DOM("spremni", () => {
      document.querySelector("#title").textContent = "DOM is Ready!";
      console.log("✅ All DOM elements are now accessible");
    });
  </script>
</body>
</html>
```

## Browser Support

Works in all modern browsers that support ES6 modules:
- Chrome/Edge 69+
- Firefox 69+
- Safari 13+

For older browsers, you can easily convert this to ES5 or use with a bundler.

## The Implementation

```javascript
const za = {
  DOM: (x, cb) => {
    if (x !== "spremni") {
      console.warn(`⚠️ Brate, mora biti "spremni", ne "${x}"!`);
      return;
    }

    if (document.readyState !== "loading") cb();
    else document.addEventListener("DOMContentLoaded", cb);
  }
};
```

That's it. That's the whole library. Simple, correct, and to the point.

## Why Not Just Use DOMContentLoaded Directly?

You could! But:
1. This handles the case where DOM is already ready
2. It's shorter to write
3. It makes your Croatian colleagues smile
4. `za.DOM("spremni")` is memorable and fun

## License

MIT - Do whatever you want, just don't blame us if your code starts speaking Serbian.

---

**"Ma pusti jQuery, imamo mi svoga Thompson.js!"** 💪
