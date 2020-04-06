window.addEventListener('beforeunload', handleBeforeunload);

function handleBeforeunload() {
    window.scrollTo(0,0);
}