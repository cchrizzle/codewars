// 6/28/25 Saturday Codewars 8 Kyu Fundamentals - Grasshopper - Terminal Game #1

// https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript

/*
Terminal Game - Create Hero Prototype

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0
*/

function Hero(name) {
    return {
        name: name || 'Hero',
        position: '00',
        health: 100,
        damage: 5,
        experience: 0,
    };
}

/* =============
Other Solutions
============= */

function Hero(name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}
