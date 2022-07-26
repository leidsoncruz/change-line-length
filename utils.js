const formatMessage = (message, max_length_per_line) => {
    let newMessage = message;

    let offset = 0;

    for (let i = 1; i < message.length; i += 1) {
        if (i % max_length_per_line === 0) {
            if (newMessage.charAt(i) === ' ') {
                newMessage = newMessage = `${newMessage.substr(0, i - offset)}\n${newMessage.substr(i - offset + 1)}`;
            } else {
                while (newMessage.charAt(i - offset) !== ' ' && offset <= max_length_per_line) {
                    offset++;
                }

                if (i - offset > 0) {
                    newMessage = `${newMessage.substr(0, i - offset)}\n${newMessage.substr(i - offset + 1)}`;
                }
            }
        }
    }

    return newMessage;
}

const pbcopy = (data) => {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}

module.exports = {
    formatMessage,
    pbcopy
}