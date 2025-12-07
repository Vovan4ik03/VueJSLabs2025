export default {
  install(app) {
    const copy = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        return false;
      }
    };

    app.config.globalProperties.$copy = copy;
    app.provide("copy", copy);
  }
};
