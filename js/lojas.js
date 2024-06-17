// fechar modal ao pressionar esc ou clicar fora

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelector('.modal').style.display = 'none';
    }
}
);

