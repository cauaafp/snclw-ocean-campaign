document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Charts
    new Chart(document.getElementById('bleachingChart'), {
        type: 'doughnut',
        data: { labels: ['Affected 84.4%', 'Unaffected'], datasets: [{ data: [84.4, 15.6], backgroundColor: ['#ff4d4d', '#00cc99'] }] },
        options: { responsive: true, plugins: { title: { display: true, text: '2023-2025 Coral Bleaching' } } }
    });

    new Chart(document.getElementById('fishingChart'), {
        type: 'bar',
        data: { labels: ['1970s', '2025'], datasets: [{ label: '% Overfished', data: [10, 35.5], backgroundColor: '#0066aa' }] },
        options: { responsive: true, plugins: { title: { display: true, text: 'Overfishing Trend' } } }
    });
});

function toggleSources() {
    const sources = document.getElementById('sourcesList');
    sources.classList.toggle('hidden');
}

function startQuiz() {
    let score = 0;
    const questions = [
        {q: "What % of coral reefs were impacted by bleaching in 2023-2025?\nA) 42%  B) 84%  C) 25%", a: "B"},
        {q: "What % of global fish stocks are overfished in 2025?\nA) 10%  B) 35%  C) 70%", a: "B"},
        {q: "What causes corals to bleach?\nA) Cold water  B) Warming oceans & acidification  C) Too many fish", a: "B"},
        {q: "Where do Toronto's microplastics eventually go?\nA) Stay in Lake Ontario  B) Flow to the Atlantic Ocean  C) Disappear", a: "B"},
        {q: "What is one easy thing we can do?\nA) Use more plastic  B) Choose sustainable seafood  C) Ignore the problem", a: "B"}
    ];

    questions.forEach((item, index) => {
        const answer = prompt(`Question ${index+1}: ${item.q}`);
        if (answer && answer.toUpperCase() === item.a) score++;
    });

    document.getElementById('quizResult').innerHTML = `<p>✅ You got ${score}/5 correct! Great job learning about our oceans. Share this with your class!</p>`;
}