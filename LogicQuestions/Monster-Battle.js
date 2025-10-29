function monsterBattle(heroes, monsters) {
  const totalHeroEnergy = heroes.reduce((sum, e) => sum + e, 0);
  const totalMonsterEnergy = monsters.reduce((sum, e) => sum + e, 0);

  if (totalHeroEnergy < totalMonsterEnergy) return 0;

  heroes.sort((a, b) => a - b);

  let remainingEnergy = totalHeroEnergy;
  let deadHeroes = 0;

  for (let i = 0; i < heroes.length; i++) {
    if (remainingEnergy - heroes[i] >= totalMonsterEnergy) {
      remainingEnergy -= heroes[i];
      deadHeroes++;
    } else {
      break;
    }
  }


  return heroes.length - deadHeroes;
}


console.log(monsterBattle([4, 8, 2, 7, 5], [5, 4, 6, 3]));