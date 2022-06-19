function simply (options) {
    let body = document.getElementsByTagName('body');

    if (options.scrollbar === 'simply' && options.scrollbar_color)
        document.body.className = `scrollbar-${scrollbar_color}`;
    else 
        document.body.className = 'scrollbar-primary';
}

module.exports.simply = simply;