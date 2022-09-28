/* Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

Para os próximos exercícios copie o código abaixo. */

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 15,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

  const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;

  const mageTurn = () => {
    const object = {
        damage: () => mage.mana < 15 ? 'Not enough mana' : Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence,
        mana: () => {
            if (mage.mana < 15) {
                return 0;
            } else {
                return 15;
            }
        }
    }
    return object;
  }

  const gameActions = {
    warriorTurn: (func) => {
        const warriorDamage = func();
        warrior.damage = warriorDamage
        dragon.healthPoints -= warriorDamage
    },
    mageTurn: (func) => {
        const mageDamage = func().damage()
        mage.damage = mageDamage;
        mage.mana = func().mana();
        dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (func) => {
        const dragonAttack = func()
        warrior.healthPoints -= dragonAttack
        mage.healthPoints -= dragonAttack
        dragon.damage = dragonAttack
    },
    turnResults: () => battleMembers,
  };

  gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageTurn);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());