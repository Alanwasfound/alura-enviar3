document.getElementById('next-button').addEventListener('click', function() {
    const storySection = document.getElementById('story');
    const currentText = storySection.querySelector('p').textContent;

    if (currentText.includes('João sempre sonhou')) {
        storySection.querySelector('p').textContent = 'João partiu em sua jornada, enfrentando desafios e fazendo novos amigos. Ele aprendeu lições valiosas e cresceu como pessoa.';
    } else if (currentText.includes('João partiu')) {
        storySection.querySelector('p').textContent = 'No final, João retornou ao seu vilarejo, mas não era mais o mesmo. Ele havia se tornado um herói, admirado por todos. E assim, João viveu feliz para sempre.';
        document.getElementById('next-button').disabled = true;
    }
});
