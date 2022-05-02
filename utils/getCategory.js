exports.getCategory = function getCategory(path) {
    const regex = new RegExp(`/(posts)/`);
    if (regex.test(path)) {
        return `blog`;
    }

    return "project";
};
