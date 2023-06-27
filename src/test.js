// Задачка по JS із співбесіди, так і не зміг вирішити...// Очікуваний результат
// [ 'Alice', 'Charlie', 'Bob' ]
// Заборонено використовувати метод.sort(), рекурсії, цикл у циклі,
// Заборонено  більше одного явного виклику циклу(for, .foreach(), .map(), .reduce(), .filter(), etc).
const students = [
	{ name: 'Alice', age: 21, courses: ['Math', 'Physics'] },
	{ name: 'Bob', age: 19, courses: ['Computer Science'] },
	{ name: 'Charlie', age: 20, courses: ['History', 'Art'] },
]

function sortStudentsByAge(students) {
	return students.reduce((acc, el) => {
		return el.age > acc[0] ? acc.push(el) : acc.unshift(el)
	}, [])
}

console.log(sortStudentsByAge(students), 'result')
