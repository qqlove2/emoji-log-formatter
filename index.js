class EmojiLogFormatter {
    static info(message) {
        console.log(`ℹ️ Info: ${message}`);
    }

    static warning(message) {
        console.log(`⚠️ Warning: ${message}`);
    }

    static error(message) {
        console.log(`❌ Error: ${message}`);
    }

    static success(message) {
        console.log(`✅ Success: ${message}`);
    }

    static debug(message) {
        console.log(`🐛 Debug: ${message}`);
    }
}

module.exports = EmojiLogFormatter;