 ## ✨ Manual build

### **Start the myRestau API** 

Simple starter built with Python / DRF Library / Postgress and JWT Auth. The authentication flow is based on [json web tokens](https://jwt.io).

<br />

> 👉 **Step #1** -  Change the directory to `backend_myRestau`

```bash
$ cd backend_myRestau
```

<br />

> 👉 **Step #2** - Create a virtual environment

```bash
$ # Virtualenv modules installation (Unix based systems)
$ virtualenv env
$ source env/bin/activate
$
$ # Virtualenv modules installation (Windows based systems)
$ # virtualenv env
$ # .\env\Scripts\activate
```

<br />

> 👉 **Step #3** - Install dependencies using PIP

```bash
$ pip install -r requirements.txt
```

<br />

> 👉 **Step #4** - Create a new `.env` file using sample `env.sample`


> 👉 **Step #5**
Setup Database:
- create an .env file
- config the environement variables with your credintials
------ -------
DB_NAME=DB_NAME
DB_USER=DB_USER
DB_PASSWORD=DB_PASSWORD
DB_HOST=localhost
DB_PORT=5432
------ ------


The meaning of each variable can be found below: 

- `DEBUG`: if `True` the app runs in develoment mode
  - For production value `False` should be used
- `SECRET_KEY`: used in assets management

<br />

> 👉 **Step #5** - Start the API server

```bash
$ python manage.py migrate
$ python manage.py runserver 8000
```

The API server will start using the explicit port `8000`.

<br />

