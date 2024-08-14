const removeWatermark = () => {
    const buttons = document.body.querySelectorAll('button');
    for (const button of buttons) {
        if (button.title.startsWith('Open in'))
            button.style.display = 'none';
    }
};

setTimeout(removeWatermark, 1000);