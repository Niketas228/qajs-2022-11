/*import fetch from "node-fetch";
import {discribe, expect, test} from '@jest/globals';*/

// создание пользователя с ошибкой логин уже используется ++

test( 'add user', async() => {
    const response = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
      
            userName: 'vasya',
            password: 'Vasya323#',
        })
    
    })
    
    const data = await response.json();
console.log(data);
expect(data.message).toEqual('User exists!');
    });


    // создание пользователя с ошибкой пароль не подходит ++

    test( 'add user', async() => {
        const response = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
          
                userName: 'vasya2',
                password: 'Vasya323',
            })
        
        })
        
        const data = await response.json();
    console.log(data);
    expect(response.status).toBe(400);
    
        });

        // создание пользователя успешно ++

        test( 'add user', async() => {
            const response = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
              
                    userName: 'vasya9',
                    password: 'Vasya323#',
                })
            
            })
            
            const data = await response.json();
        console.log(data);
        expect(response.status).toBe(201); 
            });

            // генерация токена с ошибкой ++
            test ( 'generation token error ', async() => {
                const response = await fetch ('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json' },
                    body: JSON.stringify({
                  
                        userName: 'vasya1',
                        password: 'Vasya323',
                    })
                
                })
                
                const data = await response.json();
            console.log(data);
            expect(response.status).toBe(200);    
                });

                // генерация токена успешно ++

                test ( 'generation token error ', async() => {
                    const response = await fetch ('https://bookstore.demoqa.com/Account/v1/GenerateToken ', {
                        method: 'POST',
                    
                        headers: { 'Content-Type' : 'application/json' },
                        body: JSON.stringify({
                      
                            userName: 'vasya1',
                            password: 'Vasya323#',
                        })
                    
                    })
                    
                    const data = await response.json();
                console.log(data);
                expect(response.status).toBe(200);    
                    });
    
