
## interfaces:

```
Student {
  id: number,
  name: string,
  //img url
  img: string,
  }
```

## server routes

- **GET**  _"/students"_         :   returns Student[]
- **GET**  _"/students/:id"_     :   returns Student[] //returns either 0 or 1 element   

- **POST** _"/students/auth"_    :   receives form data: (username: string, password: string) returns some status code
- **POST** _"/students/:id"_     :   returns some status code
