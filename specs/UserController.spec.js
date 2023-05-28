import axios from "axios";
import UserController from "../src/controller/UserController"
describe('Тестирование Юзер контроллера', () => {
    const name = 'Vasya' + Math.random();
    const password = 'Vasya323#';
    const user = {
        userName: name,
        password: password
    };
    let userID = 'nothing';
    let token = ''

    test('Добавление пользователя', async() => {
        const result = await UserController.add(user);
        console.log(userID);
        userID = result.userID;
        console.log(userID);
        expect(userID != null).toBe(true);
    })

    test('авторизация пользователя', async () => {
        const response = await UserController.login(user);
        token = response.token
        const result = await UserController.authorized(user, token);
        console.log(result);
        expect(result).toBe(true)

    })
    test('Получение информации о пользователе по ЮЮИД', async () => {
        const result = await UserController.get(userID, token)
        console.log(result)
        expect(result.userId).toBe(userID);
    })

    test('удаление пользователя', async () => {
        const result = await UserController.delete(userID, token)
        console.log('result')
        console.log(result)
        expect(result.status).toEqual(204)
    })
})


// test.skip('Успешная авторизация возвращает true', async () => {
    // const result = await UserController.authorized();
    // expect(result).toBe(false);
// })



// test.skip('успешное удаление пользователя', async() => {
    // const result = await UserController.delete();
    // expect(result).tobe(data.status)
// })