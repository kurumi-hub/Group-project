function fetchChallenges() {
    fetch('challenge.php')
        .then(response => response.json())
        .then(challenges => {
            const challengeList = document.getElementById('challenge-list');
            challengeList.innerHTML = '';

            challenges.forEach(challenge => {
                const card = document.createElement('div');
                card.className = 'challenge-card';
                card.innerHTML = `
                    <h3>${challenge.name}</h3>
                    <p>${challenge.description}</p>
                    <p><strong>Points: ${challenge.points}</strong></p>
                    <p><strong>Flag: ${challenge.flag}</strong></p>
                    <p><strong>Difficulty: ${challenge.difficulty}</strong></p>
                `;
                challengeList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching challenges:', error));
}

function fetchLeaderboard() {
    fetch('leaderboard.php')
        .then(response => response.json())
        .then(leaderboard => {
            const leaderboardBody = document.getElementById('leaderboard-body');
            leaderboardBody.innerHTML = '';

            leaderboard.forEach((entry, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${index + 1}</td><td>${entry.username}</td><td>${entry.total_score}</td>`;
                leaderboardBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
}

window.onload = function() {
    fetchChallenges();
    fetchLeaderboard();
}